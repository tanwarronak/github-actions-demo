// tests/server.test.js
import request from 'supertest';
import  app from './src/app.js';
describe('Server Endpoints', () => {
  // Test GET /
  describe('GET /', () => {
    it('should return "Hello, World!"', async () => {
      const res = await request(app).get('/');
      expect(res.statusCode).toBe(200);
      expect(res.body).toHaveProperty('message', 'Hello, World!');
    });
  });

  // Test GET /api/users
  describe('GET /api/users', () => {
    it('should return a list of users', async () => {
      const res = await request(app).get('/api/users');
      expect(res.statusCode).toBe(200);
      expect(Array.isArray(res.body)).toBeTruthy();
      expect(res.body[0]).toHaveProperty('name', 'Alice');
    });
  });

  // Test POST /api/users
  describe('POST /api/users', () => {
    it('should create a new user', async () => {
      const res = await request(app)
        .post('/api/users')
        .send({ name: 'Charlie' });
      expect(res.statusCode).toBe(201);
      expect(res.body).toHaveProperty('message', 'User created');
    });

    it('should return 400 if name is missing', async () => {
      const res = await request(app)
        .post('/api/users')
        .send({});
      expect(res.statusCode).toBe(400);
      expect(res.body).toHaveProperty('error', 'Name is required');
    });
  });
});