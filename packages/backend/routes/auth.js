const bcrypt = require('bcryptjs');
const User = require('../db/mongoose/models/User');
const {server} = require('../server');

async function auth(request, response) {
  const user = await User.findOne({login: request.body.login});

  if (!user) return response.code(400).send('Incorrect login or password');

  const isCorrectPassword = bcrypt.compareSync(request.body.password, user.password);

  if (!isCorrectPassword) return response.code(400).send('Incorrect login or password');

  const accessToken = server.jwt.sign(user._doc, {expiresIn: 86400});

  return {accessToken}
}

module.exports = {
  post: auth
};
