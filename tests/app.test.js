const request = require('supertest');
const app = require('../src/app');

describe('Web App Tests', () => {
  test('GET / should return 200', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });

  test('GET /api/health should return health status', async () => {
    const response = await request(app).get('/api/health');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('status', 'OK');
    expect(response.body).toHaveProperty('timestamp');
  });

  test('GET /api/hello should return hello message', async () => {
    const response = await request(app).get('/api/hello');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message', 'Hello, World!');
  });

  test('GET /api/hello/John should return personalized message', async () => {
    const response = await request(app).get('/api/hello/John');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message', 'Hello, John!');
  });
});