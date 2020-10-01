var mongoose = require('mongoose');
var cuisinede = new mongoose.Schema({

    name:{
        type: String,
        required: true,
        trim: true
    
    },
    fooditems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref : "fooditems"
     }]
});



var cuisines = mongoose.model('cuisines', cuisinede);
module.exports = cuisines;
