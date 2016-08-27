var express = require('express');
var load    = require('express-load');

module.exports = function(){

	var app = express();

	// configuração de amebiente
	app.set('port', 3000);
	app.set('view engine', 'ejs');
	app.set('views', './app/views');

	// middeware
	app.use(express.static('./public'));

	
	load('models', {cwd: 'app'})
		.then('controllers')
		.then('routes')
		.into('app');


	return app;
};

