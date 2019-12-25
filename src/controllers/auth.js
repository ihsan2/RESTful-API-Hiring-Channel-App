require("dotenv").config();
const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET;
// import model
const authsModel = require("../models/auth");
// import helper
const responseHelper = require("../helper/response");

module.exports = {
  loginEngineer: (req, res) => {
    const email = req.data.email;
    const accessToken = req.token;
    authsModel
      .loginEngineer(email)
      .then(result => {
        return responseHelper.responseAuth(
          res,
          200,
          false,
          "Authorized!",
          accessToken,
          result.filter(post => post.email === email)
        );
      })
      .catch(err => {
        return responseHelper.responseAuth(res, 400, false, "Unauthorized!");
      });
  },
  loginCompany: (req, res) => {
    const email = req.data.email;
    const accessToken = req.token;
    authsModel
      .loginEngineer(email)
      .then(result => {
        return responseHelper.responseAuth(
          res,
          200,
          false,
          "Authorized!",
          accessToken,
          result.filter(post => post.email === email)
        );
      })
      .catch(err => {
        return responseHelper.responseAuth(res, 400, false, "Unauthorized!");
      });
  },
  authEngineer: (req, res) => {
    const { email, password } = req.body;
    let id = "";
    authsModel.checkEmailExistsEngineer(email, password).then(result => {
      let id,
        name,
        image,
        description,
        skill,
        location,
        date_of_birth,
        expected_salary,
        showcase,
        date_created,
        date_updated,
        role = "engineer";

      result.map(function(res) {
        (id = res.id),
          (name = res.name),
          (image = res.image),
          (description = res.description),
          (skill = res.skill),
          (location = res.location),
          (date_of_birth = res.date_of_birth),
          (expected_salary = res.expected_salary),
          (showcase = res.showcase),
          (date_created = res.date_created),
          (date_updated = res.date_updated);
      });

      const data = {
        id,
        email,
        password,
        name,
        image,
        description,
        skill,
        location,
        date_of_birth,
        expected_salary,
        showcase,
        date_created,
        date_updated,
        role
      };
      const accessToken = jwt.sign(data, jwtSecret, { expiresIn: 60 * 60 });
      if (!id) {
        return responseHelper.responseAuth(
          res,
          400,
          false,
          "Error! Email or Password not found"
        );
      } else {
        return responseHelper.responseAuth(
          res,
          200,
          false,
          "Success Login",
          accessToken,
          data
        );
      }
    });
  },
  authCompany: (req, res) => {
    const { email, password } = req.body;
    let id = "";
    authsModel.checkEmailExistsCompany(email, password).then(result => {
      let id,
        name,
        image,
        location,
        description,
        role = "company";

      result.map(function(res) {
        (id = res.id),
          (name = res.name),
          (image = res.image),
          (location = res.location),
          (description = res.description);
      });

      const data = {
        id,
        email,
        password,
        name,
        image,
        location,
        description,
        role
      };

      const accessToken = jwt.sign(data, jwtSecret, { expiresIn: 60 * 60 });
      if (!id) {
        return responseHelper.responseAuth(
          res,
          400,
          false,
          "Error! Email or Password not found"
        );
      } else {
        return responseHelper.responseAuth(
          res,
          200,
          false,
          "Success Login",
          accessToken,
          data
        );
      }
    });
  }
};
