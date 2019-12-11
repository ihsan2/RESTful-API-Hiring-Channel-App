const express = require('express')
const Route = express.Router()

// import controller
const auth = require('../controllers/auth')
const token = require('../helper/auth')

Route
    .post('/engineer', auth.authEngineer)
    .post('/company', auth.authCompany)
    .get('/engineer', token.authenticateToken, auth.loginEngineer)
    .get('/company', token.authenticateToken, auth.loginCompany)

module.exports = Route

