const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

router.get('/me', authController.protect, userController.getMe);
router.post('/updateMe', authController.protect, userController.updateMe);


module.exports = router;