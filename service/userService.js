const { registerUserValidation } = require("../validation/userValidation")
const validate = require("../validation/validation")
const {User} = require('../models')
const { where } = require("sequelize")
const ResponseError = require("../error/resonseError")
const bcrypt = require('bcrypt')

const register = async (request) => {

    const userData = validate(registerUserValidation, request)

    const countUser = await User.count({
        where : {
            username : request.username
        }
    })

    if(countUser){
        throw ResponseError(400, "username is already exist ")
    }

    userData.password = await bcrypt.hash(userData.password, 10);
    console.log(userData)
    return await User.create(userData, {
        returning: ['username', 'create']
    })
}

module.exports = {
    register
}