Template.contests.rendered = function() {

};

Template.contests.helpers({
	contests: function() {
		return Contests.find({}, {sort: {startDate: -1}}).fetch();
	}
});

Template.contests.events({

});