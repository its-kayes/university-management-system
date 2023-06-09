import { RequestHandler } from 'express';
import AppError from '../../errors/AppError';
import { AcademicSemesterService } from './academicSemester.service';

const createSemester: RequestHandler = async (req, res, next) => {
  try {
    const { ...values } = req.body;
    const result = await AcademicSemesterService.createSemester(values);

    if (!result) return next(new AppError('Error creating semester', 500));

    res.status(201).json({
      success: true,
      message: 'Semester created successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const AcademicSemesterController = {
  createSemester,
};
