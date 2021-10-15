function shape(name, sides, sideLength){
	const obj = {};
	obj.name = name;
	obj.sides = sides;
	obj.sideLength = sideLength;
	return obj;
}
const square = new shape("square");
square.name;
square.sides;
square.sideLength;
console.log(shape("square", 4, 5))

const triangle = shape("triangle");
triangle.name;
triangle.sides;
triangle.sideLength;
console.log(shape("square", 3, 3))
/*
Shape.prototype.calcPerimeter = function(){
	console.log(this.sides * this.sideLength)
}
var square = new Shape("square", 4, 5);
square.calcPerimeter();
var triangle = new Shape("triangle", 3, 3);
triangle.calcPerimeter
*/
