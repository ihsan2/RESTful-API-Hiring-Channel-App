// import model
const messageModel = require("../models/message");
const responseHelper = require("../helper/response");

module.exports = {
  addMessageToEngineer: (req, res) => {
    const { id_company, id_engineer, message } = req.body;
    const date_created = new Date();
    const id_message = `${id_company}_${id_engineer}_${Date.now()}`;
    const data = { id_message, id_company, id_engineer, message, date_created };
    messageModel
      .addMessageToEngineer(data)
      .then(result => {
        res.status(200).json({
          status: 200,
          error: false,
          data,
          message: `Success add message from ${id_company} to ${id_engineer}`
        });
      })
      .catch(err => {
        res.status(400).json({
          status: 400,
          error: true,
          message: "Error add message"
        });
      });
  },
  addMessageToCompany: (req, res) => {
    const { id_company, id_engineer, message } = req.body;
    const date_created = new Date();
    const id_message = `${id_company}_${id_engineer}_${Date.now()}`;
    const data = { id_message, id_company, id_engineer, message, date_created };
    messageModel
      .addMessageToCompany(data)
      .then(result => {
        res.status(200).json({
          status: 200,
          error: false,
          data,
          message: `Success add message from ${id_engineer} to ${id_company}`
        });
      })
      .catch(err => {
        res.status(400).json({
          status: 400,
          error: true,
          message: "Error add message"
        });
      });
  },
  getMessage: (req, res) => {
    const id_company = req.query.id_company;
    const id_engineer = req.query.id_engineer;
    messageModel
      .getMessage(id_company, id_engineer)
      .then(result => {
        res.status(200).json({
          status: 200,
          error: false,
          data: result
        });
      })
      .catch(err => {
        res.status(400).json({
          status: 400,
          error: true,
          message: "Error get message"
        });
      });
  },
  deleteMessage: (req, res) => {
    const id_message = req.params.id_message;
    messageModel
      .deleteMessage(id_message)
      .then(result => {
        return responseHelper.response(
          res,
          200,
          false,
          `Success delete message with id: ${id_message}`
        );
      })
      .catch(err => {
        return responseHelper.response(
          res,
          400,
          true,
          `Error delete message with id: ${id_message}`
        );
      });
  }
};
