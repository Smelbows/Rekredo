import mongoose from 'mongoose';
import crypto from 'crypto';
import { type } from 'os';

const PersonalSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString('hex'),
  },
  ownedProducts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
});

const BusinessSchema = new mongoose.Schema({
  businessName: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  businessEmail: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  vatNumber: {
    type: Number,
  },
  accessToken: {
    type: String,
    default: () => crypto.randomBytes(128).toString('hex'),
  },
  myOrders: [{type: mongoose.Schema.Types.ObjectId, ref: 'Order'}]
});

const ImageSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  imageId: {
    type: String,
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
    enum: [
      'Instrument',
      'Vehicle',
      'Clothing',
      'Electronics',
      'Art',
      'Toys',
      'Environment',
    ],
  },
  tags: {
    type: Array,
  },
  owner: {
    type: String,
  },
  image: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Image',
  },
  availability: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Number,
    default: () => Date.now(),
  },
});

const OrderSchema = new mongoose.Schema({
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
  createdAt: { type: Number, default: () => Date.now() },
  completed: {type: Boolean, default: false}
});


const PersonalUser = mongoose.model('PersonalUser', PersonalSchema);
const BusinessUser = mongoose.model('BusinessUser', BusinessSchema);
const Product = mongoose.model('Product', ProductSchema);
const Image = mongoose.model('Image', ImageSchema);
const Order = mongoose.model('Order', OrderSchema)

module.exports = { PersonalUser, BusinessUser, Product, Image, Order };
