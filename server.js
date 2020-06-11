var express = require('express');
var methodOverride = require('method-override');
var port = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));

app.use(express.urlencoded({
    extended: false
}));

app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers-controllers.js");

app.use(routes);

app.listen(port, function(){
    console.log("Server is listening on: http://localhost:" + port);
});
