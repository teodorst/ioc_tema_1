var $ = require('jquery');
var apiCalls = require('../api_calls.js');


var modal = (function () {

	var $overlay = $('<div id="overlay"></div>');
	var $modal = $('<div id="modal"></div>');
	var $content = $('<div id="content"></div>');
	var $close = $('<a id="close" href="#">close</a>');
	var $spinner = $('<div id="loader">Loading...<div>');

	$content.append($spinner);
	$modal.hide();
	$overlay.hide();
	$modal.append($content, $close);


	$(document).ready(function(){
		$('body').append($overlay, $modal);
	});


	var method = {};

	// Center the modal in the viewport
	method.center = function () {
		var top, left;
		top = Math.max($(window).height() - $modal.outerHeight(), 0) / 2;
		left = Math.max($(window).width() - $modal.outerWidth(), 0) / 2;

		$modal.css({
			top: top + $(window).scrollTop(), 
			left: left + $(window).scrollLeft()
		});
	};

	// Open the modal
	method.open = function (settings, sensorName) {
		console.log('Sensor:' + sensorName);
		setTimeout(function() {
			apiCalls[sensorName](settings.content);
		}, 1000);
		settings.content.append($spinner);
		$content.empty().append(settings.content);

		$modal.show();
		$modal.css({
			width: settings.width || 'auto', 
			height: settings.height || 'auto'
		})
		method.center();

		$overlay.show();
	
	};

	// Close the modal
	method.close = function () {
		$modal.hide();
	  	$overlay.hide();
	  	$content.empty();
	  	$content.append($spinner)
	  	// $(window).unbind('resize.modal');
	};

	$close.click(function(e){
		e.preventDefault();
		method.close();
	});

	$overlay.click(function(e) {
		method.close();
	})

	return method;
} ());
	


module.exports = modal;