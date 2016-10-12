var express = require("express");
var app = express();
var swig = require("swig");
var path = require("path");
var bodyParser = require("body-parser");
var models = require("./models");
var sass = require("node-sass-middleware");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("views", path.join(__dirname + "/views"));
app.set("view engine", "html");
app.engine("html", swig.renderFile);

app.use(
  sass({
    src: path.join(__dirname + "/assets"),
    dest: path.join(__dirname + "/public"),
    debug: true
}));

app.use(require('method-override')('_method'));

app.use(express.static(path.join(__dirname, "/public")));

app.use("/bootstrap", express.static(path.join(__dirname, "/node_modules/bootstrap/dist")));
app.use("/jquery", express.static(path.join(__dirname, "/node_modules/jquery/dist")));

app.get("/", function(req, res, next) {
  var activities, hotels, restaurants;
  var everything = {};
  models.Activity.find({})
    .then(function(activities) {
      everything.activities = activities;
      console.log(activities);
      return models.Hotel.find({});
    })
    .then(function(hotels) {
      everything.hotels = hotels;
      return models.Restaurant.find({});
    })
    .then(function(restaurants) {
      everything.restaurants = restaurants;
      console.log(everything);
      res.render("index", { everything: everything });
    }, next)
})

app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// handle all errors (anything passed into `next()`)
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    console.log({error: err});
    res.send(
        // ... fill in this part
    );
});

app.listen(3000, function(req, res, next) {
  console.log("server is running")
})