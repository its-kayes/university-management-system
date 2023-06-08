import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import helmet from 'helmet'
import logger from 'morgan'
import { v1 } from './apis/v1'
import globalErrorHandler from './middlewares/globalErrorHandler'

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

// Global Error Handler
app.use(globalErrorHandler)

// 404 handler
app.all('*', (req: Request, res: Response) => {
  res.status(404).json({
    message: `Can't find ${req.originalUrl} on this server!`,
  })
})

export default app
