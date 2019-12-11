require('dotenv').config()
const jwt = require('jsonwebtoken')
const db = require('../configs/db')

const jwtSecret = process.env.JWT_SECRET
// import model
const authsModel = require('../models/auth')

module.exports = {
    loginEngineer: (req, res) => {
        const email = req.data.email
        authsModel.loginEngineer(email)
            .then(result => { 
                res.json(result.filter(post => post.email === email))
            })
            .catch(err => {
                res.json({
                    status: 400,
                    error: true,
                    message: err
                })
            })
    },
    loginCompany: (req, res) => {
        const email = req.data.email
        authsModel.loginCompany()
            .then(result => {
                res.json(result.filter(post => post.email === email))
            })
            .catch(err => {
                res.json({
                    status: 400,
                    error: true,
                    message: err
                })
            })
    },
    authEngineer: (req, res) => {
        const {email} = req.body
        let id = ''
        authsModel.checkEmailExistsEngineer(email)
            .then(result => {
                id = JSON.stringify(result);
                id = id.split('\"')[3]

                const data = {email, id}

                const accessToken = jwt.sign(data, jwtSecret, { expiresIn: 60 * 60 })
                if (!id) {
                    res.status(404).json({
                        status: 404,
                        message: 'Email Not Found',
                    }) 
                    return
                } else {
                    res.status(201).json({
                        status: 201,
                        message: 'Success Login!',
                        accessToken,
                        data
                    })
                    return
                }
            }) 
    },
    authCompany: (req, res) => {
        const {email} = req.body
        let id = ''
        authsModel.checkEmailExistsCompany(email)
            .then(result => {
                id = JSON.stringify(result);
                id = id.split('\"')[3]

                const data = {email, id}

                const accessToken = jwt.sign(data, jwtSecret, { expiresIn: 60 * 60 })
                if (!id) {
                    res.status(404).json({
                        status: 404,
                        message: 'Email Not Found',
                    }) 
                    return
                } else {
                    res.status(201).json({
                        status: 201,
                        message: 'Success Login!',
                        accessToken,
                        data
                    })
                    return
                }
            }) 
    },
}
