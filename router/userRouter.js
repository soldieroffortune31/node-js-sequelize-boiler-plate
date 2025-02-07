const express = require('express')
const userRouter = express.Router()
const userController = require('../controller/userController')
const authMiddleware = require('../middleware/authMiddleware')


userRouter.use(authMiddleware)
userRouter.get('/api/user/current', userController.get)

module.exports = userRouter