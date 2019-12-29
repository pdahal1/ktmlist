const mongoose = require('mongoose');
var Listings = mongoose.model('listings', {
	// _id: { type: String },
	category: { type: String },
	heading: { type: String },
	description: { type: String },
	cost: { type: String },
	location: { type: String },
	email: { type: String },
	phone: { type: String }
});
module.exports = { Listings};
