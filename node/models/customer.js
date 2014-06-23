var mongoose = require('mongoose');

var Schema = mongoose.Schema;


var customerSchema = new mongoose.Schema({
	nameLast:   String,
	nameFirst:  String,
	email: String,
	search: {
		nameFirstSearch: String,
		nameLastSearch: String,
		citySearch: String,
	},
	address: {
		street: String,
		city: String,
		zip: String
	},
	billing: {
		street: String,
		city: String,
		zip: String
	},
	equipmentCounter: Number,
	pmCounter: Number,
	equipment: [],
	pm: []
	
});

customerSchema.statics.add = function(nameLast, nameFirst, email, street, city, zip, res) {
	customer.create  ({
		nameLast: nameLast,
		nameFirst: nameFirst,
		email: email,
		search: {
			nameFirstSearch: nameFirst.toUpperCase(),
			nameLastSearch: nameLast.toUpperCase(),
			citySearch: city.toUpperCase(),
		},
		address: {
			street: street,
			city: city,
			zip: zip
		},
		equipmentCounter: 0,
		pmCounter: 0,
		equipment: [],
		pm: []
		
	}, function(err, cust){
		if(err) throw err;
		res.json({'success':true});

		// if (err) return done(err);
		
	});
}

var customer = mongoose.model('customer', customerSchema, 'customers');
module.exports = customer;