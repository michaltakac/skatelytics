Contests = new Mongo.Collection('contests');

Contests.helpers({

});

Contests.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});
