function Point() {
    this.xPos = 0;
    this.yPos = 0;
}

Object.defineProperty(Point.prototype, 'pointPos', {
    get: function () {
        return "X: " + this.xPos + "; Y:" + this.yPos;
    },
    set: function (thePoint) {
        var parts = thePoint.toString().split(', ');
        this.xPos = parts[0] || '';
        this.yPos = parts[1] || '';
    }
});

var aPoint = new Point();
aPoint.pointPos = "100, 200";

console.log('aPoint.pointPos: ' + aPoint.pointPos);

////////////////////////////////////////////////////////////////

var Point1 = function () {
    this.xPos = 0;
    this.yPos = 0;
};

Point1.prototype = {
    set pointPos(thePoint) {
        var parts = thePoint.toString().split(', ');
        this.xPos = parts[0] || '';
        this.yPos = parts[1] || '';
    },
    get pointPos(){
        return "X: " + this.xPos + "; Y:" + this.yPos;
    }
};

var aPoint1 = new Point1();
aPoint1.pointPos = "400, 500";

console.log('aPoint1.pointPos: ' + aPoint1.pointPos);

////////////////////////////////////////////////////////////////

/**
 *
 * @param radius
 * @constructor
 */

var Circle = function (radius) {
    this._radius = radius;
};

Circle.prototype = {
    set radius(radius) {
        this._radius = radius;
    },
    get radius() {
        return this._radius;
    },
    get area() {
        return Math.PI * this._radius ^ 2;
    }
};

var circ = new Circle(15);

console.log('circ.radius: ' + circ.radius);
console.log('circ.area: ' + circ.area);

circ.radius = 10;

console.log('circ.radius: ' + circ.radius);
console.log('circ.area: ' + circ.area);
