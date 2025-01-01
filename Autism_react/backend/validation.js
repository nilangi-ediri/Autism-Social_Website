// validation.js
const UserModel = require('./config/database');

const checkName = async (name) => {
  return UserModel.findOne({ name }).exec();
};

const checkEmail = async (email) => {
  return UserModel.findOne({ email }).exec();
};

module.exports = { checkName, checkEmail };