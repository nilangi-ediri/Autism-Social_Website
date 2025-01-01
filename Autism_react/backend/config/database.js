const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/autism_db');

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
})

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
