var mongoose = require('mongoose');
var airportSchema = new mongoose.Schema({
  name: {
    type: String
  },
  airportCode: {
    type: String
  },
  city: {
    type: String
  }

})


mongoose.model('Airport', airportSchema)
