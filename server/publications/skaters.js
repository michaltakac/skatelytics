Meteor.publishComposite("skaters", function() {
  return {
    find: function() {
      return Skaters.find({});
    }
    // ,
    // children: [
    //   {
    //     find: function(item) {
    //       return [];
    //     }
    //   }
    // ]
  }
});

Meteor.publishComposite("skatersInContest", function(contestId) {
  return {
    find: function() {
      return Skaters.find({"skatersRegistered": contestId});
    }
  }
});