const { User } = require("../db");
const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    let token = req.headers.authorization;
let word = token.split('')
let jwtToken = word[1];

    try {
        let decodedValue = jwtToken.verify(jwtToken,jwtPassword);
        if(decodedValue.username){
            req.username = decodedValue.username
            next()
        }else{
            req.status(403).json({
                msg:"Invalid authorization"
            })
        }
    } catch (error) {
        req.status(403).json({
            msg:"Invalid authorization"
        })
    }
}

module.exports = userMiddleware;