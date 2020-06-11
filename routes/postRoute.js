const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const authController = require('../controllers/authController');

router
  .route('/')
  .get(postController.getAllPosts)
  .post(authController.protect, postController.createPost);

module.exports = router;