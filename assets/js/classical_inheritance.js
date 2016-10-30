function inherits(ctor, superCtor) {
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
}

var Person = function (name) {
    this.personName = name;
};

Person.prototype.sayName =  function () {
    console.log('My personName is ' + this.personName);
};

Person.prototype.shoutName = function () {
    console.log('My personName is ' + this.personName + '!');
};

var john = new Person('John');
var bobby = new Person('Bobby');

john.sayName();
bobby.sayName();

var Friend = function(){

};

inherits(Friend, Person);

var lisa = new Friend('Lisa');

// this does not work: personName is undefined.
lisa.shoutName();