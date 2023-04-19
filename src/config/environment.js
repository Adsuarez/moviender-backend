import { config } from 'dotenv'

config()

export const PORT = process.env.PORT || 3001 // Server Port
export const HOST = process.env.DB_HOST || 'localhost'
export const USER = process.env.DB_USER || 'root'
export const PASSWORD = process.env.DB_PASSWORD || 'admintest'
export const DATABASE = process.env.DB_DATABASE || 'moviender_db'
export const DB_PORT = process.env.DB_PORT || 3306
