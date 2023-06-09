import { Router } from 'express';
import { AcademicSemesterController } from './academicSemester.controller';

const router: Router = Router();

router.post('/create-semester', AcademicSemesterController.createSemester);

export { router as AcademicSemesterRoutes };
