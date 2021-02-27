const Employee = require('./employee');
const Client = require('./client');
const Car = require('./car');

function Vendor(name, age, sent, stock) {
	Employee.call(this, name, age);
	this.sent = sent;
	this.stock = stock;
}

Vendor.prototype = Object.create(Employee.prototype);
Vendor.prototype.constructor = Vendor;

Vendor.prototype.calcGain = function() {
	return (this.sent/this.stock) * 0.2;
}

Vendor.prototype.setSent = function(sent) {
	this.sent = sent;
}

Vendor.prototype.getSent = function() {
	return this.sent;
}

Vendor.prototype.setStock = function(stock) {
	this.stock = stock;
}

Vendor.prototype.getStock = function() {
	return this.stock;
}


module.exports = Vendor;
