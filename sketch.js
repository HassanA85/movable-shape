// give movableShape a nice, descriptive name to work with here
// (i.e., replace the variable name myShape with something more descriptive (e.g., myCar, myRocket).)
var rocketShip = movableShape;

// Redefine drawShape() by putting your moving shape in here
// (Basically, you can copy and paste your code from last time, although you may wish to refactor it so that it's more readable.)
// That said, you may wish to try putting your unrefactored, raw drawing code from week 1 in here
rocketShip.drawShape = function () {
	//rocket
	stroke(50);
	fill('red');
	rect(300, 150, 50, 100);
	triangle(290, 150, 325, 125, 360, 150);
	triangle(290, 230, 301, 210, 301, 230);	//left tail fin
	triangle(360, 230, 351, 210, 351, 230); //right tail fin

	//flame
	noStroke();
	fill('orange');
	strokeCap(SQUARE);
	noSmooth();
	ellipse(325, 290, 30, 50);
	// your code goes here
};

// You will also need to do some work to set the speed of the shape. How do you want it to move? What do you need to change to get it to move?

setup = function() {
	createCanvas(600, 600);
};

draw = function() {
  background(100); // refresh the background
  rocketShip.display(); // display myShape
  rocketShip.update(); // and then update it
};
