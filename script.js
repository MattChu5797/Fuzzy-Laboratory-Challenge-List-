
$(document).ready(function(){


		var ChallengeList=[
		{challenge: 'have dinner using the opposite hand you usually use.'},

    { challenge:'take a selfie with a stranger on the subway.'},

    { challenge:'shake hands with a random stranger at union square.'},

    { challenge:'learn a foreign language song.'},

    { challenge:'wear any color other than black and white.'  },

    { challenge:'have 10-hour sleep in a weekday.' },

    { challenge:'walk a different way home.' },

    { challenge:'have a sleepover with other people in the University Center.'},

    { challenge:'live one day off-line.'  },

    { challenge:'cook breakfast, lunch and dinner on Sunday.' },

    { challenge:'draw a self-portrait.' },

    { challenge:'try a beverage you’ve never tried before.'  },

    { challenge:'learn to do a rap song.' },

    { challenge: 'bake a dessert for a class.'},

    { challenge:'post your phone number on fliers around the city.' },

    { challenge:'wear two different shoes out in public.'  },

    { challenge:'hold a strangers hand.'    },

    { challenge:'buy a cup of coffee for someone behind you.'  },

    { challenge:'pet 10 dogs.' },

    { challenge:'find out how many licks it takes to get to the center of a tootsie pop.'},

    { challenge: 'take a friend to an art exhibit.'},

    { challenge:'sing a song in a crowded area.'  },

    { challenge:'climb in the washington square park fountain.'  },

    { challenge:'find someone with red hair and high-five them.' },

    { challenge:'find a library book that has the word ‘foot’ in the title.'   },

    { challenge: 'get a vinyl record for less than a dollar.'   },

    { challenge: 'buy a friend some food.'   },

    { challenge: 'Make someone macaroni art.'},

    { challenge:'hold the door for strangers for half an hour.'  },

    { challenge: 'learn a new compliment in another language each day for a week and use it on someone that day.' },

    {challenge: 'Walk someone to their destination while helping them carry something.'},

    {challenge: "Get autographs of 10 people who's name starts with the same letter as yourself."},
	];


		$('#challengeButton').click(function(evt){

			var challenge = $('#challengeContainer p').text();

			evt.preventDefault();

			var varLength = ChallengeList.length;
			var randomNumber= Math.floor(Math.random()*varLength);
		
			for(i=0;i<=varLength;i+=32){
			var ChallengeListText = ChallengeList[randomNumber].challenge;


      var timeAnimation = 500;
      var challengeContainer = $('#challengeContainer');

      challengeContainer.fadeOut(timeAnimation, function(){
        challengeContainer.html('');
				challengeContainer.append('<p>'+ChallengeListText+'</p>' + '<p id="challengeGenius">' + '</p>');

        challengeContainer.fadeIn(timeAnimation);  });


		};

	});

});
