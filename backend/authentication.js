const {
    PersonalUser,
    BusinessUser,
    Product,
    Image,
  } = require('./models/models.js');

  const findUserByToken = async (accessToken) => {
    const user = await PersonalUser.findOne({ accessToken });
    if (user) {
      return user;
    } else {
      const user = await BusinessUser.findOne({ accessToken });
      return user;
    }
  };
  
  export const authenticateUser = async (req, res, next) => {
    const accessToken = req.header('Authorization');
    try {
      const user = await findUserByToken(accessToken);
      if (user) {
        req.user = user;
        next();
      } else {
        res.status(401).json({ response: 'Please log in', success: false });
      }
    } catch (error) {
      res.status(400).json({ response: error, success: false });
    }
  };