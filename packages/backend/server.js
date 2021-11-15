const server = require('fastify')({ logger: true })

server
  .listen(3001)
  .catch(console.error)

module.exports = { server };
