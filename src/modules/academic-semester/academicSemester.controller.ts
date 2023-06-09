import { RequestHandler } from 'express';
import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import sendResponse from '../../shared/sendResponse';
import catchAsync from '../../util/catchAsync';
import { IAcademicSemester } from './academicSemester.interface';
import { AcademicSemesterService } from './academicSemester.service';

const createSemester: RequestHandler = catchAsync(async (req, res, next) => {
  const { ...values } = req.body;
  const result = await AcademicSemesterService.createSemester(values);

  if (!result) return next(new AppError('Error creating semester', 500));

  sendResponse<IAcademicSemester>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semester created successfully!',
    data: result,
  });
});

export const AcademicSemesterController = {
  createSemester,
};
