import express from 'express';
import mongoose from 'mongoose';
import listEndpoints from 'express-list-endpoints';
import cors from 'cors';
// import crypto from 'crypto';
import bcrypt from 'bcrypt';

// for uploading images to the database
import multer from 'multer';
import dotenv from 'dotenv';
import cloudinaryFramework from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

// importing models
const {
  PersonalUser,
  BusinessUser,
  Product,
  Image,
} = require('./models/models.js');

// for MongoDB connection
const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/rekredo';
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise;

/**
 * Defines the port the app will run on. Defaults to 8080, but can be
 * overridden when starting the server. For example:
 * PORT=9000 npm start
 */
const port = process.env.PORT || 8080;
const app = express();
dotenv.config();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());
//app.use(express.urlencoded({extended:true}) might be useful for the form data?

/**
 * Setting up our cloudinary storage
 * secrets are in env file in gitignore
 */
const cloudinary = cloudinaryFramework.v2;
cloudinary.config({
  cloud_name: 'rekredo',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'props',
    allowedFormats: ['jpg', 'png', 'JPG', 'jpeg'],
    transformation: [{ width: 500, height: 500, crop: 'limit' }],
  },
});
const parser = multer({ storage });


// authenticating  a user
const findUserByToken = async (accessToken) => {
  const user = await PersonalUser.findOne({ accessToken });
  if (user) {
    return user;
  } else {
    const user = await BusinessUser.findOne({ accessToken });
    return user;
  }
};
const authenticateUser = async (req, res, next) => {
  const accessToken = req.header('Authorization');
  try {
    const user = await findUserByToken(accessToken);
    if (user) {
      req.user = user;
      next();
    } else {
      res.status(401).json({ response: 'Please log in', success: false });
    }
  } catch (error) {
    res.status(400).json({ response: error, success: false });
  }
};

app.get('/', async (req, res) => {
  try {
    res.json(listEndpoints(app));
  } catch (err) {
    res.status(404).send({ success: false, error: 'Not found' });
  }
});

// get account details after authentication
app.get('/account', authenticateUser);
app.get('/account', (req, res) => {
  res.send('this is your account page');
});

// get all products in the database
app.get('/products', async (req, res) => {
  try {
    const allProducts = await Product.find({}).populate('image');

    if (!allProducts) {
      throw 'product library empty are not available';
    }

    // const populated = await allProducts.map(element => {
    // element.populate('image')
    // return element
    // });

    res.status(200).json({ response: allProducts, success: true });
  } catch (error) {
    res.status(400).json({ response: error, success: false });
  }
});

// find one product in the database by id
app.get('/products/:id', async (req, res) => {

  try {
    const oneProduct = await Product.findById(req.params.id);
    if (!oneProduct) {
      throw 'product library empty are not available';
    }
    res.status(200).json({ response: oneProduct, success: true });
  } catch (error) {
    res.status(400).json({ response: error, success: false });
  }
});

// register a personal user
app.post('/register/personal', async (req, res) => {
  const { username, password, email } = req.body;

  try {
    const salt = bcrypt.genSaltSync();

    if (password.length < 5) {
      throw 'Password must be at least 5 characters long';
    }

    const newUser = await new PersonalUser({
      username,
      password: bcrypt.hashSync(password, salt),
      email,
    }).save();

    res.status(201).json({
      response: {
        userId: newUser._id,
        username: newUser.username,
        email: newUser.email,
        accessToken: newUser.accessToken,
      },
      success: true,
    });
  } catch (error) {
    if (error.code === 11000) {
      res
        .status(401)
        .json({ success: false, error: 'That username is already taken' });
    } else {
      res.status(400).json({ response: error, success: false });
    }
  }
});

// register a business user
app.post('/register/business', async (req, res) => {
  const { username, password, email, location, vatNumber } = req.body;

  try {
    const salt = bcrypt.genSaltSync();

    if (password.length < 5) {
      throw 'Password must be at least 5 characters long';
    }

    const newUser = await new BusinessUser({
      businessName: username,
      password: bcrypt.hashSync(password, salt),
      businessEmail: email,
      location,
      vatNumber,
    }).save();

    res.status(201).json({
      response: {
        userId: newUser._id,
        username: newUser.businessName,
        email: newUser.businessEmail,
        location: newUser.location,
        vatNumber: newUser.vatNumber,
        accessToken: newUser.accessToken,
      },
      success: true,
    });
  } catch (error) {
    if (error.code === 11000) {
      res
        .status(401)
        .json({ success: false, error: 'That username is already taken' });
    } else {
      res.status(400).json({ response: error, success: false });
    }
  }
});

// find a user by their username in one of two different collections, either business or personal
const findUser = async (username) => {
  
    const user = await PersonalUser.findOne({ username });
    if (user) {
      return user;
    } else {
      const user = await BusinessUser.findOne({ businessName: username });
      return user;
    }
  

};

// log-in user
app.post('/log-in', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await findUser(username);

    if (user && bcrypt.compareSync(password, user.password)) {
      res.status(200).json({
        response: {
          userId: user._id,
          username: user.username,
          accessToken: user.accessToken,
        },
        success: true,
      });
    } else {
      res.status(404).json({
        response: 'Username or password does not match',
        success: false,
      });
    }
  } catch (error) {
    res.status(404).json({ response: error, success: false });
  }
});

// upload a product
app.post('/product-upload', async (req, res) => {
  const { name, description, category, tags, image } = req.body;
  console.log(image, "image recieved in backend in product upload")
  try {
    if (!name) {
      throw 'Your product has to have a name';
    }
    if (!description) {
      throw 'Your product has to have a description';
    }
    if (!category) {
      throw 'please choose a category for your product';
    }
    if (tags && Array.isArray(tags) === false) {
      throw 'please add tags as an array';
    }

    // const image = Image.findById(imageId);

    const newProduct = await new Product({
      name,
      description,
      category,
      tags,
      image: image._id
    }).save();

    // console.log(newProduct, "new product line 262, testing using _id");
    // const findingNewProduct = await Product.findById(newProduct._id)
    // console.log(findingNewProduct, "finding after creating")
    await newProduct.populate('image');
    res.status(201).json({
      response: {
        productId: newProduct._id,
        name: newProduct.name,
        description: newProduct.description,
        category: newProduct.category,
        tags: newProduct.tags,
        image: newProduct.image,
      },
      success: true,
    });
  } catch (error) {
    res.status(404).json({ response: error, success: false });
  }
});

// upload image for product
app.post('/image-upload', parser.single('image'), async (req, res) => {
  //   try {
  //     const image = await new Image({
  //       name: req.body.name,
  //       imageUrl: req.file.path,
  //       imageId: req.file.filename
  //     }).save();
  //     res.json(image);
  //   } catch (err) {
  //     res.status(400).json({ errors: err.errors });
  //   }
  // });

  try {
    const image = await new Image({
      imageUrl: req.file.path,
      imageId: req.file.filename,
    }).save();

    console.log("new image on 300", image)

    // const product = await Product.findOne({ name: product.name });
    res.json({ response: image, success: true });
  } catch (err) {
    res.status(400).json({ response: error, success: false });
  }
});

// Start the server
app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`Server running on http://localhost:${port}`);
});
