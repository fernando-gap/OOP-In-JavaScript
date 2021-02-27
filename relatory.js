const Employee = require('./employee');
const Client = require('./client');
const Vendor = require('./vendor');
const Car = require('./car');

function relatory(employee) {
	console.log("Name: "+ employee.getName());
	console.log("Age: "+ employee.getAge());

	if (employee instanceof Client) {
		console.log("Requests: "+ employee.getRequests());
		console.log("Gain: "+ employee.calcGain());
		console.log("car: "+ employee.getCar().getModel());
	}
	
	if (employee instanceof Vendor) {
		console.log("Stock: "+ employee.getStock());
		console.log("Sent: "+ employee.getSent());
		console.log("Gain: "+ employee.calcGain());
		console.log("car: "+ employee.getCar().getModel());
	}
}

module.exports = relatory;
