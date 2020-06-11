const User = require('../model/userModel');
const dotenv = require('dotenv');
dotenv.config();
const jwt = require('jsonwebtoken');

exports.register = async (req, res, next) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword
    });

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN
    });

    res.status(201).json({
      status: "success",
      token,
      data: {
        user: newUser
      }
    });

  } catch (err) {
    console.error(err.message);
    res.status(400).json({
      status: "fail",
      msg: err.message
    });
  }
  next();
}