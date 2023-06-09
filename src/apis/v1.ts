import { Router } from 'express';
import { AcademicSemesterRoutes } from '../modules/academic-semester/academicSemester.routes';
import { userRoutes } from '../modules/users/user.routes';
import { getUserId } from '../modules/users/users.utility';

const router: Router = Router();

// =============== Health Check API ===============
router.get('/', async (req, res) => {
  res.json({
    message: 'Hello World!',
    data: await getUserId(),
  });
});

type IRoutes = {
  path: string;
  route: Router;
};

const moduleRoutes: IRoutes[] = [
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/academic-semester',
    route: AcademicSemesterRoutes,
  },
];

moduleRoutes.forEach(item => router.use(item.path, item.route));

// router.use('/users', userRoutes);
// router.use('/academic-semester', AcademicSemesterRoutes);

export { router as v1 };
