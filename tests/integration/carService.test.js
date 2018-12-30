const url = 'http://localhost:3000';
const request = require('supertest')(url);

describe('/carService routes', () => { 
    it('GET /cars', () => {
      request
      .get('/cars/liron')
      .expect(200);
    });
  });