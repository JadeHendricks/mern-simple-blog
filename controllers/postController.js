const Post = require('../model/postModel');

exports.getAllPosts = async (req, res) => {
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
}

exports.createPost = async (req, res) => {
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
}

exports.getPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    if (!post) {
      return res.status(404).json({
        status: 'fail',
        msg: 'No document found with that ID'
      });
    } 

    res.status(200).json({
      status: 'success',
      data: {
        post: post
      }
    });  

  } catch (err) {
    res.status(404).json({
      status: 'fail',
      msg: err.message
    });
  }
}

exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    res.status(200).json({
      status: 'success',
      post
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      msg: err.message
    });
  }
}

exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);

    if (!post) {
      return res.status(404).json({
        status: 'fail',
        msg: 'No document found with that ID'
      });
    } 

    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      msg: err.message
    });
  }
}
