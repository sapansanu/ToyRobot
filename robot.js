var robot = document.getElementById('robot');
var buttonLeft = document.getElementById('left');
var buttonRight = document.getElementById('right');
var buttonMove = document.getElementById('move');
var buttonReport = document.getElementById('report');
var output = document.getElementById('output');
var direction;
var top1 = 0, left = 0;


function intialPosition() {
	top1 = 25; left = 25;
	direction = "EAST";
	robot.style.top = top1+"px";
	robot.style.left = left+"px";
	robot.innerHTML = direction;
}
function updateOutput() {
	output.innerHTML = Math.floor(left%100)+","+Math.floor(top1%100)+","+direction;
}
document.addEventListener('DOMContentLoaded', function(e) {
	intialPosition();
	document.addEventListener('click', function() {
		updateOutput();
	});
	buttonMove.addEventListener('click', function() {
		if(direction === "EAST") {
			if(left < 425) {
				left += 100;
				console.log(left);
				robot.style.left = left+"px";
			} 
			else {
				alert("Please change the direction");
			}
		}
		else if(direction === "SOUTH") {
			if(top1 < 425) {
				top1 += 100;
				console.log(top1);
				robot.style.top = top1+"px";
			}
		}
		else if(direction === "WEST") {
			if(left > 100) {
				left -= 100;
				console.log(left);
				robot.style.left = left+"px";
			}
		}
		else if(direction === "NORTH") {
			if(top1 > 100) {
				top1 -= 100;
				console.log(top1);
				robot.style.top = top1+"px";
			}
		}
	});

	buttonRight.addEventListener('click', function() {
		if(direction === "EAST") direction = "SOUTH";
		else if(direction === "SOUTH") direction = "WEST";
		else if(direction === "WEST") direction = "NORTH";
		else if(direction === "NORTH") direction = "EAST";
		robot.innerHTML = direction;
	});

	buttonLeft.addEventListener('click', function() {
		if(direction === "EAST") direction = "NORTH";
		else if(direction === "NORTH") direction = "WEST";
		else if(direction === "WEST") direction = "SOUTH";
		else if(direction === "SOUTH") direction = "EAST";
		robot.innerHTML = direction;
	});

	buttonReport.addEventListener('click', function() {
		output.classList.toggle('hidden');
	});


})