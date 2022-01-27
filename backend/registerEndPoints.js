const {
  PersonalUser,
  BusinessUser,
  Product,
  Image,
} = require('./models/models.js');

export const registerPersonalUser = async (req, res) => {
  const { username, password, email } = req.body;

  try {
    const salt = bcrypt.genSaltSync();

    if (password.length < 5) {
      throw 'Password must be at least 5 characters long';
    }

    if (!email) {
      throw 'Please enter an email';
    }

    const newUser = await new PersonalUser({
      username,
      password: bcrypt.hashSync(password, salt),
      email,
    }).save();

    res.status(201).json({
      response: {
        userId: newUser._id,
        username: newUser.username,
        email: newUser.email,
        accessToken: newUser.accessToken,
      },
      success: true,
    });
  } catch (error) {
    if (error.code === 11000) {
      res.status(401).json({ success: false, response: error });
    } else {
      res.status(400).json({ response: error, success: false });
    }
  }
};

export const registerBusinessUser = async (req, res) => {
  const { username, password, email, location, vatNumber } = req.body;

  try {
    const salt = bcrypt.genSaltSync();

    if (password.length < 5) {
      throw 'Password must be at least 5 characters long';
    }

    const newUser = await new BusinessUser({
      businessName: username,
      password: bcrypt.hashSync(password, salt),
      businessEmail: email,
      location,
      vatNumber,
    }).save();

    res.status(201).json({
      response: {
        userId: newUser._id,
        username: newUser.businessName,
        email: newUser.businessEmail,
        location: newUser.location,
        vatNumber: newUser.vatNumber,
        accessToken: newUser.accessToken,
      },
      success: true,
    });
  } catch (error) {
    if (error.code === 11000) {
      res.status(401).json({ success: false, response: error });
    } else {
      res.status(400).json({ response: error, success: false });
    }
  }
};
