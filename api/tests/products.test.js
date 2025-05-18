const request = require('supertest');
const app = require('../src/app');

describe('GET /api/products', () => {
  it('should return all products', async () => {
    const res = await request(app).get('/api/products');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(expect.any(Array));
    expect(res.body.length).toBeGreaterThan(0);
  });
});
