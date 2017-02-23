// $(function() {

$('.bodyPart').on('click', function(event) {
	event.preventDefault();
	$('header').css('top', '-150px');
	$('.diagram svg').css('height', '70vh');
});

$('.chest').on('click', function(event) {
	event.preventDefault();
	/* Act on the event */
	$('.info').html("<h2>Remedy:</h2><p> Here is a remedy for your torso!</p>");
});

// 	var APOSE = { 
// 		title: '',
// 		benefits: [],
// 		neededItems: [],
// 		howToSteps: [],
// 		sources: ''
// };

var sortedPoses = {
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
}

var poseIndex = {
		tadasana: {
			title: 'mountain pose',
			benefits: [benefits.stress, benefits.mindfulness, benefits.bloodflow, benefits.depression, benefits.fear, benefits.anxiety, benefits.anger, benefits.exhaustion, benefits.concentration],
			neededItems: ["You just need yourself."],
			howToSteps: ['Start with standing up straight, with arms at sides.', 'Put weight evenly across feet.', 'Press big toes together, also separate heels (optional).', 'Lift toes, spread apart, release back on to ground.', 'Take a few calming inhales and exhales.', 'Close eyes.', 'Focus on one spot.', 'Try for 5 then 10 then 15 mins.'],
			sources: ''
		},

		karani: { //cramps, bloodflow, stress, digestion,
			title: "Vipaita Karani (\"Legs-Up-the-Wall Pose\")",
			benefits: [benefits.stress, benefits.mindfulness, benefits.bloodflow, benefits.menstruation, benefits.digestion, benefits.feet, benefits.eyes, benefits.backPain, benefits.headache, benefits.anxiety, benefits.depression],
			neededItems: ['flat surface', 'wall', 'something comfy to lay on', 'a towel or two'],
			howToSteps: ['Lie on the floor near a wall.', 'If you feel comfortable, regulate your breathing. The time it takes to inhale should match your exhale.', 'While exhaling swing legs up onto the wall so that your heels and sitting bones are supported.', 'Immediately stop if you feel discomfort in lower back, adjust yourself so that your sitting bones are supported and you are sitting comfortably.', 'Ensure your knees are bent, not locked.', 'Your spine should be straight, with your head resting on the floor.', ' If your neck feels strained, place a small, rolled-up towel under it for support.', 'Once you are positioned and comfortable, place a towel over your eyes and keep them closed for 5 to 15 minutes. Allow yourself to soften and release.', 'While you relax, place your arms out to your sides. Open your shoulder blades away from the spine, relaxing your hands and wrists. Keep your legs held vertically in place, but only partially flexed.', 'After 5 to 15 minutes in this pose, it is time to bring your legs down. Be sure to lie on your side for a few breaths before sitting upright with your back against the wall, then slowly rising to your feet.'],
			sources: 'put some stuff here.'
		},

		balasana: {
			title: 'Child\'s Pose',
			benefits: [benefits.stress, benefits.exhaustion, benefits.depression, benefits.spine, benefits.mindfulness],
			neededItems: ['A clean space', 'a mat', 'or a towel'],
			howToSteps: ['sit on heels', 'bring knees together', 'keep your hips on your heels as you bend forward', 'touch floor with forehead', 'rest arms alongside body, with palms facing up'],
			sources: 'tbd'
		},

		uttanasana: {
			title: 'Standing Forward Bend',
			benefits: [benefits.legs, benefits.stress, benefits.anxiety, benefits.spine, benefits.headache, benefits.insomnia, benefits.backPain],
			neededItems: ['You just need yourself.'],
			howToSteps: ['Stand with your feet spread to about the width of your hips.', 'Bend knees slightly', 'Fold your upper body down over your legs, getting your belly as close to your thighs as you can comfortably. Bend your knees as much or as little as you need to', 'Fully relax your head and neck.', "NOTE: To target your lower back reach for the floor, to target upper back, simply clasp elbows."],
			sources: 'TO DO'
		},

		savasana: {
			title: 'Corpse Pose',
			benefits: [benefits.stress, benefits.insomnia, benefits.concentration, benefits.muscularPain, benefits.bloodflow, benefits.anxiety, benefits.digestion],
			neededItems: ['a clean floor', 'a mat or towel'],
			howToSteps: ['Lie flat on your back as if you were lying in bed', 'legs should be seperated, arms at your side, palms facing up', 'relax', 'on each inhale and exhale concentrate on relaxing each part of your body', 'let your tension and stress melt away upon each exhale', 'no time limit, anywhere between 3 minutes to an hour', 'after a while, relax your breathe and focus on nothingness'],
			sources: 'to do'
		},
	}
	//Put everything on tree based on whats in the benefits array.
var remedies = {
	head: {
		stress: [],
		depression: [],
		anger: [],
		anxiety: [],
		attention: [],
		exhaustion: [],
		insomnia: [],
		headache: [],
		concentration: [],
		eyes: [],
	},
	upperArms: {

	},
	lowerArms: {

	},
	chest: {
		backPain: [],
	},
	lowerAbdomen: {
		digestion: [],
		menstruation: [],
	},
	legsAndFeet: {
		feet: [],
	}
}

	
	//check each benefit from array to see where pose should go

	//add to array for that bodypart / issue

	function sortPoses(){//function to put poses where they should go.
		for(pose in poseIndex){ //go through each item in pose index
			var benefitsArray = pose.benefits; //get benefits array for current item
			
		}
	}


// })