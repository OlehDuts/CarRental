Meteor.publish('Cars', function() {
	return Cars.find();
});
Meteor.publish('Cities', function() {
	return Cities.find();
});