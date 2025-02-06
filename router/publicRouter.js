const express = require('express')
const publicRouter = express.Router()
const userController = require('../controller/userController')
const authController = require('../controller/authContoller')

publicRouter.post('/api/user', userController.create)

publicRouter.post('/api/login', authController.login)

module.exports = publicRouter

