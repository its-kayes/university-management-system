import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import sendResponse from '../../shared/sendResponse';
import catchAsync from '../../util/catchAsync';
import { IUser } from './users.interface';
import { UsersService } from './users.services';

const saveUsers: RequestHandler = catchAsync(async (req, res) => {
  // ============= ZOD Validate ============

  const users = req.body;
  if (!users) {
    res.status(400).json({
      success: false,
      message: 'No users found',
    });
  }

  const result = await UsersService.saveUsersToDb(users);

  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user created successfully!',
    data: result,
  });

  res.json({
    success: true,
    message: 'Users saved successfully',
    result,
  });
});

export const UsersController = {
  saveUsers,
};
