const Employee = require('./employee');
const Car = require('./car');

function Client(name, age, requests) {
	this.name = name;
	this.age = age;
	this.requests = requests;
}


Client.prototype = Object.create(Employee.prototype);
Client.prototype.constructor = Client;


Client.prototype.getRequests = function() {
	return this.requests;
}

Client.prototype.calcGain = function() {
	return (this.requests/2) * 0.1;
}


module.exports = Client;
