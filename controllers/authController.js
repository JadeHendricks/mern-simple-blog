const User = require('../model/userModel');
const dotenv = require('dotenv');
dotenv.config();
const jwt = require('jsonwebtoken');

const signToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
}

exports.register = async (req, res, next) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword
    });

    const token = signToken(newUser._id);

    res.status(201).json({
      status: "success",
      token,
      data: {
        user: newUser
      }
    });

  } catch (err) {
    res.status(400).json({
      status: "fail",
      err
    });
  }
  next();
}

exports.login = async (req, res, next) => {

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      status: "fail",
      msg: 'Please provide an email and password!'
    });
  }

  try {
    const user = await User.findOne({ email }).select('+password');

    if (!user || !user.correctPassword(password, user.password)) {
      return res.status(401).json({ status: "fail", msg: 'Incorrect email or password!'});
    }
    
    const token = signToken(user._id);

    res.status(200).json({
      status: "success",
      token
    });

  } catch (err) {
    res.status(400).json({
      status: "fail",
      err
    });
  }
  next();
}