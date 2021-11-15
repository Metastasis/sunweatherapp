const mongoose = require('mongoose');
const config = require('./config.json')

const {url, options} = config;

mongoose
  .connect(url, options)
  .then((result) => console.info(`Mongoose connected to database ${result.connections[0].name}`))
