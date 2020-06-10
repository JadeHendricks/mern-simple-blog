const User = require('../model/userModel');

exports.register = async (req, res, next) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword
    });

    res.status(201).json({
      status: "success",
      data: {
        user: newUser
      }
    });

  } catch (err) {
    res.status(400).json({
      status: "success",
      msg: err.message
    });
  }
  next();
}