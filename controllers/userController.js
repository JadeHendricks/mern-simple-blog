const User = require('../model/userModel');

exports.getMe = async (req, res) => {
  try {
    const user = await User.find(req.user._id);

    res.status(200).json({
      status: 'success',
      user
    });
  } catch (err) {
    res.status(401).json({
      status: 'fail',
      msg: err.message
    });
  }
}

exports.updateMe = async (req, res) => {

  const { email, password } = req.body;

  if (email || password) {
    return res.status(401).json({
      status: 'fail',
      msg: 'Email and Password cannot be changed on this route!'
    });
  }

  try {
    const user = await User.findByIdAndUpdate(req.user._id, req.body, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      status: 'success',
      user
    });
  } catch (err) {
    res.status(401).json({
      status: 'fail',
      msg: err.message
    });
  }
}