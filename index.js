const express = require('express');
const app = express();

const RateLimit = require('./src/RateLimit');

const limiter = new RateLimit({})

console.log(limiter)

// console.log(limiter.ratelimit());

// app.use(limiter);

app.get('/', (req, res) => {
  return res.json({ message: 'hello world' });
});

app.listen(3000, () => {
  console.log('Listening port 3000');
});