import mongoose from 'mongoose';
import crypto from 'crypto';

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  accountType: {
    type: String,
    enum: ['Business', 'Personal'],
    required: true
  },
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString('hex')
  }
});

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Instrument', 'Vehicle', 'Clothing', 'Electronics', 'Art', 'Toys']
  },
  tags: {
    type: Array
  },
  owner: {
    type: String
  },
  image: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Image'
  }
  // status: AvailabilitySchema,
});

const ImageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  imageId: {
    type: String
  }
});

// const AvailabilitySchema = new mongoose.Schema({
//   status: {
//     type: String,
//   },
//   availability: { type: Boolean },
// });

const User = mongoose.model('User', UserSchema);
const Product = mongoose.model('Product', ProductSchema);
const Image = mongoose.model('Image', ImageSchema);

module.exports = { User, Product, Image };
