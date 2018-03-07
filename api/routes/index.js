var express = require('express');
var router = express.Router();

var ctrlHotels = require('../controllers/hotels.controllers.js');

router
	.route('/hotels')
	.get(ctrlHotels.hotelsGetAll);

router
	.route('/hotels/:hotelId')
	.get(ctrlHotels.hotelsGetOne);
	/*
	.get(function(req, res){
		console.log("GET the json");
		res
	  		.status(200)
	  		.json( {"jsonData" : true} );
	});
	*/
	/*
	.post(function(req, res){
		console.log("POST the json route");
		res
	  		.status(200)
	  		.json( {"jsonData" : "POST received"} );
	});
	*/
router
	.route('/hotels/new')
	.post(ctrlHotels.hotelsAddOne);

module.exports = router;
