const { Product } = require('../models/models.js');

export const getProducts = async (req, res) => {
  try {
    const allProducts = await Product.find({})
      .populate('image')
      .sort({ createdAt: 'desc' });

    if (!allProducts) {
      throw 'product library empty are not available';
    }

    res.status(200).json({ response: allProducts, success: true });
  } catch (error) {
    res.status(400).json({ response: error, success: false });
  }
};

export const getProductById = async (req, res) => {
  try {
    const oneProduct = await Product.findById(req.params.id);
    if (!oneProduct) {
      throw 'product library empty are not available';
    }
    res.status(200).json({ response: oneProduct, success: true });
  } catch (error) {
    res.status(400).json({ response: error, success: false });
  }
};
