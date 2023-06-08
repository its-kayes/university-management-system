import { RequestHandler } from 'express'
import { UsersService } from './users.services'

const saveUsers: RequestHandler = async (req, res, next) => {
  try {
    const users = req.body
    if (!users) {
      res.status(400).json({
        success: false,
        message: 'No users found',
      })
    }

    const result = await UsersService.saveUsersToDb(users)

    res.json({
      success: true,
      message: 'Users saved successfully',
      result,
    })
  } catch (error) {
    next(error)
  }
}

export const UsersController = {
  saveUsers,
}
