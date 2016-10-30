"use strict";

function Rectangle(w,h){
    this.width = w;
    this.height = h;
}
Rectangle.prototype.area = function(){return this.width * this.height;};

function PositionedRectangle(x,y,w,h){
    this.superclass(w,h);
    this.x = x;
    this.y = y;
}
PositionedRectangle.prototype = new Rectangle();
PositionedRectangle.prototype.superclass = Rectangle;

delete PositionedRectangle.prototype.width;
delete PositionedRectangle.prototype.height;

PositionedRectangle.prototype.constructor = PositionedRectangle;

PositionedRectangle.prototype.contains = function(x,y){
    return ( x > this.x
    && x < this.x + this.width
    && y > this.y
    && y < this.y + this.height);
};

var r = new PositionedRectangle(2,2,2,2);
console.log(r.contains(3,3));
console.log(r.area());
console.log(r.x + ", " + r.y + ", " + r.width + ", " + r.height);
console.log(r instanceof PositionedRectangle
    && r instanceof Rectangle
    && r instanceof Object);