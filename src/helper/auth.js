require('dotenv').config()
const jwt = require('jsonwebtoken')

const jwtSecret = process.env.JWT_SECRET

module.exports = {
    authenticateToken: (req, res, next) => {
      const {authorization, email, id} = req.headers

      if (!authorization || !email || !id) {
        return res.status(404).json({
          message: 'Unauthorized!'
        })
      }

      const token = authorization.split(' ')[1]
    
      jwt.verify(token, jwtSecret, (err, data) => {
        if (err && err.name === 'JsonWebTokenError')  {
          return res.status(403).json({
            message: 'Invalid Token!'
          })
      }

      if (err && err.name === 'TokenExpiredError') {
        return res.status(403).json({
          message: 'Token Expired!'
        })
      }
      
      if (email !== data.email || id !== data.id) {
        return res.status(403).json({
          message: "Token Invalid for the selected Email or Id"
        })
      }

      req.data = data
      next();
    })
  }
}
