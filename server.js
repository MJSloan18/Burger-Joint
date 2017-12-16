//REQUIRE NPM PACKAGES NECESSARY FOR FUNCTIONALITY
var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

var exhb = require("express-handlebars");

app.engine("handlebars", exhb({ defaultLayout: "main" }));

app.set("view engine", "handlebars");

var routes = require("./controllers/burgerControllers.js");

app.use("/", routes);

app.listen(PORT);
