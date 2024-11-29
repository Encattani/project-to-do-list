const redis = require('redis');

const redisClient = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
});

redisClient.on('connect', () => console.log('Redis connected!'));
redisClient.on('error', (err) => console.error('Redis error:', err));

module.exports = redisClient;
