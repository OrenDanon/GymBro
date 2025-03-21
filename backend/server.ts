import http from 'http'
import path from 'path'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import cookieParser from 'cookie-parser'
import { authRoutes } from './api/auth/auth.routes.ts'

const app = express()
const server = http.createServer(app)
dotenv.config()

require('dotenv').config();
const YT_KEY = process.env.YT_KEY;

// Express App Config
app.use(cookieParser())
app.use(express.json())


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve('public')))
} else {
    const corsOptions = {
        origin: ['http://127.0.0.1:3000',
            'http://localhost:3000'
        ],
        credentials: true
    }
    app.use(cors(corsOptions))
}

import { userRoutes } from './api/user/user.routes.mjs'
import { setupSocketAPI } from './services/socket.service.mjs'

// routes
import { setupAsyncLocalStorage } from './middlewares/setupAls.middleware.mjs'
app.all('*', setupAsyncLocalStorage)

app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)
setupSocketAPI(server)

// Make every server-side-route to match the index.html
// so when requesting http://localhost:3030/index.html/car/123 it will still respond with
// our SPA (single page app) (the index.html file) and allow vue/react-router to take it from there
app.get('/**', (req, res) => {
    res.sendFile(path.resolve('public/index.html'))
})


import { logger } from './services/logger.service.mjs'
const port = process.env.PORT || 3030
server.listen(port, () => {
    logger.info('Server is running on port:', port)
})