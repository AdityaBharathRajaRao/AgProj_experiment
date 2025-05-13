// auth.test.js
const request = require('supertest');
const app = require('../app');
const User = require('../models/User');

beforeEach(async () => {
  await User.deleteMany({});
});

test('should signup a new user', async () => {
  const response = await request(app)
    .post('/api/auth/signup')
    .send({
      name: 'Test User',
      email: 'test@example.com',
      password: 'password123'
    })
    .expect(201);

  // Assert that the database was changed correctly
  const user = await User.findById(response.body.user._id);
  expect(user).not.toBeNull();

  // Assertions about the response
  expect(response.body).toMatchObject({
    user: {
      name: 'Test User',
      email: 'test@example.com'
    },
    token: expect.any(String)
  });
});
