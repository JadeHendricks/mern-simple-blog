const Post = require('../model/postModel');

exports.getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find();
    res.status(200).json({
      status: 'success',
      results: posts.length,
      posts
    });
  } catch (err) {
    res.status(401).json({
      status: 'fail',
      msg: err.message
    });
  }

  next();
}

exports.createPost = async (req, res, next) => {

  const { title, description } = req.body;

  try {
    const newPost = await Post.create({
      title,
      description
    });

    res.status(200).json({
      status: 'success',
      data: {
        post: newPost
      }
    });
  } catch (err) {
    res.status(401).json({
      status: 'fail',
      msg: err.message
    });
  }

  next();
}