const express = require("express");
const Route = express.Router();

// import controller
const message = require("../controllers/message");

Route.post("/toEngineer", message.addMessageToEngineer)
  .post("/toCompany", message.addMessageToCompany)
  .get("/", message.getMessage)
  .get("/id", message.getMessageId)
  .delete("/toCompany/:id_message", message.deleteMessagetoCompany)
  .delete("/toEngineer/:id_message", message.deleteMessagetoEngineer);

module.exports = Route;
