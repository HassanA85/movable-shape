// give movableShape a nice, descriptive name to work with here
// (i.e., replace the variable name myShape with something more descriptive (e.g., myCar, myRocket).)
var myShape = movableShape;

// Redefine drawShape() by putting your moving shape in here
// (Basically, you can copy and paste your code from last time, although you may wish to refactor it so that it's more readable.)
// That said, you may wish to try putting your unrefactored, raw drawing code from week 1 in here
myShape.drawShape = function () {
	// your code goes here
	//car
	smooth();
	fill('black');

	//tires
	ellipse(470, 785, 25, 25);
	ellipse(585, 785, 25, 25);
	fill(0, 153, 76);

	//car body
	rect(450, 725, 165, 50);
	fill(51, 153, 255);
	noStroke();
	triangle(450, 750, 450, 725, 470, 725);

	//windsheild
	fill('black');
	triangle(470, 725, 490, 725, 495, 710);

	//car doors, latches
	stroke('black');
	strokeWeight(2);
	line(490, 725, 490, 775);
	line(530, 725, 530, 775);
	line(570, 725, 570, 775);
	line(520, 747, 530, 747);
	line(560, 747, 570, 747);
};

// You will also need to do some work to set the speed of the shape. How do you want it to move? What do you need to change to get it to move?

setup = function() {
	createCanvas(600, 600);
};

draw = function() {
  background(51, 153, 255, 50); // refresh the background
  myShape.display(); // display myShape
  myShape.update(); // and then update it
};
