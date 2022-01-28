const {
  PersonalUser,
  BusinessUser,
  Product,
  Image,
} = require('./models/models.js');

export const productUpload = async (req, res) => {
  const { name, description, category, tags, image } = req.body;
  console.log(image, 'image recieved in backend in product upload');
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

    const newProduct = await new Product({
      name,
      description,
      category,
      tags,
      image: image._id,
    }).save();

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
};
