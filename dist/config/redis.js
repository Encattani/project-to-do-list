const redis = require('redis');
const redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT
});
redisClient.on('connect', () => console.log('Redis conectado!'));
redisClient.on('error', err => console.error('Erro Redis:', err));
module.exports = redisClient;