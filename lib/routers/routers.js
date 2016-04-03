Router.configure({
	layoutTemplate: 'layout',
	notFoundTemplate: 'notFound'
});

Router.route('home', {
	path: '/',
	template: 'home',
	data: {
		/*cars: [{
			carType: 'Chrysler 300',
			text: 'Chrysler 300 Chrysler 300 Chrysler 300',
			img: 'img/RC_1.jpg'
		}, {
			carType: 'Toyota Camry',
			text: 'bla bla bla',
			img: 'img/RC_2.jpg'
		}, {
			carType: 'Mecedes G500',
			text: 'Mecedes G500 Mecedes G500 Mecedes G500',
			img: 'img/RC_3.png'
		},
		{
			carType: 'Mecedes new',
			text: 'Mecedes new Mecedes new Mecedes new',
			img: 'img/RC_1.jpg'
		}]*/
		cars: function() {
		return Cars.find();
		}
	}
});

Router.route('aboutUs', {
	path: '/aboutUs',
	template: 'aboutUs'
});

Router.route('singIn', {
	path: '/singIn',
	template: 'singIn'
});
Router.route('rentPage', {
	path: '/rentPage',
	template: 'rentPage'
});