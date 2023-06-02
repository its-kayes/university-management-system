import { Router } from 'express'
import { userRoutes } from '../modules/users/user.routes'
import { getUserId } from '../modules/users/users.utility'

const router: Router = Router()

router.get('/', async (req, res) => {
  res.json({
    message: 'Hello World!',
    data: await getUserId(),
  })
})

router.use('/users', userRoutes)

export { router as v1 }
