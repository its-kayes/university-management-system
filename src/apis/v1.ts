import { Router } from 'express';
import { AcademicSemesterRoutes } from '../modules/academic-semester/academicSemester.routes';
import { userRoutes } from '../modules/users/user.routes';
import { getUserId } from '../modules/users/users.utility';

const router: Router = Router();

router.get('/', async (req, res) => {
  res.json({
    message: 'Hello World!',
    data: await getUserId(),
  });
});

router.use('/users', userRoutes);
router.use('/academic-semester', AcademicSemesterRoutes);

export { router as v1 };
