const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var { Listings } = require('../models/addListing');

router.get('/', (req, res) => {
	Listings.find((err, doc) => {
		if (!err) {
			res.send(doc);
		} else {
			console.log(`Error in getting the employee` + JSON.stringify(err, undefined, 2));
		}
	});
});

router.post('/', (req, res) => {
	var list = new Listings({
		// _id: req.body._id,
		category: req.body.category,
		heading: req.body.heading,
		description: req.body.description,
		cost: req.body.cost,
		location: req.body.location,
		email: req.body.email,
		phone: req.body.phone
	});
	list.save((err, doc) => {
		if (!err) {
			res.send(doc);
		} else {
			console.log('error in saving new listing ' + JSON.stringify(err, undefined, 2));
		}
	});
});

module.exports = router; 
