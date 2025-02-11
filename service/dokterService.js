const { createDokterValidation } = require("../validation/dokterValidation")
const validate = require("../validation/validation")
const {Dokter} = require('../models')
const ResponseError = require("../error/resonseError")

const create = async (request) => {

    request = validate(createDokterValidation, request)

    const find = await Dokter.findOne({
        where : {
            name_dokter : request.nama_dokter
        }
    })



    if(find){
        throw new ResponseError(400, "Dokter sudah ada")
    }


    return await Dokter.create({
        name_dokter : request.nama_dokter,
        jenis : request.jenis
    })

}

const getDokter = async (jenisDokter) => {

    const find = await Dokter.findAll({
        where : {
            jenis : jenisDokter
        }
    })

    return find

}

// const formatDate = (date) => {

//     let date = new Date(date)
//     let year = date

// }


module.exports = {
    create,
    getDokter
}