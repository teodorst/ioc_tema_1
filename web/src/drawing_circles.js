var $ = require('jquery');

var radius = 300
var div = 360 / 6;

var draw_circles = function(containerId) {
	console.log(containerId);
	var container = $(containerId);
	
	var offsetToContainer = parseInt(container.innerWidth() / 2);  //assumes parent is square
    var offsetToChildCenter = 40;
    var totalOffset = offsetToContainer - offsetToChildCenter;
	for (var i = 1; i <= 6; ++i)
  	{
  		var circlediv = $("<div></div>");
  		var y = Math.sin((div * i) * (Math.PI / 180)) * radius;
        var x = Math.cos((div * i) * (Math.PI / 180)) * radius;
  		circlediv.addClass('circle-div');
  		circlediv.css({
  			"position":"absolute", 
  			"top": (y + totalOffset).toString() + "px",
  			"left": (x + totalOffset).toString() + "px"
  		});
  		container.append(circlediv);
    }
}

module.exports = draw_circles;
