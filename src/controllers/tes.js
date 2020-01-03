const db = require("../configs/db");
// import model
const tesModel = require("../models/tes");
const responseHelper = require("../helper/response");
require("dotenv").config();

module.exports = {
  getTes: (req, res) => {
    tesModel
      .getTes()
      .then(result => {
        return responseHelper.response(
          res,
          200,
          false,
          "Success get tes",
          result
        );
      })
      .catch(err => {
        return responseHelper.response(res, 400, true, "Error get tes");
      });
  },

  createTes: (req, res) => {
    const { name } = req.body;
    const data = {
      name
    };
    tesModel
      .createTes(data)
      .then(result => {
        return responseHelper.response(
          res,
          200,
          false,
          "Success create a new tes",
          {},
          data
        );
      })
      .catch(err => {
        return responseHelper.response(
          res,
          400,
          true,
          "Error create a new tes"
        );
      });
  }
};
