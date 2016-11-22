var $ = require('jquery');
var houseImage = require('../images/house_plans.png');

var radius = 300
var div = 360 / 5;

var draw_circles = function(containerId, sensors, modal) {
    console.log(modal)
    var container = $(containerId);
    var offsetToContainer = 150;
    var offsetToChildCenter = 40;
    var totalOffset = offsetToContainer - offsetToChildCenter;
    var sensorsName = Object.keys(sensors);

    for (var sensorIndex in sensorsName)
    {
        var circlediv = $("<div></div>");
        var y = Math.sin((div * sensorIndex) * (Math.PI / 180)) * radius;
        var x = Math.cos((div * sensorIndex) * (Math.PI / 180)) * radius;
        
        circlediv.addClass('circle-div');
        circlediv.addClass(sensors[sensorsName[sensorIndex]].class);
        circlediv.css({
            "position":"absolute", 
            "top": (y + totalOffset).toString() + "px",
            "left": (x + totalOffset).toString() + "px"
        });

        container.append(circlediv);

        (function(sensorName) {
            circlediv.on('click', function() {
                modal.open({content: $('<div></div>')}, sensorName);
            });
        })(sensorsName[sensorIndex]);
        
    }
}

module.exports = draw_circles;