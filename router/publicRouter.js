const express = require('express')
const publicRouter = express.Router()
const userController = require('../controller/userController')
const authController = require('../controller/authContoller')
const dokterController = require('../controller/dokterController')
const jadwalDokterController = require('../controller/jadwalDokterController')
const bookingController = require('../controller/bookingController')

publicRouter.post('/api/user', userController.create)

publicRouter.post('/api/login', authController.login)

publicRouter.post('/api/dokter', dokterController.create)
publicRouter.get('/api/dokter', dokterController.getDokter)

publicRouter.post('/api/jadwaldokter', jadwalDokterController.create)
publicRouter.get('/api/jadwaldokter', jadwalDokterController.getJadwal)

publicRouter.post('/api/booking', bookingController.create)

module.exports = publicRouter

