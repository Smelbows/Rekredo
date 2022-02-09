const { Product } = require('../models/models.js');

export const getProducts = async (req, res) => {
  const { description, category } = req.query;

  try {
    const allProducts = await Product.find({
      category: new RegExp(category, 'i'),
      description: new RegExp(description, 'i'),
    })
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

export const deleteProduct = async (req, res) => {
  console.log(req.body, 'body in backend');
  const { _id } = req.body;

  // console.log(_id, "deleteProduct endpoint")
  try {
    if (!_id) {
      throw 'Product id needed to delete';
    }
    await Product.findByIdAndDelete(_id);
    res.status(201).json({
      response: { message: 'Product deleted', productId: _id },
      success: true,
    });
  } catch (error) {
    console.log(error, 'delete error');
    res.status(400).json({ response: 'Prouct id not found', success: false });
  }
};
