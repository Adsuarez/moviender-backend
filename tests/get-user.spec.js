import expressApp from '#Config/express.js'
import request from 'supertest'

describe('GET /api/users/:id', () => {
  test('should respond with a 404 status code if given an incorrect id', async () => {
    const response = await request(expressApp).get('/api/users/123').send()
    expect(response.statusCode).toBe(404)
  })

  test('should respond with a 200 status code if given a correct id', async () => {
    const response = await request(expressApp)
      .get('/api/users/1DMfKVrk3_i-eoAqi5lJY')
      .send()
    expect(response.statusCode).toBe(200)
  })

  test('should response with a JSON and a message if given an incorrect id', async () => {
    const response = await request(expressApp).get('/api/users/123').send()
    expect(response.body).toBeInstanceOf(Object)
    expect(response.body).toHaveProperty('message', 'user not found')
  })

  test('should response with a JSON and properties if given a correct id', async () => {
    const response = await request(expressApp)
      .get('/api/users/1DMfKVrk3_i-eoAqi5lJY')
      .send()
    expect(response.body).toBeInstanceOf(Object)
    expect(response.body).toHaveProperty('id', '1DMfKVrk3_i-eoAqi5lJY')
    expect(response.body).toHaveProperty('userName')
  })
})
