import expressApp from '#Config/express.js'
import request from 'supertest'
import { API_USERS } from '#Config/constants.js'

const userCorrect = {
  email: '10-jest@test.com',
  password: 'TestJest123',
}

const incompleteFields = [
  {},
  { password: '123' },
  { password: 'TestJest' },
  { password: 'TestJest8' },
  { email: '123' },
  { email: 'test@test' },
  { email: 'test@test.com' },
]

describe(`POST ${API_USERS}`, () => {
  describe('given a correct information', () => {
    test('should respond with a user id', async () => {
      const response = await request(expressApp)
        .post(API_USERS)
        .send(userCorrect)
      expect(response.body.id).toBeDefined()
    })
    //  should respond with a json object containing the new user with a email
  })

  describe('given incorrect information', () => {
    test('should respond with a 401 status code if send empty body', async () => {
      const response = await request(expressApp).post(API_USERS).send()
      expect(response.statusCode).toBe(401)
    })

    test('should have a content-type of application/json with error message', async () => {
      const response = await request(expressApp).post(API_USERS).send()
      expect(response.header['content-type']).toEqual(
        expect.stringContaining('application/json')
      )
      expect(response.body.message).toBeDefined()
    })
  })

  describe('given incomplete information', () => {
    test('should respond with a 401 status code', async () => {
      for (const information of incompleteFields) {
        const response = await request(expressApp)
          .post(API_USERS)
          .send(information)
        expect(response.statusCode).toBe(401)
      }
    })
  })
})
