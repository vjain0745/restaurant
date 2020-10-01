var mongoose = require('mongoose');
var fooditem = new mongoose.Schema({

  name: {
    type: String,
    required: true,
    trim: true
    },
    
    customization: [{
        type: mongoose.Schema.Types.ObjectId,
        ref : "customization"
     }]
});



var fooditems = mongoose.model('fooditems', fooditem);
module.exports = fooditems;
