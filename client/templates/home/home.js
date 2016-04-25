Meteor.subscribe('Cars');
Meteor.subscribe('Cities');

Template.home.events({
    'submit': function(e,tmp){
        e.preventDefault();
        Session.set('cityFilter', $('#city').val());
    }
});

Template.home.helpers({
    cars: function(){
		if (Session.get('cityFilter') === '' || Session.get('cityFilter') === undefined) {
  		return Cars.find();
		} 
		else if (Cities.find({city: (Session.get('cityFilter'))})) {
      return Cars.find({city: Cities.findOne({city: (Session.get('cityFilter'))})._id});
      }
		}
});