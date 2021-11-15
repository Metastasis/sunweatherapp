const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  login: 'String',
  password: 'String'
});

module.exports = mongoose.model('User', schema);
