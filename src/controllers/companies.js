// import dependencies
const uuidv4 = require('uuid/v4')
// import model
const companiesModel = require('../models/companies')
const responseHelper = require('../helper/response')

const maxSize = 1024 * 1024 * 1 //set maximun size of file image to 1 MB

module.exports = {
    getCompanies: (req, res) => {
        companiesModel.getCompanies()
        .then(result => {
            return responseHelper.response(res, 200, false, 'Success get companies', pageDetail, result)
        })
        .catch(err => {
            return responseHelper.response(res, 400, true, 'Error get companies')
        })
    },
    createCompany: (req, res) => {
        const id = uuidv4();
        const {email, password, name, location, description} = req.body
        const image = req.file.filename
        const data = {id, email, password, name, image, location, description}
        companiesModel.createCompany(data)
            .then(result => {
                return responseHelper.response(res, 200, false, 'Success create a new company', result)
            })
            .catch(err => {
                return responseHelper.response(res, 400, true, 'Error create a new company')
            })
    },
    updateCompany: (req, res) => {
        const id = req.params.id;
        const {email, password, name, location, description} = req.body;
        const image = req.file.filename;
        const data = {id, email, password, name, image, location, description}
        companiesModel.updateCompany(data, id)
            .then(result => {
                return responseHelper.response(res, 200, false, `Success update company with id: ${id}`, result)
            })
            .catch(err => {
                return responseHelper.response(res, 400, true, `Error update company with id: ${id}`)
            })             
    },
    deleteCompany: (req, res) => {
        const id = req.params.id
        companiesModel.deleteCompany(id)
        .then(result => {
            return responseHelper.response(res, 200, false, `Success delete company with id: ${id}`, result)
        })
        .catch(err => {
            return responseHelper.response(res, 400, true, `Error delete company with id: ${id}`)
        })     
    }
}