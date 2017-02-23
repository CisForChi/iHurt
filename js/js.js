// $(function() {
$('.info').hide();
$('.bodyPart').on("click", function() {
	var fadeSpeed = 1000;
	var partId = ($(this).data('id'));
	if ($(this).hasClass('bodyPart--Active')) {
		$('.bodyPart').removeClass('bodyPart--Active');
		$('.diagram').removeClass('diagram--Active');
		$('.info').fadeOut(fadeSpeed);
		$('.info').removeClass('info--Active');

	} else {
		$('.bodyPart').removeClass('bodyPart--Active'); // removes color of all bodypart
		$(this).addClass('bodyPart--Active'); // adds color to bodypart we've clicked
		$('.diagram').addClass('diagram--Active'); // shrinks person and moved left
		$('.info').removeClass('info--Active'); // moves the button left 70%
		$('.info').fadeOut(fadeSpeed, function() {
			setTimeout(function(){ $('.info').addClass('info--Active'); }, 1); 
			$('.info').fadeIn(fadeSpeed);

			getBodyButtons(partId);
		});
	}
});



$('.bodyPart').on("click", function() {

});


function getBodyButtons(partId) { //function gets buttons for the body part that was clicked

	var currentPart = partId;
	var bodyOptions = Object.keys(dummyBody[currentPart]);
	$('.info').html('<ul class="buttonList"></ul>');
	$('.yogaInfo').html('');
	for (var i = 0; i < bodyOptions.length; i++) {
		$('.buttonList').append('<li><button class="benefitButton" data-id=' + currentPart + '>' + bodyOptions[i] + '</button></li>');
	}
};


$('.info').on('click', '.benefitButton', function() {
	var currentPart = $(this).data('id');
	var benefit = $(this).text();
	var poses = dummyBody[currentPart][benefit];

	$('.yogaInfo').html('<ul class="posesList"></ul>')
	for (var i = 0; i < poses.length; i++) {

		$('.posesList').append('<li><button class="poseButton" >' + poses[i].title + '</button></li>');
	}



});
// $('ul').on('click', 'li', function(){
// 	var checkbox = $(this).find('.glyphicon');
//
// checkbox.toggleClass('glyphicon-unchecked glyphicon-check');
// $(this).toggleClass('text-muted');

var dummyBody = {};

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
}
var categories = {
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

var benefits = {
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
}

var poseIndex = {
		tadasana: {
			title: 'mountain pose',
			benefits: ["stress", "mindfulness", "bloodflow", "depression", "fear", "anxiety", "anger", "exhaustion", "concentration"],
			neededItems: ["You just need yourself."],
			howToSteps: ['Start with standing up straight, with arms at sides.', 'Put weight evenly across feet.', 'Press big toes together, also separate heels (optional).', 'Lift toes, spread apart, release back on to ground.', 'Take a few calming inhales and exhales.', 'Close eyes.', 'Focus on one spot.', 'Try for 5 then 10 then 15 mins.'],
			sources: ''
		},

		karani: { //cramps, bloodflow, stress, digestion,
			title: "Vipaita Karani (\"Legs-Up-the-Wall Pose\")",
			benefits: ["stress", "mindfulness", "bloodflow", "menstruation", "digestion", "feet", "eyes", "backPain", "headache", "anxiety", "depression", "tension"],
			neededItems: ['flat surface', 'wall', 'something comfy to lay on', 'a towel or two'],
			howToSteps: ['Lie on the floor near a wall.', 'If you feel comfortable, regulate your breathing. The time it takes to inhale should match your exhale.', 'While exhaling swing legs up onto the wall so that your heels and sitting bones are supported.', 'Immediately stop if you feel discomfort in lower back, adjust yourself so that your sitting bones are supported and you are sitting comfortably.', 'Ensure your knees are bent, not locked.', 'Your spine should be straight, with your head resting on the floor.', ' If your neck feels strained, place a small, rolled-up towel under it for support.', 'Once you are positioned and comfortable, place a towel over your eyes and keep them closed for 5 to 15 minutes. Allow yourself to soften and release.', 'While you relax, place your arms out to your sides. Open your shoulder blades away from the spine, relaxing your hands and wrists. Keep your legs held vertically in place, but only partially flexed.', 'After 5 to 15 minutes in this pose, it is time to bring your legs down. Be sure to lie on your side for a few breaths before sitting upright with your back against the wall, then slowly rising to your feet.'],
			sources: 'put some stuff here.'
		},

		balasana: {
			title: 'Child\'s Pose',
			benefits: ["stress", "exhaustion", "depression", "spine", "mindfulness", "tension"],
			neededItems: ['A clean space', 'a mat', 'or a towel'],
			howToSteps: ['sit on heels', 'bring knees together', 'keep your hips on your heels as you bend forward', 'touch floor with forehead', 'rest arms alongside body, with palms facing up'],
			sources: 'tbd'
		},

		uttanasana: {
			title: 'Standing Forward Bend',
			benefits: ["legs", "stress", "anxiety", "spine", "headache", "insomnia", "backPain", "tension"],
			neededItems: ['You just need yourself.'],
			howToSteps: ['Stand with your feet spread to about the width of your hips.', 'Bend knees slightly', 'Fold your upper body down over your legs, getting your belly as close to your thighs as you can comfortably. Bend your knees as much or as little as you need to', 'Fully relax your head and neck.', "NOTE: To target your lower back reach for the floor, to target upper back, simply clasp elbows."],
			sources: 'TO DO'
		},

		savasana: {
			title: 'Corpse Pose',
			benefits: ["stress", "insomnia", "concentration", "muscularPain", "bloodflow", "anxiety", "digestion"],
			neededItems: ['a clean floor', 'a mat or towel'],
			howToSteps: ['Lie flat on your back as if you were lying in bed', 'legs should be seperated, arms at your side, palms facing up', 'relax', 'on each inhale and exhale concentrate on relaxing each part of your body', 'let your tension and stress melt away upon each exhale', 'no time limit, anywhere between 3 minutes to an hour', 'after a while, relax your breathe and focus on nothingness'],
			sources: 'to do'
		},
	}
	//Put everything on tree based on whats in the benefits array.

sortIntoCategories();

// })