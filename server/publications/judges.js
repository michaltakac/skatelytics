Meteor.publishComposite("judges", function() {
  return {
    find: function() {
      return Judges.find({});
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