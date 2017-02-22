$(function(){

$('.bodyPart').on('click',  function(event) {
	event.preventDefault();
	$('header').css('top', '-150px');
	$('.diagram svg').css('height', '70vh');
});

$('.chest').on('click', function(event) {
	event.preventDefault();
	/* Act on the event */
	$('.info').html("<h2>Remedy:</h2><p> Here is a remedy for your torso!</p>");
});


})