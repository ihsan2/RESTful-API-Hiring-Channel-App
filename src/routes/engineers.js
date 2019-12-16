const express = require("express");
const multer = require("multer");
const Route = express.Router();
const path = require("path");
// import controller
const engineers = require("../controllers/engineers");
// import helper
const token = require("../helper/auth");
const responseHelper = require("../helper/response");

const DIR = "src/uploads/engineer"; // set directory of engineer image
const maxSize = 1024 * 1024 * 7; // set maximun size of file image to 1 MB
// set destination & filename
const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    callback(null, DIR);
  },
  filename: function(req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  }
});
// upload image of engineer
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    var ext = path.extname(file.originalname);
    if (ext !== ".jpg") {
      req.imageValidationError = "Error! Please upload .jpg file";
      return cb(new Error("Only jpeg images allowed"));
    }
    cb(null, true);
  },
  limits: {
    fileSize: maxSize
  }
});

const uploadImage = upload.single("image");
function uploadFile(req, res, next) {
  uploadImage(req, res, err => {
    if (req.imageValidationError) {
      return responseHelper.response(res, 400, true, req.imageValidationError);
    }
    if (err && err instanceof multer.MulterError) {
      return responseHelper.response(
        res,
        400,
        true,
        "Error! File image too large."
      );
    }
    next();
  });
}

Route.get("/", engineers.getEngineers)
  .get("/:id", engineers.getEngineerbyId)
  .post("/", uploadFile, engineers.createEngineer)
  .put("/:id", uploadFile, engineers.updateEngineer)
  .delete("/:id", engineers.deleteEngineer);

module.exports = Route;
