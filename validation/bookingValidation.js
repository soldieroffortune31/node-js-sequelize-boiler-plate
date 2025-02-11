const Joi = require('joi')

const createBookingValidation = Joi.object({
    nama_pasien : Joi.string().max(100).required(),
    no_telp : Joi.string().max(20).required(),
    jadwal_id : Joi.number().required()
})


module.exports = {
    createBookingValidation
}