const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My API Lesson 1-4',
    description: 'this API show the very basics of how to get, put, post and delete things from your database.'
  },
  host: 'localhost:3000'
};

const outputFile = './swagger-output.json';
const routes = ['./routes/index.js'];

swaggerAutogen(outputFile, routes, doc);