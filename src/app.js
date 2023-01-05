import 'dotenv/config'
import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import routes from './routes/index.js'
import { db2Connect } from './utils/db2Database.js'
import { log } from './utils/log.js'

const app = express()
const port = process.env.PORT

app.use(helmet())           // headgear for protection against end users
app.use(cors({              // addresses allowed to access the API
  origin: [
    'http://localhost:3000',
  ]
}))
app.use(express.json({ limit: '20mb' }))     // parse request data & access it in req.body
app.use(express.urlencoded({ extended: true, limit: '20mb' }))
app.use('/', routes)        // initialize our API routes

app.listen(port, () => {
  log.connection('Express API is listening', `http://localhost:${port}`)
})

db2Connect()
