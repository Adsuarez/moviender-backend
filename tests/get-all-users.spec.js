import expressApp from '#Config/express.js'
import request from 'supertest'
import { API_USERS } from '#Config/constants.js'

describe(`GET ${API_USERS}`, () => {
  test('should respond with a 200 status code', async () => {
    const response = await request(expressApp).get(API_USERS).send()
    expect(response.statusCode).toBe(200)
  })

  test('should respond with an array', async () => {
    const response = await request(expressApp).get(API_USERS).send()
    expect(response.body).toBeInstanceOf(Array)
  })
})
