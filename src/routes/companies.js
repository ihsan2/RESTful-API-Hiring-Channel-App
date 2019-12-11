const express = require('express')
const multer = require('multer')
const Route = express.Router()
const path = require('path')

const DIR = 'src/uploads/company' //set directory of engineer image
const maxSize = 1024 * 1024 * 1 //set maximun size of file image to 1 MB
// set destination & filename
let storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, DIR)
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
}); 
// set limit size of image
let limits = {
    fileSize: maxSize,
}
// upload image of engineer
let upload = multer({
    storage: storage,
})

// import controller
const companies = require('../controllers/companies')

Route
    .get('/', companies.getCompanies)
    .post('/', upload.single('image'), companies.createCompany)
    .put('/:id', upload.single('image'), companies.updateCompany)
    .delete('/:id', companies.deleteCompany)

module.exports = Route

