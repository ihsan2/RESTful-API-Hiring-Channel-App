// import dependencies
const uuidv4 = require('uuid/v4')
// import model
const companiesModel = require('../models/companies')

const maxSize = 1024 * 1024 * 1 //set maximun size of file image to 1 MB

module.exports = {
    getCompanies: (req, res) => {
        companiesModel.getCompanies()
            .then(result => {
                res.status(200).json({
                    status: 200,
                    error: false,
                    data: result,
                })
            })
            .catch(err => {
                res.status(400).json({
                    status: 400,
                    error: true,
                    message: 'Error get companies',
                })
            })
    },
    createCompany: (req, res) => {
        const id = uuidv4();
        const {email, password, name, location, description} = req.body
        const image = req.file.filename
        const data = {id, email, password, name, image, location, description}
        if (req.file.size > maxSize) {
            res.status(400).json({
                status: 400,
                error: true,
                message: 'Error! File Too Large.'
            }) 
        } else {
            companiesModel.createCompany(data)
            .then(result => {
                res.status(200).json({
                    status: 200,
                    error: false,
                    data,
                    message: 'Success create a New Company'
                })
            })
            .catch(err => {
                res.status(400).json({
                    status: 400,
                    error: true,
                    message: 'Error create a new company'
                })
            })
        }        
    },
    updateCompany: (req, res) => {
        const id = req.params.id;
        const {email, password, name, location, description} = req.body;
        const image = req.file.filename;
        const data = {id, email, password, name, image, location, description}
        if (req.file.size > maxSize) {
            res.status(400).json({
                status: 400,
                error: true,
                message: 'Error! File Too Large.'
            }) 
        } else {
            companiesModel.updateCompany(data, id)
            .then(result => {
                res.status(200).json({
                    status: 200,
                    error: false,
                    data,
                    message: 'Success update company with id: ' + id
                })
            })
            .catch(err => {
                res.status(400).json({
                    status: 400,
                    error: true,
                    message: 'Error update company with id: ' + id
                })
            })
        }        
    },
    deleteCompany: (req, res) => {
        const id = req.params.id
        companiesModel.deleteCompany(id)
            .then(result => {
                res.status(201).json({
                    status: 201,
                    error: false,
                    message: 'Success delete company with id: ' + id
                })
            })
            .catch(err => {
                res.status(400).json({
                    status: 400,
                    error: true,
                    message: err
                })
            })
    }
}