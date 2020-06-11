const User = require('../model/userModel');

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json({
      status: 'success',
      results: users.length,
      users
    });
  } catch (err) {
    res.status(401).json({
      status: 'fail',
      msg: err.message
    });
  }

  next();
}