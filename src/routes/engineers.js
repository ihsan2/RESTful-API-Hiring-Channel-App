const express = require('express')
const multer = require('multer')
const Route = express.Router()
const path = require('path')

const DIR = 'src/uploads/engineer' //set directory of engineer image
const maxSize = 1024 * 1024 * 1 //set maximun size of file image to 1 MB
// set destination & filename
let storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, DIR)
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    },
})
// upload image of engineer
let upload = multer({
    storage,
    fileFilter: function (req, file, callback) {
      var ext = path.extname(file.originalname);
      if(ext !== '.jpg') {
          return callback(new Error('Only images with file .jpg are allowed'))
      }
      callback(null, true)
    },
    limits: {
      fileSize: maxSize
    }
})

// import controller
const engineers = require('../controllers/engineers')

Route
    .get('/', engineers.getEngineers)
    .post('/', upload.single('image'), engineers.createEngineer)
    .put('/:id', upload.single('image'), engineers.updateEngineer)
    .delete('/:id', engineers.deleteEngineer)
    .get('/search', engineers.searchEngineers)
    .get('/sortName', engineers.sortEngineersByName)
    .get('/sortSkill', engineers.sortEngineersBySkill)
    .get('/sortDateUpdated', engineers.sortEngineersByDateUpdated)
    .get('/page', engineers.pageEngineers)

module.exports = Route

