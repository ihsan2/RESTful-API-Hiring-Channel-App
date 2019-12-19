// import dependencies
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const logger = require("morgan");
var cors = require("cors");
const routerNav = require("./src/index");

// use dependencies
const app = express();
app.use(bodyParser.json()); // parsing json
app.use(bodyParser.urlencoded({ extended: true })); // parsing x-www-formencoded
app.use(logger("dev"));
app.use(cors());
dotenv.config();
var path = require("path");

//app.use(express.static(__dirname)); // Current directory is root
app.use(express.static(path.join(__dirname, "public")));

// middleware
app.use("/api/v1", routerNav);

app.get("*", (req, res) => {
  res.send("Error! 404 not Found.");
});

// listen to connection with callback function
app.listen(process.env.PORT, function() {
  console.log(`CORS-enabled web server listening on port ${process.env.PORT}`);
});
