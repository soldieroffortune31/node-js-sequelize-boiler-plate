const authService = require('../service/authValidation') 

const login = async (req, res, next) => {
    try {
        
        const result = await authService.login(req.body)

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
    login
}