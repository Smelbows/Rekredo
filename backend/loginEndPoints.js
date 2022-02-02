import bcrypt from 'bcrypt';

const { User, Product, Image } = require('./models/models.js');

// const findUser = async (username) => {
//   const user = await PersonalUser.findOne({ username });
//   if (user) {
//     return user;
//   } else {
//     const user = await BusinessUser.findOne({ businessName: username });
//     return user;
//   }
// };

export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (user && bcrypt.compareSync(password, user.password)) {
      res.status(200).json({
        response: {
          userId: user._id,
          username: user.username,
          accessToken: user.accessToken,
          email,
          accountType,
          business,
          personal
        },
        success: true
      });
    } else {
      res.status(404).json({
        response: 'Username or password does not match',
        success: false
      });
    }
  } catch (error) {
    res.status(404).json({ response: error, success: false });
  }
};
