Router.route('home', {
	path: '/limitCars',
	template: 'home',
	data: function() {
		var cars = [{
			carType: 'Chrysler 300',
			text: 'bla bla bla',
			img: 'img/RC_1.jpg'
		}, {
			carType: 'Toyota Camry',
			text: 'bla bla bla',
			img: 'img/RC_1.jpg'
		}, {
			carType: 'Mecedes G500',
			text: 'bla bla bla',
			img: 'img/RC_1.jpg'
		}];
		return {
			cars: cars.slice(0, this.params.limitCars)
		};
	}
});