Router.configure({
	layoutTemplate: 'layout',
	notFoundTemplate: 'notFound'
});

Router.route('home', {
	path: '/',
	template: 'home',
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
Router.route('usersPage', {
	path: '/usersPage',
	template: 'usersPage',
});