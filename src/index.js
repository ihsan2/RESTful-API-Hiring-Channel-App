const express = require('express')
const Route = express.Router()

// import routes
const engineers = require('./routes/engineers')
const companies = require('./routes/companies')
const auth = require('./routes/auth')

Route
    .use('/engineers', engineers)
    .use('/companies', companies)
    .use('/auth', auth)

module.exports = Route