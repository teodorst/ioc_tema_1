var $ = require('jquery');

var BASE_URL = 'http://private-a006d-tema1ioc.apiary-mock.com/sensors/';
var WEATHER_API = 'http://api.openweathermap.org/data/2.5/weather?q=';


var getCall = function(url, onSuccess, onFail) {
	$.get(url, onSuccess).fail(onFail);
}

var api_calls = {

	'temperature': function(content) {
		console.log('getting temperature for home');
		getCall(
			BASE_URL + 'temperature', 
			function(homeData) {
				getCall(
					WEATHER_API + 'Bucharest&APPID=747a6b5823838f7051dfdd17f9e77a95&units=metric',
					function(outsideData) {
						console.log(outsideData);
						content.html('<p><div>Home: ' + homeData.temperature + ' &deg;C<div><div>Outside: ' + outsideData.main.temp + ' &deg;C<div><p>');
					},
					function(err) {
						content.html('<p><div>Outside: No informations available<div><p>');
					}
				);
			},
			function(err) {
				content.html('<p><div>No informations available<div><p>');
			}
		);
	},

	'water': function(content) {
		console.log('getting water for home');
		getCall(
			BASE_URL + 'water', 
			function(data) {
				console.log(data);
				content.html('<p><div>Hot water: ' + data.hot_water + ' m<sup>3</sup><div><div>Cold water: ' + data.cold_water + 
					' m<sup>3</sup><div><p>');
			},
			function(err) {
				content.html('<p><div>No informations available<div><p>');
			}
		);
	},

	'electricity': function(content) {
		console.log('getting electricity for home');
		getCall(
			BASE_URL + 'electricity', 
			function(data) {
				console.log(data);
				content.html('<p><div>Electricity consumption:' + data.electricity + '<div><p>');
			},
			function(err) {
				content.html('<p><div>No informations available<div><p>');
			}
		);
	},

	'gas': function(content) {
		console.log('getting gas for home');
		getCall(
			BASE_URL + 'gas', 
			function(data) {
				console.log(data);
				content.html('<p><div>Gas consumption:' + data.gas + '<div><p>');
			},
			function(err) {
				content.html('<p><div>No informations available<div><p>');
			}
		);
	},

	'carbon': function(content) {
		console.log('getting gas for home');
		getCall(
			BASE_URL + 'carbon', 
			function(data) {
				console.log(data);
				content.html('<p><div>Carbon emanation:' + data.carbon + '<div><p>');
			},
			function(err) {
				content.html('<p><div>No informations available<div><p>');
			}
		);
	}
}

module.exports = api_calls;