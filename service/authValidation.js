require('dotenv').config();
const { loginValidation } = require("../validation/authValidation")
const validate = require("../validation/validation")
const {User} = require('../models')
const { where } = require("sequelize")
const ResponseError = require("../error/resonseError")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const login = async (request) => {

    request = validate(loginValidation, request)
    console.log('request', request)
    const userData = await User.findOne({
        where : {
            username : request.username
        }
    })

    if(!userData){
        throw new ResponseError(401, "Username or password wrong")
    }

    console.log('user_id',userData.user_id)

    const isValidPassword = await bcrypt.compare(request.password, userData.password)
    if(!isValidPassword){
        throw new ResponseError(401, "Username or passwor wrong")
    }

    const token = await jwt.sign({user_id : userData.user_id, username : userData.username, name : userData.name}, process.env.JWT_SECRET)

    return token

}


module.exports = {
    login
}