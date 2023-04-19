import { nanoid } from 'nanoid/async'

export async function generateId() {
  return await nanoid()
}
