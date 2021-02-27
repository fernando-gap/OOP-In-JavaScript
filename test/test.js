const Employee = require('../employee');
const Client = require('../client');
const Vendor = require('../vendor');
const Car = require('../car');
const show = require('../relatory');

(() => {
	let car1 = new Car("BMW");
	let cli = new Client("Fernando", 18, 10000);
	cli.setCar(car1);
	let car2 = new Car("Audi");
	let ven = new Vendor("Augusto", 20, 2000, 88888);
	ven.setCar(car2);

	show(ven);
	console.log("\n");
	show(cli);
})();
