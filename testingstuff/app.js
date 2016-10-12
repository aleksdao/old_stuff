var express = require("express");
var app = express();
var logger = require("morgan");

app.use(logger());

var isValid = function (req, res, next) {
  if (req.query.id === "100") {
      next("should be 100");
  }
next();


}

app.get("/", isValid, function (req, res, next) {
  res.send("hi there");
})

app.listen(3000);
