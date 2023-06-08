/* eslint-disable prefer-const */
import { NextFunction, Request, Response } from 'express'
import config from '../config'

type IGenericErrorMessage = {
  path: string | number
  message: string
}

const globalErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let message: string = (err.message as string) || 'Internal Server Error'
  let errorMessage: IGenericErrorMessage[] = []

  res.status(500).json({
    success: false,
    message,
    errorMessage,
    stack: config.env === 'development' ? err?.stack : undefined,
  })

  next()
}

export default globalErrorHandler
