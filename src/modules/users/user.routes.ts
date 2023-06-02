import { Router } from 'express'
import { saveUsers } from './users.controller'

const router: Router = Router()

router.post('/create-user', saveUsers)

export { router as userRoutes }
