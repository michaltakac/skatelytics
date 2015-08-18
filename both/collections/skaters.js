Skaters = new Mongo.Collection('skaters');

Skaters.helpers({

});

Skaters.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});