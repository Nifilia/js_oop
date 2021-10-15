function shape(name, sides, sideLength){
	const obj = {};
	obj.name = name;
	obj.sides = sides;
	obj.sideLength = sideLength;
	return obj;
}
const square = new shape("square", 4, 5);
console.log(square);

const triangle = new shape("triangle", 3, 3);
console.log(triangle);
/*
Shape.prototype.calcPerimeter = function(){
	console.log(this.sides * this.sideLength)
}
var square = new Shape("square", 4, 5);
square.calcPerimeter();
var triangle = new Shape("triangle", 3, 3);
triangle.calcPerimeter
*/
