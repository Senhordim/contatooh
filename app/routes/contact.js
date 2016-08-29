module.exports = function(app){
	var controller = app.controllers.contact;

	// Rest
	app.get('/contacts', controller.listContacts);
	app.get('/contacts/:id', controller.getContact);

}