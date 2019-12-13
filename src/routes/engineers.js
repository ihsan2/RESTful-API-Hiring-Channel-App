const express = require('express')
const multer = require('multer')
const Route = express.Router()
const path = require('path')
//import helper
const token = require('../helper/auth')

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
    fileFilter: (req, file, cb) => {
      var ext = path.extname(file.originalname);
      if(ext !== '.jpg') {
        return cb(new Error('Only jpeg images allowed'))
        console.log(err)
      }
      cb(null, true)
    },
    limits: {
      fileSize: maxSize
    }
    // limits: (req, cb) => {
    //   if(fileSize > maxSize) {
    //     return cb(new Error('File Large'))
    //   }
    //   cb(null, true)
    //   fileSize: maxSize
    // }
})

let uploadImage = upload.single('image')
// function uploadFile (req, res, next) {
//   uploadImage(req, res, (err) => {
//     if (err && !err instanceof multer.MulterError) return res.send({ error: 'invalid' })
//     if (err && err instanceof multer.MulterError) return res.send({ error: 'large' })

//     console.log('save the file', req.file)
//     next()
//   })
// }
// import controller
const engineers = require('../controllers/engineers')

Route
    .get('/', engineers.getEngineers)
    .post('/', uploadImage, engineers.createEngineer)
    .put('/:id', upload.single('image'), engineers.updateEngineer)
    .delete('/:id', engineers.deleteEngineer)

module.exports = Route