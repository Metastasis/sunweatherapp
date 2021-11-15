async function pingServer() {
  return 'Hello World111!'
}

module.exports = {
  get: pingServer,
}
