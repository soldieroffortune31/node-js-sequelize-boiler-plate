const Joi = require('joi')

const createDokterValidation = Joi.object({
    nama_dokter : Joi.string().max(50).required(),
    jenis : Joi.string().required()
})

module.exports = {
    createDokterValidation
}