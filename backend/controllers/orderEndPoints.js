const { Product, Order, User } = require('../models/models.js');

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

    await newOrder.populate('products');

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

export const deleteOrder = async (req, res) => {
  console.log(req.body, "body in backend")
  const { _id } = req.body;

  console.log(_id, "deleteOrder endpoint")
  try {
    if (!_id) {
      throw 'Order id needed to delete order';
    }
    await Order.findByIdAndDelete(_id);
    res.status(201).json({
      response: { message: 'Order deleted', orderId: _id },
      success: true,
    });
  } catch (error) {
    console.log(error, 'delete error');
    res.status(400).json({ response: 'Order id not found', success: false });
  }
};