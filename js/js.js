$(function(){ //document Ready

$('.poseOverlay').hide(); //sets the overlay to hidden once doc has loaded.

//variables
var dummyBody = {}; //initializes object to be filled by sortIntoCategories function at end of doc ready

var categories = { // initializing object for use by sortIntoCategories function at end of doc ready
	depression: [],
	fear: [],
	anxiety: [],
	anger: [],
	muscularPain: [],
	concentration: [],
	exhaustion: [],
	menstruation: [],
	digestion: [],
	insomnia: [],
	spine: [],
	headache: [],
	concentration: [],
	bloodflow: [],
	feet: [],
	eyes: [],
	backPain: [],
	stress: [],
	mindfulness: [],
	legs: [],
	tension: [],
}

var benefits = { //descriptions of benefits listed in poseIndex, to be printed in HTML when pose clicked.
	depression: "relieves depression",
	fear: "alleviates feelings of fear",
	anxiety: "lessens anxiety",
	anger: "reduces anger",
	muscularPain: "eases aches",
	concentration: "increases attention",
	exhaustion: "energizes mind and body",
	menstruation: "alleviates menstrual cramps",
	digestion: "helps digest food",
	insomnia: "facilitates healthy sleep patterns",
	spine: "realigns spine, relaxes muscles",
	headache: "lessons headache",
	concentration: "Improves concentration.",
	bloodflow: "Increases blood flow",
	feet: "restores tired feet",
	eyes: "Alleviates problems with the eyes.",
	backPain: "Lessens back pain",
	stress: "calms the mind and soul",
	mindfulness: "encourages focus on breathing",
	legs: "Stretches legs to relieve muscle pain",
	tension: "Relieves tension"
};

var poseIndex = { //object of all poses to be displayed.
		tadasana: {
			title: 'mountain pose',
			benefits: ["stress", "mindfulness", "bloodflow", "depression", "fear", "anxiety", "anger", "exhaustion", "concentration"],
			neededItems: ["You just need yourself."],
			howToSteps: ['Start with standing up straight, with arms at sides.', 'Put weight evenly across feet.', 'Press big toes together, also separate heels (optional).', 'Lift toes, spread apart, release back on to ground.', 'Take a few calming inhales and exhales.', 'Close eyes.', 'Focus on one spot.', 'Try for 5 then 10 then 15 mins.'],
			sources: 'http://www.yogajournal.com/'
		},

		karani: {
			title: "Vipaita Karani (\"Legs-Up-the-Wall Pose\")",
			benefits: ["stress", "mindfulness", "bloodflow", "menstruation", "digestion", "feet", "eyes", "backPain", "headache", "anxiety", "depression", "tension"],
			neededItems: ['flat surface', 'wall', 'something comfy to lay on', 'a towel or two'],
			howToSteps: ['Lie on the floor near a wall.', 'If you feel comfortable, regulate your breathing. The time it takes to inhale should match your exhale.', 'While exhaling swing legs up onto the wall so that your heels and sitting bones are supported.', 'Immediately stop if you feel discomfort in lower back, adjust yourself so that your sitting bones are supported and you are sitting comfortably.', 'Ensure your knees are bent, not locked.', 'Your spine should be straight, with your head resting on the floor.', ' If your neck feels strained, place a small, rolled-up towel under it for support.', 'Once you are positioned and comfortable, place a towel over your eyes and keep them closed for 5 to 15 minutes. Allow yourself to soften and release.', 'While you relax, place your arms out to your sides. Open your shoulder blades away from the spine, relaxing your hands and wrists. Keep your legs held vertically in place, but only partially flexed.', 'After 5 to 15 minutes in this pose, it is time to bring your legs down. Be sure to lie on your side for a few breaths before sitting upright with your back against the wall, then slowly rising to your feet.'],
			sources: 'http://www.yogajournal.com/'
		},

		balasana: {
			title: 'Child\'s Pose',
			benefits: ["stress", "exhaustion", "depression", "spine", "mindfulness", "tension"],
			neededItems: ['A clean space', 'a mat', 'or a towel'],
			howToSteps: ['sit on heels', 'bring knees together', 'keep your hips on your heels as you bend forward', 'touch floor with forehead', 'rest arms alongside body, with palms facing up'],
			sources: 'http://www.yogajournal.com/'
		},

		uttanasana: {
			title: 'Standing Forward Bend',
			benefits: ["legs", "stress", "anxiety", "spine", "headache", "insomnia", "backPain", "tension"],
			neededItems: ['You just need yourself.'],
			howToSteps: ['Stand with your feet spread to about the width of your hips.', 'Bend knees slightly', 'Fold your upper body down over your legs, getting your belly as close to your thighs as you can comfortably. Bend your knees as much or as little as you need to', 'Fully relax your head and neck.', "NOTE: To target your lower back reach for the floor, to target upper back, simply clasp elbows."],
			sources: 'http://www.yogajournal.com/'
		},

		savasana: {
			title: 'Corpse Pose',
			benefits: ["stress", "insomnia", "concentration", "muscularPain", "bloodflow", "anxiety", "digestion"],
			neededItems: ['a clean floor', 'a mat or towel'],
			howToSteps: ['Lie flat on your back as if you were lying in bed', 'legs should be seperated, arms at your side, palms facing up', 'relax', 'on each inhale and exhale concentrate on relaxing each part of your body', 'let your tension and stress melt away upon each exhale', 'no time limit, anywhere between 3 minutes to an hour', 'after a while, relax your breathe and focus on nothingness'],
			sources: 'http://www.yogajournal.com/'
		},
	};
//end of variables

//event listeners
$('.bodyPart').on("click", function() {
	$('.yogaInfo').removeClass('yoga--Active');
	var fadeSpeed = 100;
	var partId = ($(this).data('id'));
	if ($(this).hasClass('bodyPart--Active')) {
		$('.bodyPart').removeClass('bodyPart--Active');
		$('.diagram').removeClass('diagram--Active');
		$('.info').removeClass('info--Active');
		$('.info').html('')
	} else {
		$('.bodyPart').removeClass('bodyPart--Active'); // removes color of all bodypart
		$(this).addClass('bodyPart--Active'); // adds color to bodypart we've clicked
		$('.diagram').addClass('diagram--Active'); // shrinks person and moved left
		if ($('.info').hasClass('info--Active')) {
			$('.info').removeClass('info--Active').on('transitionend', function() {
				$('.info').addClass('info--Active');
				$('.info').off('transitionend');
				getBodyButtons(partId);
			});
		} else {
			$('.info').addClass('info--Active')
			getBodyButtons(partId);
		}
	};
});

$('.tweetMe').on('click', function(){
	var poseName = $('.poseTitle').text();
	var customMessage = "Check it out! I found the " + poseName + " using this app!";
	window.open("http://twitter.com/intent/tweet?text=" + customMessage, "twitterwindow", "height=450, width=550, toolbar=0, location=0, menubar=0, directories=0, scrollbars=0");
});

$('.info').on('click', '.benefitButton', function() {
	var currentPart = $(this).data('id');
	var benefit = $(this).text();
	var poses = dummyBody[currentPart][benefit];
	if ($('.yogaInfo').hasClass('yoga--Active')) {
		$('.yogaInfo').removeClass('yoga--Active').on('transitionend', function() {
			$('.yogaInfo').addClass('yoga--Active');
			$('.yogaInfo').off('transitionend');
			$('.yogaInfo').html('<ul class="posesList"></ul>')
			for (var i = 0; i < poses.length; i++) {
				$('.posesList').append('<li><button data-benefit="' + benefit + '" data-bodyPart="' + currentPart + '" data-poseIndexNumber="' + i + '" class="poseButton" >' + poses[i].title + '</button></li>');
			}
		});
	} else {
		$('.yogaInfo').addClass('yoga--Active');
		$('.yogaInfo').html('<ul class="posesList"></ul>');
		for (var i = 0; i < poses.length; i++) {
			$('.posesList').append('<li><button data-benefit="' + benefit + '" data-bodyPart="' + currentPart + '" data-poseIndexNumber="' + i + '" class="poseButton" >' + poses[i].title + '</button></li>');
		}
	}
});

$('.yogaInfo').on('click', '.poseButton', function(event) {
	event.preventDefault();
	var data = $(this).data();
	var arrayLocation = dummyBody[data['bodypart']][data['benefit']][data['poseindexnumber']];
	$('.poseBox').html('');
	$('.poseOverlay').fadeIn(600, function() {
		$('.poseBox').append($('<h2 class="poseTitle">' + arrayLocation.title + '</h2>').hide().fadeIn(1000));
		$('.poseBox').append($('<div class="subTitle clearfix"></div>').hide().fadeIn(2000));
		$('.subTitle').append($('<ul class="neededItemsList"></ul>').hide().fadeIn(2000));
		$('.neededItemsList').append($('<li><h3>What do I need?</h3></li>'));
		for (var i = 0; i < arrayLocation.neededItems.length; i++) {
			$('.neededItemsList').append($('<li><p>' + arrayLocation.neededItems[i] + '</p></li>').hide().fadeIn(1000));
		}
		$('.poseBox').append($('<ul class="benefitList"></ul>').hide().fadeIn(2000));
		$('.benefitList').append($('<li><h3>Benefits:</h3></li>'));
		for (var i = 0; i < arrayLocation.benefits.length; i++) {
			$('.benefitList').append($('<li><p>' + benefits[arrayLocation.benefits[i]] + '</p></li>').hide().fadeIn(3000));
		}
		$('.poseBox').append($('<ul class="instructions"></ul>').hide().fadeIn(2000));
		$('.instructions').append($('<li><h3>How To:</h3></li>'));
		for (var i = 0; i < arrayLocation.howToSteps.length; i++) {
			$('.instructions').append($('<li><p>' + arrayLocation.howToSteps[i] + '</p></li>').hide().fadeIn(3000));
		}
		$('.poseBox').append($('<div class="sources"></div>').hide().fadeIn(2000));
		$('.sources').append($('<h3>source:</h3>'));
		$('.sources').append('<p>Click <a href="' + arrayLocation.sources + '">here</a> to read more about ' + arrayLocation.title + '</p>')
	});
});

$('.poseOverlay').on('click', '.closeButton', function(event) {
	event.preventDefault();
	$('.poseOverlay').fadeOut(600);
	$('h1').text("iHeal");
});
//end of event listeners

//function definitions
function getBodyButtons(partId) { //function gets buttons for the body part that was clicked
	var currentPart = partId;
	var bodyOptions = Object.keys(dummyBody[currentPart]);
	$('.info').html('<ul class="buttonList"></ul>');
	$('.yogaInfo').html('');
	for (var i = 0; i < bodyOptions.length; i++) {
		$('.buttonList').append('<li><button class="benefitButton" data-id=' + currentPart + '>' + bodyOptions[i] + '</button></li>');
	}
};

function sortIntoCategories() {
	for (pose in poseIndex) {
		var benefitArray = poseIndex[pose].benefits;
		for (var i = 0; i < benefitArray.length; i++) {
			categories[benefitArray[i]].push(poseIndex[pose]);
		}
	}
	dummyBody = {
		head: {
			stress: categories.stress,
			depression: categories.depression,
			anger: categories.anger,
			anxiety: categories.anxiety,
			concentration: categories.concentration,
			exhaustion: categories.exhaustion,
			insomnia: categories.insomnia,
			headache: categories.headache,
			concentration: categories.concentration,
			eyes: categories.eyes,
		},
		upperArms: {
			tension: categories.tension,
		},
		lowerArms: {
			carpaltunnel: categories.carpaltunnel,

		},
		chest: {
			backPain: categories.backPain,
		},
		lowerAbdomen: {
			digestion: categories.digestion,
			menstruation: categories.menstruation,
		},
		legsAndFeet: {
			feet: categories.feet,
		}
	}
};
//end of function definitions

sortIntoCategories(); //Must be called at end of doc ready.
//Puts all poses (poseIndex) into dummy body based on whats in their benefits array.
})//end of document ready
