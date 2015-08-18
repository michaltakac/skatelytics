Meteor.startup(function() {

  var contests = [
    {
      title: "Testing contest",
      slug: "testing-contest",
      thumb: "/images/contest.jpg",
      description: "Testing contest made for demo purpose - showcasing real-time scoring. You can try to be a judge, just check it out! Scores in this event are FICTIONAL!",
      location: "Somewhere in the world",
      organizedBy: "Fictional brand",
      prizeMoney: 100000,
      startDate: moment(new Date()).format("YYYY-MM-DD"),
      endDate: moment(new Date()).format("YYYY-MM-DD"),
      registeredSkaters: [
        {
          _id: Random.id(),
          name: "Carlos Ribeiro",
          score: 90.00,
          placement: 1
        },
        {
          _id: Random.id(),
          name: "Louie Lopez",
          score: 85.00,
          placement: 2
        },
        {
          _id: Random.id(),
          name: "Luan Oliveira",
          score: 82.00,
          placement: 3
        },
        {
          _id: Random.id(),
          name: "Felipe Gustavo",
          score: 80.00,
          placement: 4
        },
        {
          _id: Random.id(),
          name: "Tommy Fynn",
          score: 77.00,
          placement: 5
        },
        {
          _id: Random.id(),
          name: "Matt Berger",
          score: 75.00,
          placement: 6
        }
      ],
      videoUrl: "https://www.youtube.com/embed/FhaFwjs23DM",
      likes: 9,
      shares: 9,
      comments: 9,
      attendents: 9001,
      status: "live",
      createdAt: moment(new Date()).format("YYYY-MM-DD")
    },
    {
      title: "The Van Doren Invitational 2015",
      slug: "the-van-doren-invitational-2015",
      thumb: "/images/VDI_Canada_Curren.jpg",
      description: "The celebrated Van Doren Invitational returns to Vancouver this summer bringing yet another thrilling exhibition of skateboarding to the legendary Hastings Skatepark on July 10th and 11th. Top skaters from around the globe will battle it out for top honors and their piece of the $75,000 prize purse.",
      location: "Vancouver, Canada",
      organizedBy: "Vans",
      prizeMoney: 75000,
      startDate: "2015-07-11",
      endDate: "2015-07-11",
      registeredSkaters: [
        {
          _id: Random.id(),
          name: "Ben Hatchell",
          score: 96.56,
          placement: 1
        },
        {
          _id: Random.id(),
          name: "Pedro Barros",
          score: 94.24,
          placement: 2
        },
        {
          _id: Random.id(),
          name: "Chris Russell",
          score: 90.31,
          placement: 3
        },
        {
          _id: Random.id(),
          name: "Raven Tershy",
          score: 82.98,
          placement: 4
        },
        {
          _id: Random.id(),
          name: "Willy Lara",
          score: 79.71,
          placement: 5
        },
        {
          _id: Random.id(),
          name: "Ronnie Sandoval",
          score: 77.74,
          placement: 6
        },
        {
          _id: Random.id(),
          name: "Alex Sorgente",
          score: 77.60,
          placement: 7
        },
        {
          _id: Random.id(),
          name: "Jack Fardell",
          score: 76.20,
          placement: 8
        },
        {
          _id: Random.id(),
          name: "Chris Gregson",
          score: 73.83,
          placement: 9
        },
        {
          _id: Random.id(),
          name: "Marlon Silva",
          score: 71.02,
          placement: 10
        },
        {
          _id: Random.id(),
          name: "Ben Raybourn",
          score: 69.20,
          placement: 11
        },
        {
          _id: Random.id(),
          name: "Curren Caples",
          score: 7.76,
          placement: 12
        }
      ],
      videoUrl: "https://www.youtube.com/embed/5WCdAnWMJqQ",
      likes: 547,
      shares: 54,
      comments: 12,
      attendents: 250,
      status: "passed",
      createdAt: "2015-07-01"
    },
    {
      title: "Red Bull Hart Lines 2015",
      slug: "red-bull-hart-lines-2015",
      thumb: "/images/hart-lines.jpg",
      description: "Coming to Detroit’s Hart Plaza is a brand new street skateboarding competition from the mind of Ryan Sheckler. Red Bull Hart Lines sets out to produce a high-energy skateboard event featuring an innovative new contest format.",
      location: "Detroit, MI (USA)",
      organizedBy: "Red Bull",
      prizeMoney: 35000,
      startDate: "2015-05-08",
      endDate: "2015-05-09",
      registeredSkaters: [
        {
          _id: Random.id(),
          name: "Curren Caples",
          score: null,
          placement: 1
        },
        {
          _id: Random.id(),
          name: "Torey Pudwill",
          score: null,
          placement: 2
        },
        {
          _id: Random.id(),
          name: "Ryan Sheckler",
          score: null,
          placement: 3
        },
        {
          _id: Random.id(),
          name: "Chris Cole",
          score: null,
          placement: 4
        },
        {
          _id: Random.id(),
          name: "Evan Smith",
          score: null,
          placement: 5
        },
        {
          _id: Random.id(),
          name: "Alec Majerus",
          score: null,
          placement: 6
        },
        {
          _id: Random.id(),
          name: "Ryan Decenzo",
          score: null,
          placement: 7
        },
        {
          _id: Random.id(),
          name: "Youness Amrani",
          score: null,
          placement: 8
        }
      ],
      videoUrl: "http://sharevideo.redbull.com/?logoHover=Visit RedBull.com/Skateboarding&bctid=4227477545001&bgcolor=#000000&socialHover=Share or embed&autoStart=false&isUI=true&dynamicStreaming=true&link=http://www.redbull.com/en/skateboarding&qualityHover=Change quality&isVid=true&labels=http://www.redbull.com/cs/RedBull2Misc/brightcove/en_INT_labels.xml&closedCaptionsHover=Subtitles&jumpHover=Jump backwards&linkBaseURL=http://www.redbull.com/en/skateboarding/stories/1331722262434/red-bull-hart-lines-final-results&bckey=AQ~~,AAABTw4lHzE~,sr1E9bdX6d4wCdvdlD8QKdNij3uKs2K9&filter=channel:Skateboarding&bcpid=1684512102001&startTime=1439152806254&isRTL=false&relatedcontent=true,true&htmlFallback=true&onsiteSettings=false,false,false,true",
      likes: 187,
      shares: 24,
      comments: 3,
      attendents: 1500,
      status: "passed",
      createdAt: "2015-05-01"
    }
  ];

  if (Contests.find({}).count() === 0) {

    for(i=0; i < contests.length; i++){
      Contests.insert({
        title: contests[i].title,
        slug: contests[i].slug,
        thumb: contests[i].thumb,
        description: contests[i].description,
        location: contests[i].location,
        organizedBy: contests[i].organizedBy,
        prizeMoney: contests[i].prizeMoney,
        startDate: contests[i].startDate,
        endDate: contests[i].endDate,
        registeredSkaters: contests[i].registeredSkaters,
        videoUrl: contests[i].videoUrl,
        likes: contests[i].likes,
        shares: contests[i].shares,
        comments: contests[i].comments,
        attendents: contests[i].attendents,
        status: contests[i].status,
        createdAt: contests[i].createdAt
      });
    }

  } else {
    Contests.remove({});

    for(i=0; i < contests.length; i++){
      Contests.insert({
        title: contests[i].title,
        slug: contests[i].slug,
        thumb: contests[i].thumb,
        description: contests[i].description,
        location: contests[i].location,
        organizedBy: contests[i].organizedBy,
        prizeMoney: contests[i].prizeMoney,
        startDate: contests[i].startDate,
        endDate: contests[i].endDate,
        registeredSkaters: contests[i].registeredSkaters,
        videoUrl: contests[i].videoUrl,
        likes: contests[i].likes,
        shares: contests[i].shares,
        comments: contests[i].comments,
        attendents: contests[i].attendents,
        status: contests[i].status,
        createdAt: contests[i].createdAt
      });
    }
   
  }

});
