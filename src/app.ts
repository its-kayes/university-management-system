import express, { Application, Request, Response } from 'express'
import logger from 'morgan'
import cors from 'cors'
import helmet from 'helmet'
import { v1 } from './apis/v1'

const app: Application = express()

const options: express.RequestHandler[] = [
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  }),
  helmet(),
  logger('combined'),
  express.json({ limit: '50mb' }),
  express.urlencoded({ extended: true }),
]

app.use(options)

// v1 APIs route
app.use('/api/v1', v1)

app.all('*', (req: Request, res: Response) => {
  res.status(404).json({
    message: `Can't find ${req.originalUrl} on this server!`,
  })
})

export default app
