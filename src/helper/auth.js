require('dotenv').config()
const jwt = require('jsonwebtoken')

const jwtSecret = process.env.JWT_SECRET
// import helper
const responseHelper = require('../helper/response')

module.exports = {
  authenticateToken: (req, res, next) => {
    const { authorization, email, id } = req.headers

    if (!authorization || !email || !id) {
      return responseHelper.responseAuth(res, 400, false, 'Error! Unauthorized')
    }

    const token = authorization.split(' ')[1]

    jwt.verify(token, jwtSecret, (err, data) => {
      if (err && err.name === 'JsonWebTokenError') {
        return responseHelper.responseAuth(res, 400, false, 'Error! Invalid Token.', token, {email, id})
      }

      if (err && err.name === 'TokenExpiredError') {
        return responseHelper.responseAuth(res, 400, false, 'Error! Token Expired.', token, {email, id})
      }

      if (email !== data.email || id !== data.id) {
        return responseHelper.responseAuth(res, 400, false, 'Error! Invalid Token for the Email or Id', token, {email, id})
      }

      req.data = data
      req.token = token
      next()
    })
  }
}
