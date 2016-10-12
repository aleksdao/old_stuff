var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/tripplanner");

var db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo db connection error"));

var Schema = mongoose.Schema;

var placeSchema = new Schema({
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  location: {
    type: [Number],
    required: true
  }
})

var hotelSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  place: {
    type: [placeSchema],
    required: true
  },
  num_stars: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  },
  amenities: {
    type: String,
    required: true
  }
})

var activitySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  place: {
    type: [placeSchema],
    required: true
  },
  age_range: {
    type: String,
    required: true
  }
})

var restaurantSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  place: {
    type: [placeSchema],
    required: true
  },
  cuisine: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  }
});



var Place = mongoose.model("Place", placeSchema);
var Hotel = mongoose.model("Hotel", hotelSchema);
var Activity = mongoose.model("Activity", activitySchema);
var Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = {
  Place: Place,
  Hotel: Hotel,
  Activity: Activity,
  Restaurant: Restaurant
}
