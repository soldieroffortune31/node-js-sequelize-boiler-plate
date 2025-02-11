const dokterService = require('../service/dokterService')

const create = async (req, res, next) => {
    try {
        
        await dokterService.create(req.body)

        res.status(200).json({
            code : 200,
            message : "OK"
        })

    } catch (error) {
        next(error)
    }
}

const getDokter = async (req, res, next) => {
    try {
        
        const jenisDokter = req.query.jenis

        const result = await dokterService.getDokter(jenisDokter)

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
    getDokter
}