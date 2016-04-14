Template.usersPage.helpers({
	cars: function() {
		return Cars.find({userName: '111'});
	}
	//usercars: function() {
		//	user = Meteor.users.find({_id: Meteor.userId()});
		//	return [{car: Meteor.userId()}];
		//}
});
