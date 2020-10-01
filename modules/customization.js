var mongoose = require('mongoose');
var custom = new mongoose.Schema({

  name: {
    type: String,
    required: true,
    trim: true
    },

    food: {
        type: String,
        required: true,
        trim: true
        }
    
});



var customization = mongoose.model('customization', custom);
module.exports = customization;
