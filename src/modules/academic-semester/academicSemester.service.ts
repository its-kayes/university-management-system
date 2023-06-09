import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { academicSemesterTitleCodeMapper } from './academicSemester.constant';
import { IAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';

const createSemester = async (payload: IAcademicSemester) => {
  if (academicSemesterTitleCodeMapper[payload.title] !== payload.code) {
    throw new AppError('Invalid Semester Code ', httpStatus.BAD_REQUEST);
  }

  const save = await AcademicSemester.create(payload);
  return save;
};

export const AcademicSemesterService = {
  createSemester,
};
