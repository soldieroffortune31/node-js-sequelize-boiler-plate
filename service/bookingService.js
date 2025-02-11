const { createBookingValidation } = require("../validation/bookingValidation")
const validate = require("../validation/validation")
const {Pendaftaran, Jadwal} = require('../models')
const ResponseError = require("../error/resonseError")

const create = async (request) => {

    request = validate(createBookingValidation, request)

    let findJadwal = await Jadwal.findOne({
        where : {
            id : request.jadwal_id
        }
    })

    if(!findJadwal){
        throw new ResponseError(404, "Jadwal tidak ditemukan")
    }

    const insert = await Pendaftaran.create(request)

    return insert

}

module.exports = {
    create
}