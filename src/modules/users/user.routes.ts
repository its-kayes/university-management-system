import { Router } from 'express'
import { UsersController } from './users.controller'

const router: Router = Router()

router.post('/create-user', UsersController.saveUsers)

export { router as userRoutes }
