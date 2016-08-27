module.exports = function(){
	var controller = {};
	controller.index = function(req, res){
		// Retorna a página index
		res.render('index', {name: 'Express'})
	}
	return controller;
}