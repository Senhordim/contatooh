contatooh.controller('ContactsController'
	, function($scope, $http) {

		$scope.contacts = [];

		$scope.filterName = "";

		$http.get('/contacts')
			.success(function(data){
				$scope.contacts = data;
			})
			.error(function(statusText) {
				console.log("Não foi possivel obter a lista de contatos");
				console.log(statusText);
			});

});