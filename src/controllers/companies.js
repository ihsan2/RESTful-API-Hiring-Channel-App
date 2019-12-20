// import dependencies
const uuidv4 = require("uuid/v4");
// import model
const companiesModel = require("../models/companies");
const responseHelper = require("../helper/response");

module.exports = {
  getCompanies: (req, res) => {
    const search = req.query.search ? req.query.search : "";
    companiesModel
      .getCompanies(search)
      .then(result => {
        return responseHelper.response(
          res,
          200,
          false,
          "Success get companies",
          {},
          result
        );
      })
      .catch(err => {
        return responseHelper.response(res, 400, true, err);
      });
  },
  getCompanybyId: (req, res) => {
    const id = req.params.id;
    companiesModel
      .getCompanybyId(id)
      .then(result => {
        return responseHelper.response(
          res,
          200,
          false,
          `Success get company with id: ${id}`,
          {},
          result
        );
      })
      .catch(err => {
        return responseHelper.response(
          res,
          400,
          true,
          `Error get company with id: ${id}`
        );
      });
  },
  createCompany: (req, res) => {
    if (!req.file) {
      return responseHelper.response(
        res,
        400,
        true,
        "Error! No image selected."
      );
    }

    const id = uuidv4();
    const { email, password, name, location, description } = req.body;
    const image = req.file.filename;
    const data = { id, email, password, name, image, location, description };
    companiesModel
      .createCompany(data)
      .then(result => {
        return responseHelper.response(
          res,
          200,
          false,
          "Success create a new company",
          {},
          data
        );
      })
      .catch(err => {
        return responseHelper.response(
          res,
          400,
          true,
          "Error create a new company"
        );
      });
  },
  updateCompany: (req, res) => {
    if (!req.file) {
      return responseHelper.response(
        res,
        400,
        true,
        "Error! No image selected."
      );
    }

    const id = req.params.id;
    const { email, password, name, location, description } = req.body;
    const image = req.file.filename;
    const data = { id, email, password, name, image, location, description };
    companiesModel
      .updateCompany(data, id)
      .then(result => {
        return responseHelper.response(
          res,
          200,
          false,
          `Success update company with id: ${id}`,
          {},
          data
        );
      })
      .catch(err => {
        return responseHelper.response(
          res,
          400,
          true,
          `Error update company with id: ${id}`
        );
      });
  },
  deleteCompany: (req, res) => {
    const id = req.params.id;
    companiesModel
      .deleteCompany(id)
      .then(result => {
        return responseHelper.response(
          res,
          200,
          false,
          `Success delete company with id: ${id}`
        );
      })
      .catch(err => {
        return responseHelper.response(
          res,
          400,
          true,
          `Error delete company with id: ${id}`
        );
      });
  }
};
