'use strict';
var app = angular.module('MyApp', ['ui.router','ngAnimate','ngSanitize','slick','mm.foundation']);

app.config(function($stateProvider, $urlRouterProvider) {
 	
 	$urlRouterProvider.otherwise("/home");
  	
	$stateProvider
		.state('home', {
			url: "/home",
			templateUrl:"views/home/home.html"
		})
		.state('about', {
			url: "/about",
			templateUrl:"views/about/about.html"
		})
		.state('gallery', {
			url: "/gallery",
			templateUrl:"views/gallery/gallery.html"
		})
		.state('gallery.artists', {
			url: "/artists",
			templateUrl:"views/gallery/artists/artists.html"
		})
		.state('gallery.artworks', {
			url: "/artworks",
			templateUrl:"views/gallery/artworks/artworks.html"
		})
		
		.state('featured', {
			url: "/featured",
			templateUrl:"views/featured/featured.html"
		})
		.state('contact', {
			url: "/contact",
			templateUrl:"views/contact/contact.html"
		})
		.state('upcoming-events', {
			url: "/upcoming-events",
			templateUrl:"views/events/upcoming.html"
		})
		.state('past-events', {
			url: "/past-events",
			templateUrl:"views/events/past.html"
		})

		.state('data-entry', {
			url: "/data-entry",
			templateUrl:"views/data/data-add.html"
		})

		.state('lookup', {
			url: "/lookup",
			templateUrl:"views/data/getArtInfo.html"
		})

		.state('cart', {
			url: "/cart",
			templateUrl:"views/payment/payment-cart.html"
		})
		.state('payment-result', {
			url: "/payment-result",
			templateUrl:"views/payment/payment-result.html"
		})

		.state('what', {
			url: "/what-we-do",
			templateUrl:"views/about/whatwedo.html"
		})
		
		.state('why', {
			url: "/why-we-do",
			templateUrl:"views/about/whywedo.html"
		})
		.state('get', {
			url: "/get-involved",
			templateUrl:"views/about/getinvolved.html"
		})
		.state('auction', {
			url: "/auction",
			templateUrl:"views/auction/auction.html"
		})
		.state('williamsauction', {
			url: "/williamsauction",
			templateUrl:"views/auction/williams.html"
		})
		.state('donate', {
			url: "/donate",
			templateUrl:"views/donate/donate.html"
		})
		.state('handprints', {
			url: "/handprints",
			templateUrl:"views/handprints/handprints.html"
		})
		.state('connect', {
			url: "/connect",
			templateUrl:"views/contact/connect.html"
		})

		.state('partners', {
			url: "/partners",
			templateUrl:"views/partners/partners.html"
		})
		.state('application', {
			url: "/application",
			templateUrl:"views/partners/application.html"
		})
		
		
});	

app.run(function($rootScope) {
    $rootScope.$on('$viewContentLoaded', function () {
        $(document).foundation();
    });
});


