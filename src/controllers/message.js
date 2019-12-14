// import model
const messageModel = require('../models/message')

module.exports = {
  addMessageToEngineer: (req, res) => {
    const { id_company, id_engineer, message } = req.body
    const date_created = new Date()
    const id_message = `${id_company}/${id_engineer}/${Date.now()}`
    const data = { id_message, id_company, id_engineer, message, date_created }
    messageModel.addMessageToEngineer(data)
      .then(result => {
        res.status(200).json({
          status: 200,
          error: false,
          data,
          message: `Success add message from ${id_company} to ${id_engineer}`
        })
      })
      .catch(err => {
        res.status(400).json({
          status: 400,
          error: true,
          message: 'Error add message'
        })
      })
  },
  addMessageToCompany: (req, res) => {
    const { id_company, id_engineer, message } = req.body
    const date_created = new Date()
    const id_message = `${id_company}/${id_engineer}/${Date.now()}`
    const data = { id_message, id_company, id_engineer, message, date_created }
    messageModel.addMessageToCompany(data)
      .then(result => {
        res.status(200).json({
          status: 200,
          error: false,
          data,
          message: `Success add message from ${id_engineer} to ${id_company}`
        })
      })
      .catch(err => {
        res.status(400).json({
          status: 400,
          error: true,
          message: 'Error add message'
        })
      })
  },
  getMessage: (req, res) => {
    const { company, engineer } = req.body
    messageModel.getMessage(company, engineer)
      .then(result => {
        res.status(200).json({
          status: 200,
          error: false,
          data: result
        })
      })
      .catch(err => {
        res.status(400).json({
          status: 400,
          error: true,
          message: 'Error get message'
        })
      })
  }
}
