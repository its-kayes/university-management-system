import { NextFunction, Request, Response } from 'express'
import { saveUsersToDb } from './users.services'

export const saveUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = req.body
    if (!users) {
      res.status(400).json({
        success: false,
        message: 'No users found',
      })
    }

    const result = await saveUsersToDb(users)

    res.json({
      success: true,
      message: 'Users saved successfully',
      result,
    })
  } catch (error) {
    next(error)
  }
}
