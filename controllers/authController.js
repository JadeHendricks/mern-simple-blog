const User = require('../model/userModel');
const { promisify } = require('util');
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
      confirmPassword: req.body.confirmPassword,
      passwordChangedAt: req.body.passwordChangedAt
    });

    const token = signToken(newUser._id);

    res.status(201).json({
      status: 'success',
      token,
      data: {
        user: newUser
      }
    });

  } catch (err) {
    res.status(400).json({
      status: 'fail',
      msg: err.message
    });
  }
  next();
}

exports.login = async (req, res, next) => {

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      status: 'fail',
      msg: 'Please provide an email and password!'
    });
  }

  try {
    const user = await User.findOne({ email }).select('+password');

    if (!user || !user.correctPassword(password, user.password)) {
      return res.status(401).json({ status: 'fail', msg: 'Incorrect email or password!'});
    }
    
    const token = signToken(user._id);

    res.status(200).json({
      status: 'success',
      token
    });

  } catch (err) {
    res.status(400).json({
      status: 'fail',
      msg: err.message
    });
  }
  next();
}

exports.protect = async (req, res, next) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({
      status: 'fail',
      msg: 'You are not logged in! Please log in to get access.'
    });
  }

  try {
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
      return res.status(401).json({
        status: 'fail',
        msg: 'The user belonging to the token, does no longer exists!'
      });
    }

    //if the password was chaged after the token was issued
    if (currentUser.passwordChangedAfter(decoded.iat)) {
      return res.status(401).json({
        status: 'fail',
        msg: 'User recently changed password! Please log in again.'
      });
    }

    //Grant access
    req.user = currentUser;
    next();

  } catch (err) {
      if (err.name === 'JsonWebTokenError') return res.status(401).json({ status: 'fail', msg: err.message });
      if (err.name === 'TokenExpiredError') return res.status(401).json({ status: 'fail', msg: err.message });
  }
}