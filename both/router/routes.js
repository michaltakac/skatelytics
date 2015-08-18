Router.route('/', {
  name: 'home'
});

Router.route('/dashboard', {
  name: 'dashboard',
  controller: 'DashboardController'
});

Router.route('/contests', {
  name: 'contests',
  controller: 'ContestsController'
});

Router.route('/contests/:_id/:slug', {
  name: 'contest',
  waitOn: function() {
  	var subs = [
  		Meteor.subscribe('contest', this.params._id, this.params.slug),
  		Meteor.subscribe('skatersInContest', this.params._id)
  	]
    return subs;
  }
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard']
});
