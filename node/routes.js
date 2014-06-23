var mod = require('../node/modules');
// var Auth = require('./auth');


module.exports = function (app) {

	//responds with index.html
	app.get("/", function(req, res) {
		console.log('index');
		// res.redirect("/index.html");

	});

	app.post('/customer', mod.newCustomer);
	// app.post('/customer/:nameFirst/:nameLast/:email/:street/:city/:zip', mod.newCustomer);
	// app.post('/newcustomer', mod.newCustomer);

	app.get('/customer', mod.returnCustomers);
	
	app.get('/customerid/:id', mod.customerId);

	app.post('/equipment/:customerid/:type/:make/:model/:serial/:install', mod.newEquipment);

	app.post('/addpm', mod.addpm);
	app.get('/pm/:customerid/:pmid', mod.findPM);

	app.post('/customersearch', mod.customersearch);

}

