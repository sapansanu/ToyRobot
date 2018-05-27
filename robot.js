var robot = document.getElementById('robot');
var buttonLeftPosition = document.getElementById('left');
var buttonRight = document.getElementById('right');
var buttonMove = document.getElementById('move');
var buttonReport = document.getElementById('report');
var output = document.getElementById('output');
var direction, errorText;
var topPosition = 0, leftPosition = 0;


function intialPosition() {
	topPosition = 100; leftPosition = 25;
	direction = "EAST";
	robot.style.top = topPosition+"px";
	robot.style.left = leftPosition+"px";
	robot.innerHTML = direction;
}
function updateOutput() {
	output.innerHTML = Math.floor(leftPosition/100)+", "+Math.floor((topPosition-1)/100)+", "+direction;
}
function outputError() {
	output.innerHTML = "Please change direction...";
}
document.addEventListener('DOMContentLoaded', function(e) {
	intialPosition();
	document.addEventListener('click', function() {
		updateOutput();
	});
	buttonMove.addEventListener('click', function(e) {
		if(direction === "EAST") {
			if(leftPosition < 425) {
				leftPosition += 100;
				robot.style.left = leftPosition+"px";
			} 
			else {
				outputError();
				e.stopPropagation();
			}
		}
		else if(direction === "SOUTH") {
			if(topPosition < 425) {
				topPosition += 100;
				robot.style.top = topPosition+"px";
			}
			else {
				outputError();
				e.stopPropagation();
			}
		}
		else if(direction === "WEST") {
			if(leftPosition > 100) {
				leftPosition -= 100;
				robot.style.left = leftPosition+"px";
			}
			else {
				outputError();
				e.stopPropagation();
			}
		}
		else if(direction === "NORTH") {
			if(topPosition > 100) {
				topPosition -= 100;
				robot.style.top = topPosition+"px";
			}
			else {
				outputError();
				e.stopPropagation();
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

	buttonLeftPosition.addEventListener('click', function() {
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