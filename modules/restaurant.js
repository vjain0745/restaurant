var mongoose = require('mongoose');


var restaurant = new mongoose.Schema({
   
    name:{
        type: String,
        required: true,
        trim: true
    
    },
    cuisines: [{
      type: mongoose.Schema.Types.ObjectId,
      ref : "cuisines"
   }],
    
});



var restaurants = mongoose.model('restaurants', restaurant);
module.exports = restaurants;
