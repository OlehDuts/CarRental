Router.configure({
	layoutTemplate: 'layout',
	notFoundTemplate: 'notFound'
});

Router.route('home', {
	path: '/',
	template: 'home',
	data: {
		cars: [{
			carType: 'Chrysler 300',
			text: 'bla bla bla bla bla bla bla bla bla',
			img: 'img/RC_1.jpg'
		}, {
			carType: 'Toyota Camry',
			text: 'bla bla bla',
			img: 'img/RC_2.jpg'
		}, {
			carType: 'Mecedes G500',
			text: 'bla bla bla',
			img: 'img/RC_3.png'
		}]
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



