const { Product, Order, User } = require('./models/models.js');

export const createOrder = async (req, res) => {
  const { cart } = req.body;
  try {
    if (cart && Array.isArray(cart) === false) {
      throw 'Cart must be an array of products';
    }
    if (!cart) {
      throw 'Your cart is empty';
    }

    const propIds = cart.map((prop) => {
      return prop._id;
    });
    console.log(propIds);

    const newOrder = await new Order({
      products: propIds,
    }).save();

    await User.findByIdAndUpdate(req.user._id, {
      $push: {
        'business.myOrders': newOrder._id,
      },
    });

    await newOrder.populate('products')

    res.status(201).json({
      response: {
        newOrder,
      },
      success: true,
    });
  } catch (error) {
    console.log(error, 'cart error');
    if (error.code === 11000) {
      res.status(401).json({ success: false, response: 'cart is empty' });
    } else {
      res.status(400).json({ response: error, success: false });
    }
  }
};
