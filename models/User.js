const mongoose = require('mongoose');

const Usere = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: Number,
  firstName: String,
  lastName: String,
});


const User = mongoose.model('User', Usere);

module.exports = User;
