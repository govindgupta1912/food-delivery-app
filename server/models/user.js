// const mongoose = require('mongoose')

// const { Schema } = mongoose;

// const UserSchema = new Schema({
//   name:{
//     type: String,
//   },
//     email:{
//     type: String,
//     unique: true,
//     required: true,
//   },
//   password:{
//     type: String,
//     required: true
//   },
//   address:{
//     type: String
//   },
//   date:{
//     type: Date,
//     default: Date.now()
//   }
// })

// module.exports = mongoose.model('users', UserSchema)

// models/user.js

const mongoose = require('mongoose');

const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  address: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('users', UserSchema);
