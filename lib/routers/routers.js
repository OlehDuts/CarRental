Router.configure({
	layoutTemplate: 'layout',
	notFoundTemplate: 'notFound'
});

Router.route('home', {
	path: '/',
	template: 'home',
	data: {
		cars: function() {
		return Cars.find();
		}
	}
});

Router.route('lviv', {
	path: '/lviv',
	template: 'home',
	data: {
		cars: function() {
			return Cars.find({city: 'Lviv'});
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