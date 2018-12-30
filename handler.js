'use strict';
const carService = require('./services/carService');
const dynamoDbClient = require('serverless-dynamodb-client');
const dynamoDb = dynamoDbClient.doc;
const cars = new carService(dynamoDb,'cars_table');

module.exports.addCar = async (event, context, callback) => {

const newCar = {
  brand: 'BMW',
  color: 'White',
  year: 2008
};

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello ${event.pathParameters.username}!! Your new car is: ${cars.add(newCar)}`,
    }),
  };
};
