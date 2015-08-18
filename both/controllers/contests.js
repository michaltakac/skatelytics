ContestsController = AppController.extend({
  waitOn: function() {
    return this.subscribe('contests');
  },
  data: {
    items: Contests.find({})
  },
  onAfterAction: function () {
    Meta.setTitle('Contests');
  }
});

ContestsController.events({
  'click [data-action=doSomething]': function (event, template) {
    event.preventDefault();
  }
});
