const jadwalDokterService = require('../service/jadwalDokterService')

const create = async (req, res, next) => {
    try {
        
        const result = await jadwalDokterService.create(req.body)

        res.status(200).json({
            code : 200, 
            message : "OK"
        })


    } catch (error) {
        next(error)
    }
}

const getJadwal = async (req, res, next) => {
    try {
        
        const result = await jadwalDokterService.getJadwal()

        res.status(200).json({
            code : 200,
            message : "OK",
            data : result
        })

    } catch (error) {
        next(error)
    }
}

module.exports = {
    create,
    getJadwal
}