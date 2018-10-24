var mongoose = require('mongoose');

//setup schema
var userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: false
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});


var user = module.exports = mongoose.model('user', userSchema);


module.exports.get = function(callback, limit){
    user.find(callback).limit(limit);
}