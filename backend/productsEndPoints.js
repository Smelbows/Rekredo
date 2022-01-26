const {
    PersonalUser,
    BusinessUser,
    Product,
    Image,
  } = require('./models/models.js');

export const getProducts = async (req, res) => {
  try {
    const allProducts = await Product.find({}).populate('image');

    if (!allProducts) {
      throw 'product library empty are not available';
    }

    res.status(200).json({ response: allProducts, success: true });
  } catch (error) {
    res.status(400).json({ response: error, success: false });
  }
};
