var myApp = angular.module('myApp')

myApp.controller('BooksController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){

	$scope.getBooks = function(){
		$http.get('http://localhost:3000/books').then(function(response){
			$scope.books = response.data
		})
	}

	$scope.getBook = function(){
		var id = $routeParams.id
		$http.get('http://localhost:3000/books/' + id).then(function(response){
			$scope.book = response.data
		})
	}

	$scope.addBook = function(){
		$http.post('http://localhost:3000/books/', $scope.book).then(function(response){
			window.location.href = '#!/books'
		})
	}

	$scope.editBook = function(){
		var id = $routeParams.id
		$http.put('http://localhost:3000/books/' + id, $scope.book).then(function(response){
			window.location.href = "#!/books"	
		})
	}

	$scope.removeBook = function(id){
		$http.delete('http://localhost:3000/books/' + id).then(function(response){
			window.location.href = '#!/books'
		})
	}

}])
