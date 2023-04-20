import expressApp from '#Config/express.js'
import request from 'supertest'

describe('GET /api/users', () => {
  test('should respond with a 200 status code', async () => {
    const response = await request(expressApp).get('/api/users').send()
    expect(response.statusCode).toBe(200)
  })

  test('should respond with an array', async () => {
    const response = await request(expressApp).get('/api/users').send()
    expect(response.body).toBeInstanceOf(Array)
  })
})
