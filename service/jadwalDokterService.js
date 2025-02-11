const { createJadwalDokterValidation } = require("../validation/jadwalDokterValidation")
const validate = require("../validation/validation")
const {Jadwal, Dokter} = require('../models')
const { where } = require("sequelize")
const ResponseError = require("../error/resonseError")

const create = async (request) => {

    request = validate(createJadwalDokterValidation, request)

    const dokter = await Dokter.findOne({
        where : {
            id : request.dokter_id
        }
    })

    if(!dokter){
        throw new ResponseError(404, "Dokter tidak ditemukan")
    }

    return await Jadwal.create(request)

}


const getJadwal = async () => {

    const jadwal = await Jadwal.findAll({include : [{model: Dokter, as : "Dokter"}]})

    let response = []
    if(jadwal.length > 0){

        for (let index = 0; index < jadwal.length; index++) {
            const element = jadwal[index];
            
            let data = {
                jadwal_id : element.id,
                dokter_id : element.dokter_id,
                nama_dokter : element.Dokter.name_dokter,
                hari : element.hari,
                jam_buka : element.jam_buka,
                jam_tutup : element.jam_tutup
            }

            response.push(data)
        }

    }

    return response

}


module.exports = {
    create,
    getJadwal
}