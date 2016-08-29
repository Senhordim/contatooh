var contacts = [
	{id: 1, name: 'Diego Collares', email: 'diego.collares@gmail.com'},
	{id: 2, name: 'Mariane Collares', email: 'mariane.collares@gmail.com'},
	{id: 3, name: 'Laís Collares', email: 'Laís.collares@gmail.com'},
];

module.exports = function(){
	var controller = {};

	controller.listContacts = function(req, res){
		res.json(contacts);
	};

	controller.getContact = function(req, res){
		var idContact	= req.params.id;
		console.log(req.params.id);
		var contact = contacts.filter(function(contact){
			return contact.id == idContact;
		})[0];

		contact ?	
			res.json(contact) :
			res.status(404).send('Contato não encontrado');
	}

	return controller

};