var express    = require('express')
	, load       = require('express-load')
	, bodyParser = require('body-parser');

module.exports = function(){

	var app = express();

	// configuração de amebiente
	app.set('port', 3000);
	app.set('view engine', 'ejs');
	app.set('views', './app/views');

	// middeware
	app.use(express.static('./public'));

	// Verbs Delet and PUT
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
	app.use(require('method-override')());

	load('models',{cwd:'app'})
    .then('controllers')
    .then('routes')
    .into(app);


	return app;
};

