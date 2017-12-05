var myApp = angular.module('myApp', ['ngRoute'])

myApp.config(function($routeProvider){
	$routeProvider
		.when('/', {
			controller: 'BooksController',
			templateUrl: 'views/books.html'
		})
		.when('/books', {
			controller: 'BooksController',
			templateUrl: 'views/books.html'
		})
		.when('/books/details/:id', {
			controller: 'BooksController',
			templateUrl: 'views/book-details.html'
		})
		.when('/books/add', {
			controller: 'BooksController',
			templateUrl: 'view/add-book.html'
		})
		.when('/books/edit/:id', {
			controller: 'BooksController',
			templateUrl: 'views/edit-book.html'
		})
		.otherwise({
			redirectTo: '/'
		})
})
