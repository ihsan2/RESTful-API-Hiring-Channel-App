const express = require("express");
const Route = express.Router();

// import controller
const message = require("../controllers/message");

Route.post("/toEngineer", message.addMessageToEngineer)
  .post("/toCompany", message.addMessageToCompany)
  .get("/", message.getMessage);

module.exports = Route;
