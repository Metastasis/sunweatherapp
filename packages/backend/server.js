const fastify = require('fastify');
const server = fastify({ logger: true });
const fastifyJWT = require('fastify-jwt');

server.register(fastifyJWT, {
  secret: 'superPasswordForArsb29'
})

server
  .listen(3001)
  .catch(console.error)

module.exports = { server };
