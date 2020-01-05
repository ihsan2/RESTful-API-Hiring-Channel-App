const express = require("express");
const Route = express.Router();

// import controller
const message = require("../controllers/message");

Route.post("/toEngineer", message.addMessageToEngineer)
  .post("/toCompany", message.addMessageToCompany)
  .get("/", message.getMessage)
  .delete("/:id_message", message.deleteMessage);

module.exports = Route;
