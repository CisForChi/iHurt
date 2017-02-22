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
	stress:"calms the mind and soul",
	mindfulness: "encourages focus on breathing"


}
var tadasana = {
	title: 'mountain pose',
	benefits: [benefits.stress, benefits.mindfulness, benefits.bloodflow, benefits.depression, benefits.fear, benefits.anxiety, benefits.anger, benefits.exhaustion, benefits.concentration],
	neededItems: ["You just need yourself."],
	howToSteps: ['Start with standing up straight, with arms at sides.', 'Put weight evenly across feet.', 'Press big toes together, also separate heels (optional).', 'Lift toes, spread apart, release back on to ground.', 'Take a few calming inhales and exhales.', 'Close eyes.', 'Focus on one spot.', 'Try for 5 then 10 then 15 mins.'],
	sources: ''
}


var karani = { //cramps, bloodflow, stress, digestion,
	title: "Vipaita Karani (\"Legs-Up-the-Wall Pose\")",
	benefits: [benefits.stress, benefits.mindfulness, benefits.bloodflow, benefits.menstruation, benefits.digestion, benefits.feet, benefits.eyes, benefits.backPain, benefits.headache, benefits.anxiety, benefits.depression],
	neededItems: ['flat surface', 'wall', 'something comfy to lay on', 'a towel or two'],
	howToSteps: ['Lie on the floor near a wall.', 'If you feel comfortable, regulate your breathing. The time it takes to inhale should match your exhale.', 'While exhaling swing legs up onto the wall so that your heels and sitting bones are supported.', 'Immediately stop if you feel discomfort in lower back, adjust yourself so that your sitting bones are supported and you are sitting comfortably.', 'Ensure your knees are bent, not locked.', 'Your spine should be straight, with your head resting on the floor.', ' If your neck feels strained, place a small, rolled-up towel under it for support.', 'Once you are positioned and comfortable, place a towel over your eyes and keep them closed for 5 to 15 minutes. Allow yourself to soften and release.', 'While you relax, place your arms out to your sides. Open your shoulder blades away from the spine, relaxing your hands and wrists. Keep your legs held vertically in place, but only partially flexed.', 'After 5 to 15 minutes in this pose, it is time to bring your legs down. Be sure to lie on your side for a few breaths before sitting upright with your back against the wall, then slowly rising to your feet.'],
	sources: 'put some stuff here.'
};
var balasana = {
		title: 'Child\'s Pose',
 		benefits: [benefits.stress, benefits.exhaustion, benefits.depression, benefits.spine, benefits.mindfulness],
 	 	neededItems: ['A clean space', 'a mat', 'or a towel'],
 		howToSteps: ['sit on heels', 'bring knees together', 'keep your hips on your heels as you bend forward','touch floor with forehead', 'rest arms alongside body, with palms facing up'],
 		sources: 'tbd'





};

//Put everything on tree based on whats in the benefits array.
var remedies = {
	head: {
		stress: [],
		depression: [],
		anger:[],
		anxiety:[],
		attention:[],
		exhaustion:[],
		insomnia:[],
		headache:[],
		concentration:[],
		eyes:[],


			},
	upperArms: {

	},
	lowerArms: {

	},
	chest: {
		backPain:[],
	},
	lowerAbdomen: {
		digestion:[],
		menstruation:[],
	},
	legsAndFeet: {
    feet: [],
	}
}

// })