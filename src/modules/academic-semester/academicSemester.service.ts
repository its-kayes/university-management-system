import { IAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';

const createSemester = async (payload: IAcademicSemester) => {
  const save = await AcademicSemester.create(payload);
  return save;
};

export const AcademicSemesterService = {
  createSemester,
};
