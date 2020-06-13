const mongoose = require('mongoose');

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
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: [true, 'A post must belong to a user']
  }
},
{
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

postSchema.pre(/^find/, function(next) {
  this.populate({ path: 'user', select: 'name' });
  next();
});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;