contatooh.controller('ContactsController'
	, function($scope) {

		$scope.contacts = [
			{
				"_id": 1,
				"name": "Diego Collares",
				"email": "diego.collares@gmail.com"
			},
			{
				"_id": 2,
				"name": "Laís Collares",
				"email": "lais.collares@gmail.com"
			},

			{
				"_id": 3,
				"name": "Mariane Collares",
				"email": "mariane.collares@gmail.com"
			}

		];

		$scope.total = 0;
		$scope.increment = function(){
			$scope.total++;
		};
		$scope.filterName = "";

});