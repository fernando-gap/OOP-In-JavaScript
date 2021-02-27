function Car(model) {
	this.model = model;
}

Car.prototype = {
	constructor: Car,
	setModel: function(model) {
		this.model = model;
	},
	getModel: function() {
		return this.model;
	}
}

module.exports = Car;
