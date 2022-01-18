import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import crypto from 'crypto';
import bcrypt from 'bcrypt';
import multer from 'multer';
// import bodyparser from 'bodyparser';

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost/rekredo';
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = Promise;

// Defines the port the app will run on. Defaults to 8080, but can be
// overridden when starting the server. For example:
//
//   PORT=9000 npm start
const port = process.env.PORT || 8080;
const app = express();

// Add middlewares to enable cors and json body parsing
app.use(cors());
app.use(express.json());
// app.use(bodyparser.json());

//schemas
const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  accountType: {
    type: String,
    enum: ['Business', 'Personal'],
    required: true,
  },
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString('hex'),
  },
});

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ['Instrument', 'Vehicle', 'Clothing', 'Electronics', 'Art', 'Toys'],
  },
  tags: {
    type: Array,
  },
});

const ImageSchema = new mongoose.Schema({
  name: String,
  desc: String,
  img: {
    data: Buffer,
    contentType: String,
  },
});

const User = mongoose.model('User', UserSchema);
const Product = mongoose.model('Product', ProductSchema);
const Image = mongoose.model('Image', ImageSchema);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now());
  },
});

const upload = multer({ storage: storage });

const authenticateUser = async (req, res, next) => {
  const accessToken = req.header('Authorization');
  try {
    const user = await User.findOne({ accessToken });
    if (user) {
      next();
    } else {
      res.status(401).json({ response: 'Please log in', success: false });
    }
  } catch (error) {
    res.status(400).json({ response: error, success: false });
  }
};

app.get('/', (req, res) => {
  res.send('Homepage');
});

app.get('/account', authenticateUser);
app.get('/account', (req, res) => {
  res.send('this is your account page');
});

app.get('/', (req, res) => {
  Image.find({}, (err, items) => {
    if (err) {
      console.log(err);
      res.status(500).send('An error occurred', err);
    } else {
      res.render('imagesPage', { items: items });
    }
  });
});

app.post('/register', async (req, res) => {
  const { username, password, accountType } = req.body;

  try {
    const salt = bcrypt.genSaltSync();

    if (password.length < 5) {
      throw 'Password must be at least 5 characters long';
    }

    const newUser = await new User({
      username,
      password: bcrypt.hashSync(password, salt),
      accountType,
    }).save();

    res.status(201).json({
      response: {
        userId: newUser._id,
        username: newUser.username,
        accessToken: newUser.accessToken,
      },
      success: true,
    });
  } catch (error) {
    res.status(400).json({ response: error, success: false });
  }
});

app.post('/log-in', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
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

app.post('/upload', async (req, res) => {
  const { name, description, category, tags } = req.body;
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
    if (Array.isArray(tags) === false) {
      throw 'please add tags as an array';
    }

    const newProduct = await new Product({
      name,
      description,
      category,
      tags,
    }).save();
    res.status(201).json({
      response: {
        productId: newProduct._id,
        name: newProduct.name,
        description: newProduct.description,
        category: newProduct.category,
        tags: newProduct.tags,
      },
      success: true,
    });
  } catch (error) {
    res.status(404).json({ response: error, success: false });
  }
});

// Start the server
app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`Server running on http://localhost:${port}`);
});
