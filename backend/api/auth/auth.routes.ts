import express from 'express'
import { login, signup } from './auth.controller.ts'

const router = express.Router()

router.post('/login', login)
router.post('/signup', signup)
// router.post('/logout', logout)

export const authRoutes = router