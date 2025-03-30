


// Importing Models
const UserModel = require('../models/user');

// Importing env file
require("dotenv").config();
const jwtSecret = process.env.JWT_TOKEN;

// Json Web Token
const jwt = require("jsonwebtoken");

// Bcrypt for password hashing
const bcrypt = require('bcrypt');
const saltRounds = 10;


const signup = async (req, res) => {
  try {
    const { email, password, address, name } = req.body;

    // Log data for debugging
    console.log("Signup Data:", { email, name, address });

    if (await UserModel.findOne({ email })) {
      throw new Error("User Already Exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await UserModel.create({
      name: name,
      email: email,
      password: hashedPassword,
      address: address
    });

    const createdUser = await UserModel.findById(user._id)

  if (!createdUser) {
      console.log("something went wrong while regestring thr user");
      
  }

    console.log("User created:", user); // Log the created user

    const authToken = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: '1h' });

    res.status(200).json({ success: true, data: user, authToken: authToken });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ success: false, message: error.message });
  }
};

// Login Controller
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validating if user exists
    const user = await UserModel.findOne({ email });
    if (!user) {
      throw new Error("User does not exist");
    }
   console.log("userData",user);
   
    // Validate password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error("Password is incorrect");
    }

    // Create JWT token
    const authToken = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: '1h' });

    res.status(200).json({ success: true, data: user, authToken: authToken });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

module.exports = { signup, login };
