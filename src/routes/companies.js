const express = require("express");
const multer = require("multer");
const Route = express.Router();
const path = require("path");
const responseHelper = require("../helper/response");

const DIR = "src/uploads/company"; // set directory of engineer image
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

// import controller
const companies = require("../controllers/companies");

Route.get("/", companies.getCompanies)
  .get("/:id", companies.getCompanybyId)
  .post("/", uploadFile, companies.createCompany)
  .put("/:id", uploadFile, companies.updateCompany)
  .delete("/:id", companies.deleteCompany);

module.exports = Route;
