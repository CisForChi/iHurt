$(function() {

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




	var karani = { //cramps, bloodflow, stress, digestion,
			title: "Vipaita Karani (\"Legs-Up-the-Wall Pose\")",
			benefits: ['Regulates blood flow', 'Alleviates menstrual cramps', 'Relieves swollen ankles and varicose veins', 'Helps testicular, semen, and ovarian problems in men and women respectively', 'Improves digestion', 'Restores tired feet or legs', 'Improves problems of the eyes and ears', 'Relieves mild backache', 'Provides migraine and headache relief', 'Calms anxiety', 'Relieves symptoms of mild depression and insomnia'],
			neededItems: ['flat surface', 'wall', 'something comfy to lay on', 'a towel or two'],
			howToSteps: ['Lie on the floor near a wall.', 'If you feel comfortable, regulate your breathing. The time it takes to inhale should match your exhale.', 'While exhaling swing legs up onto the wall so that your heels and sitting bones are supported.', 'Immediately stop if you feel discomfort in lower back, adjust yourself so that your sitting bones are supported and you are sitting comfortably.', 'Ensure your knees are bent, not locked.', 'Your spine should be straight, with your head resting on the floor.', ' If your neck feels strained, place a small, rolled-up towel under it for support.', 'Once you are positioned and comfortable, place a towel over your eyes and keep them closed for 5 to 15 minutes. Allow yourself to soften and release.', 'While you relax, place your arms out to your sides. Open your shoulder blades away from the spine, relaxing your hands and wrists. Keep your legs held vertically in place, but only partially flexed.', 'After 5 to 15 minutes in this pose, it is time to bring your legs down. Be sure to lie on your side for a few breaths before sitting upright with your back against the wall, then slowly rising to your feet.'],
			sources: 'put some stuff here.'
	};


	var remedies = {
		head: {
			mental: {
				stress: {
					option1: karani, //defined above, used for multiple ailments
				},
				hyperactivity: '',
				mentalExhaustion: '',
				//add more? stay at 3?
			},
			physical: {
				headache: '',
				migraine: '',
				congestion: '',
				soreThroat: '',
				stiffNeck: '',
				badBreath: '',
			}
		},
		upperArms: {
			muscleStiffness: '',

		},
		lowerArmsHands: {
			jointPain: '',
			musclePain: ''
		},
		chest: {
			cough: '',
			hiccups: '',

		},
		lowerAbdomen: {
			nausea: '',
			stomachAche: '', //yoga, chamomile tea, etc. https://www.gaia.com/article/soothing-your-stomach-yoga
		},
		feet: {
			musclePain: '', //stretches, etc

		}


	}

})