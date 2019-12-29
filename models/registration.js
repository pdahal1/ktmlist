const mongoose = require('mongoose');
var Registration = mongoose.model('registrations', {
    _id:{ type: String, require},
    firstName: {type: String},
    lastName: {type: String},
    phone: {type: String},
    password: {type: String},

});


module.exports = {Registration};


