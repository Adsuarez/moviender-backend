import { Router } from 'express'
import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from '#Controllers/users.controllers.js'
import { userAuthDTO } from '#Dto/user-auth.dto.js'

const router = Router()

router.get('/users', getUsers)

router.get('/users/:id', getUser) // :id is the dinamic param for Express

router.post('/users', userAuthDTO, createUser)

router.patch('/users/:id', updateUser) // patch is a sintactic way for a REST to refer about a partial put

router.delete('/users/:id', deleteUser)

export default router
