const Car = require('./car');

function Employee(name, age) {
	this.name = name;
	this.age = age;
}

Employee.prototype = {
	constructor: Employee,
	setCar: function(auto) {
		if (auto instanceof Car) {
			this.car = auto;
		}
		else {
			return new TypeError("Car is undefined");
		}
	},
	getCar: function() {
		return this.car;
	},
	getName: function() {
		return this.name;
	},
	getAge: function() {
		return this.age;
	}
}

module.exports = Employee;
