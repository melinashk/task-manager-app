const { spawn } = require('child_process')
const request = require('supertest')
const app = require('../src/app')

test ('Should signup a new user', async() => {
  await request(app).post('/users').send({
    name: 'Melina',
    email: 'melina@example.com',
    password: 'Melina123!'
  }).expect(201)
})