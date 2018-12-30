const AWS = require("aws-sdk");
const uuid = require("uuid");
const dynamoDb = new AWS.DynamoDB.DocumentClient();

class carService {
    add(newCar) {

        const date = JSON.stringify(new Date());
            const params = {
            TableName: "cars_table",
            Item: {
                id: uuid.v1(),
                brand: newCar.brand,
                color: newCar.color,
                year: newCar.year,
                createdAt: date
            }
         };

        dynamoDb.put(params, error => {
            if (error) {
            console.error(`Error saving data to DynamoDB: ${JSON.stringify(error)}`);
            return Promise.reject(
                `Error saving data to DynamoDB: ${JSON.stringify(error)}`
            );

            } else {
                return Promise.resolve(params.Item);
            }
        });
      
        return newCar.brand;
    }
}

module.exports = carService;