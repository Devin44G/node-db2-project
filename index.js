const express = require('express');
const helmet = require('helmet');
const carsRouter = require('./cars/cars-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use('/api/cars', carsRouter);

server.get('/', (req, res) => {
  res.send(`<h2>Welcome to the server!</h2>`);
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`\n** Running on port ${PORT} **\n`);
});
