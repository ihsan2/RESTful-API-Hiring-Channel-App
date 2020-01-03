const express = require("express");
const Route = express.Router();
// import controller
const tes = require("../controllers/tes");

Route.get("/", tes.getTes);

module.exports = Route;
