const userService = require('../service/userService')

const create = async (req, res, next) => {
    try {
        
        await userService.register(req.body)

        res.status(200).json({
            code : 200, 
            message : "OK"
        })

    } catch (error) {
        next(error)
    }
}


const get = async (req, res, next) => {
    try {
        
        const user = req.user

        res.status(200).json({
            code : 200,
            message : "OK",
            data : user
        })

    } catch (error) {
        next(error)
    }
}

module.exports = {
    create,
    get
}