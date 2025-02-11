const bookingService = require('../service/bookingService')

const create = async (req, res, next) => {
    try {

        const result = await bookingService.create(req.body)

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
    create
}