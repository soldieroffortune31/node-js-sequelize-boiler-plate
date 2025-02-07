require('dotenv').config();
const jwt = require('jsonwebtoken')

const authMiddleware = async(req, res, next) =>{

    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]

    if(!token){
        return res.status(401).json({
            code : 401,
            message : "Unauthorized"
        })
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(401).json({code : 401, message : "Unauthorized"});

        req.user = user
        next()
    })



}

module.exports = authMiddleware