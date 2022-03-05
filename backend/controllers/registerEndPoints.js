import bcrypt from 'bcrypt';

const { User } = require('../models/models.js');

export const registerUser = async (req, res) => {
  const { username, password, email, accountType } = req.body;

  try {
    const salt = bcrypt.genSaltSync();

    if (password.length < 5) {
      throw 'Password must be at least 5 characters long';
    }

    if (!email) {
      throw 'Please enter an email';
    }

    if (!username) {
      throw 'Please enter a username';
    }

    if (accountType === 'Business') {
      const newUser = await new User({
        username,
        password: bcrypt.hashSync(password, salt),
        email,
        accountType,
      }).save();

      res.status(201).json({
        response: {
          userId: newUser._id,
          username: newUser.username,
          email: newUser.email,
          accountType: newUser.accountType,
          accessToken: newUser.accessToken,
          business: newUser.business,
        },
        success: true,
      });
    } else if (accountType === 'Personal') {
      const newUser = await new User({
        username,
        password: bcrypt.hashSync(password, salt),
        email,
        accountType,
      }).save();

      res.status(201).json({
        response: {
          userId: newUser._id,
          username: newUser.username,
          email: newUser.email,
          accountType: newUser.accountType,
          accessToken: newUser.accessToken,
          personal: newUser.personal,
        },
        success: true,
      });
    } else {
      throw 'accountType is not recognized';
    }
  } catch (error) {
    if (error.code === 11000) {
      res
        .status(401)
        .json({ success: false, response: 'username already exists' });
    } else {
      res.status(400).json({ response: error, success: false });
    }
  }
};
