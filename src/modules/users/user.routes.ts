import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { UsersController } from './users.controller';
import { UsersValidation } from './users.validation';

const router: Router = Router();

router.post(
  '/create-user',
  validateRequest(UsersValidation.createUserZodSchema),
  UsersController.saveUsers
);

export { router as userRoutes };
