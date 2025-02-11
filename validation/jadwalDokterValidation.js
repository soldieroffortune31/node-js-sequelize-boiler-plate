const Joi = require('joi')

const createJadwalDokterValidation = Joi.object({
    dokter_id : Joi.number().required(),
    hari : Joi.string().required(),
    jam_buka : Joi.string().required(),
    jam_tutup : Joi.string().required()
})

module.exports = {
    createJadwalDokterValidation
}