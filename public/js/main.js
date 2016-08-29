var contatooh = angular.module('contatooh', ['ngRoute'])
	.config(function($routeProvider){


		$routeProvider
			.when('/contacts', {
				templateUrl: 'partials/contacts.html'
			, controller: 'ContactsController'
			})
			.when('/contact/:contactId', {
			  templateUrl: 'partials/contact.html'
			, controller:  'ContactController'
			})
			.otherwise({
				redirectTo: '/contacts'
			});

			;

	});

