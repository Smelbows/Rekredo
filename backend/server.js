import express from 'express';
import mongoose from 'mongoose';
import listEndpoints from 'express-list-endpoints';
import cors from 'cors';

// for uploading images to the database
import multer from 'multer';
import dotenv from 'dotenv';
import cloudinaryFramework from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

// importing endpoints
import { getProductById, getProducts } from './controllers/productsEndPoints';
import { registerUser } from './controllers/registerEndPoints';
import { authenticateUser } from './controllers/authentication';
import { loginUser } from './controllers/loginEndPoints';
import { imageUpload, productUpload } from './controllers/uploadEndPoints';
import { createOrder } from './controllers/orderEndPoints';

// importing models
const { User, Product, Image } = require('./models/models.js');

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
    transformation: [
      { gravity: 'auto', height: 500, quality: 100, width: 500, crop: 'fill' },
      // { effect: 'trim' },

      // { width: 'iw', height: 'ih', gravity: 'center', crop: 'lfill' }, //center object with trim
      // // { width: 500, height: 500 },
      // ,
      // { variables: [['$imgwidth', '500']] },
      // { variables: [['$imgheight', '500']] },
      // { variables: [['$border', '1']] },
      // { if: 'w_gte_h', width: '$imgwidth - $border * 2', crop: 'scale' },
      // { if: 'else', height: '$imgheight - $border * 2', crop: 'scale' },
      // { border: '10px_solid_black' },
      // {
      //   width: '$imgwidth',
      //   height: '$imgheight',
      //   background: '#f0ead6',
      //   crop: 'pad',
      // },
      // { quality: 'auto', fetch_format: 'auto' },
    ],
  },
});
const parser = multer({ storage });

app.get('/', async (req, res) => {
  try {
    res.json(listEndpoints(app));
  } catch (err) {
    res.status(404).send({ success: false, error: 'Not found' });
  }
});

// endpoints
app.get('/account', authenticateUser);
app.get('/account', async (req, res) => {
  try {
    const user = await User.findById(req.user._id);
    await user.populate('personal.ownedProducts');
    await user.populate('personal.ownedProducts.image');
    await user.populate('business.myOrders');
    await user.populate('business.myOrders.products');

    res.status(201).json({ response: user, success: true });
  } catch (error) {
    console.error(error);
    res.status(404).json({ response: error, success: false });
  }
});

app.get('/products', getProducts);
app.get('/products/:id', getProductById);
app.post('/register', registerUser);
app.post('/log-in', loginUser);

app.post('/product-upload', authenticateUser);
app.post('/product-upload', productUpload);

app.post('/create-order', authenticateUser);
app.post('/create-order', createOrder);

// image endpoint currently in server.js, try to take out if poss
app.post('/image-upload', parser.single('image'), async (req, res) => {
  try {
    const image = await new Image({
      imageUrl: req.file.path,
      imageId: req.file.filename,
    }).save();

    res.json({ response: image, success: true });
  } catch (error) {
    console.error(error);
    res.status(400).json({ response: error, success: false });
  }
});

// Start the server
app.listen(port, () => {
  // eslint-disable-next-line
  console.log(`Server running on http://localhost:${port}`);
});
