const mongoose = require('mongoose');
const validator = require('validator');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    minlength: 10,
    required: [true, 'Please add a title!']
  },
  description: {
    type: String,
    minlength: 40,
    required: [true, 'Please add a description with 40 characters or more!']
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;