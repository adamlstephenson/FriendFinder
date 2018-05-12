//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

//Express
var app = express();

//PORT
var PORT = process.env.PORT || 8080;

//Express Data Parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Router
require("./routing/apiRoutes.js")(app);
require("./routing/htmlRoutes.js")(app);

//Listener
app.listen(PORT, function () {
    console.log("app listening on PORT: " + PORT)
});