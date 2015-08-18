function getSkaters() {
  return Contests.findOne({}).registeredSkaters;
}

function findSkater(id) {
  return _.findWhere(getSkaters(), {_id: id});
}

Template.contest.rendered = function() {

  Session.set("judge", false);
  Session.setDefault("slider", 40);
  var skaters = getSkaters();
  Tracker.autorun(function(c) { 
    if (getSkaters() && Session.get("judge") === true)
      console.log("YES!");
    c.stop();
    console.log("Oh no!");
  });
  
};

Template.contest.helpers({
  message: function() {
    var contest = Contests.findOne({});
    var message;

    if (contest.status === 'live') {
      message = "To see real-time scoring in action, open this page on different browsers, PCs or devices, change scores and watch how rankings are updated everywhere.";
    } else {
      message = "";
    }
    return message;
  },
  contest: function() {
    return Contests.findOne({});
  },
  skaters: function() {
    var skaters = Contests.findOne({}).registeredSkaters;
    var array;

    if (skaters[0].score === null) {
      array = _.chain(skaters).sortBy("placement").map(function(k, i) { 
        return {
          _id: k._id,
          place: i+1,
          name: k.name,
          score: k.score
        }
      }).value();
    } else { 
      array = _.chain(skaters).sortBy("score").reverse().map(function(k, i) { 
        return {
          _id: k._id,
          place: i+1,
          name: k.name,
          score: k.score
        }
      }).value();
    }

    return array;
  },
  status: function() {
    var contest = Contests.findOne({});
    if (contest.status === 'live') {
      return "Live";
    } else {
      return false;
    }
  },
  judging: function() {
    return Session.get("judge");
  },
  slider: function (id) {
    return $(".slider-"+id).val();
  },

});

Template.contest.events({
  'click #judge-button': function(e) {
    e.preventDefault();
    Session.set('judge', true);
  },
  'click #back-button': function(e) {
    e.preventDefault();
    Session.set('judge', false);
  },
  'change #slider': function(e) {
    e.preventDefault();
    console.log($(e.currentTarget).val());
    console.log($(e.currentTarget).attr("data-skater-id"));
  }
});

Template.judgeWindow.rendered = function() {

  Session.set("judge", true);
  Session.setDefault("slider", 40);
  _.each(getSkaters(), function(skater) {
    this.$('.slider-'+skater._id).noUiSlider({
      start: 0,
      connect: "lower",
      step: 0,
      format: wNumb({
        decimals: 2,
      }),
      range: {
        'min': 0,
        'max': 100
      }
    }).on('slide', function (ev, val) {
      // set real values on 'slide' event
      Session.set('slider-'+skater._id, val);
    });
  });
  
  
};

Template.judgeWindow.helpers({
  skaters: function() {
    return getSkaters();
  },
  slider: function (id) {
    return Session.get('slider-'+id);
  },
  getSkaterScore: function(id) {
    return findSkater(id).score;
  }
});

Template.judgeWindow.events({
  'click #add-score': function(e) {
    e.preventDefault();
    var contestId = Router.current().params._id;
    var skaterId = $(e.currentTarget).attr('data-id');
    var oldScore = parseFloat(findSkater(skaterId).score);
    var newScore = parseFloat($(e.currentTarget).attr('data-score'));
    
    Meteor.call('updateScore', contestId, skaterId, newScore, oldScore, function(error) {
      if (error)
        console.log(error);
    });
  }
});