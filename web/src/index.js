require('./circles_sensors/circles_styles.css');
require('./css/background_style.css');
require('./info_modal/info_modal.css');

var $ = require('jquery');

var api_calls = require('./api_calls.js');
var draw_circles  = require('./circles_sensors/drawing_circles.js');
var modal = require('./info_modal/info_modal.js');
var apiCalls = require('./api_calls.js');

console.log('There be dragons')
console.log('Refresh')
console.log(api_calls);


$(function () {

	var sensors = {
		temperature: {
			inside: 0,
			outside: 0,
			class: 'temperature-circle'
		}, 
		water: {
			hot: 0,
			cold: 0,
			class: 'water-circle'
		},
		electricity: {
			consumption: 0,
			class: 'electricity-circle'
		},
		gas: {
			consumption: 0,
			class: 'gas-circle'
		},
		carbon: {
			estimation: 0,
			class: 'carbon-circle'
		}		
	}

	draw_circles('#container-div', sensors, modal);
	

})

