Judges = new Mongo.Collection('judges');

Judges.helpers({

});

Judges.before.insert(function (userId, doc) {
  doc.createdAt = moment().toDate();
});