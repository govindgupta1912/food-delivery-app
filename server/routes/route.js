// Accessing Express Packages
const express = require('express')
const router = express.Router();

// Importing Controllers
const { login, signup } = require('../controllers/controller')

// Reading User
router.route('/api/signup').post(signup)
router.route('/api/login').post(login)

// Exporting router
module.exports = router;