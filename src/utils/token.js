require('dotenv').config()
const jwt = require('jsonwebtoken')
const moment = require('moment-timezone')

const jwtSecret = process.env.JWT_SECRET
const jwtExp = process.env.JWT_EXPIRATION_MINUTES

const generateToken = ({ username, password }) => {
    const payload = {
        exp: moment().add(jwtExp, 'minutes').unix(),
        iat: moment().unix(),
        sub: username,
        password
    }
    const token = jwt.sign(payload, jwtSecret)
    return token
}

export default generateToken