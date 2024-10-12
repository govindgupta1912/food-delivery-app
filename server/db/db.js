// Accessing MongoDB Packages
const mongoose = require('mongoose')

// Importing env file
require("dotenv").config();
const mongoURI = process.env.MONGODB_URI

// Connecting MongoDB DataBase
const mongoDB = async () => {
  try {
    await mongoose.connect(`${mongoURI}/foodorder`);
    console.log("MongoDB Connected.");
    
  } catch (error) {
    console.error("err while connecting database:", error.message);
  }
}

module.exports = mongoDB;