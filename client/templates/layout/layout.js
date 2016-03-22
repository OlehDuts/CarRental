Template.layout.events({
	'click #singInBtn': function (e, tmpl) {
		e.preventDefault();
		Router.go('singIn');
	}
});