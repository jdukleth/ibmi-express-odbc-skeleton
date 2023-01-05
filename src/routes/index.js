import express from 'express'
import { initializeRoutes } from '../utils/router.js'

const app = express()
const router = express.Router()

initializeRoutes(router)

app.use('/', router)

export default app
