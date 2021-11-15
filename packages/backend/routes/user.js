const pick = require('lodash/pick');
const clone = require('lodash/clone');
const bcrypt = require('bcryptjs');
const User = require('../db/mongoose/models/User')

const bcryptSalt = bcrypt.genSaltSync();

async function createUser(request) {
  const dataToSave = clone(request.body);

  dataToSave.password = bcrypt.hashSync(dataToSave.password, bcryptSalt);

  const savedUser = await new User(dataToSave).save();
  const sanitizedUser = pick(savedUser._doc, ['login']);

  return sanitizedUser;
}

module.exports = {
  post: createUser
};
