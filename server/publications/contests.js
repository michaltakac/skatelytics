Meteor.publishComposite("contests", function() {
  return {
    find: function() {
      return Contests.find({});
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

Meteor.publishComposite("contest", function(contestId, slug) {
  return {
    find: function() {
      return Contests.find({"_id": contestId, "slug": slug});
    }
  }
});