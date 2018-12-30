const carService = require('../../services/carService');

describe('add new car', () => {
    // mock the db
    const dbMock = {};
    dbMock.scan = jest
      .fn((params, callback) => {
        callback(null, { Items: [] });
      })
      .mockName('db.scan');
  
    const cars = new carService(dbMock, 'Cars-fakeStage');  
    it('Receives a response with status 200', () => {
      cars.add((err, res) => {
        expect(res.statusCode).toBe(200);
      });
    });
  });