import expressApp from '#Config/express.js'
import request from 'supertest'

describe('POST /api/users/', () => {
  test('should respond with a 401 status code if send empty body', async () => {
    const response = await request(expressApp).post('/api/users/').send()
    expect(response.statusCode).toBe(401)
  })

  test('should have a content-type of application/json', async () => {
    const response = await request(expressApp).post('/api/users/').send()
    expect(response.header['content-type']).toEqual(
      expect.stringContaining('application/json')
    )
  })
  //  should respond with a json object containing the new user with an id
  //  should respond with a json object containing the new user with a email
})
