console.log("Sanity Check: JS is working!");

$(document).ready(function() {
    getPost();
    getMeow();
  	$('.spacecat').hide();

});

//function to grab input from form
function getPost() {
	$('.btn-lg').click(function() {
    	event.preventDefault();	
      	postPost($('#post').val());
	});
}
//function to add input and timestamp to the DOM and then clear typebox
function postPost(content) {
	$('#postlist').prepend('<p>' + content + ' sent on ' + new Date($.now())+ '</p>');
	$('#post').val('');
}

//function to talk with companion, SpaceCat
function getMeow() {
	$('.btn-xs').click(function(){
		event.preventDefault();
		randomMeow();
		$(".spacecat").fadeIn(1000);
		$(".spacecat").fadeOut(1000);
	});
}
//random SpaceCat message generator
function randomMeow() {
    var randomNumber = Math.random();
    if (randomNumber < 0.1) {
        $('#postlist').prepend('<p>' + 'Meow....mewmew.....zzz.' + ' received on ' + new Date($.now()) + '</p>');
    } else if (randomNumber < 0.2) {
        $('#postlist').prepend('<p>' + 'zzzzzzzzzzzzz.' + ' received on ' + new Date($.now())+ '</p>');
    } else if (randomNumber < 0.3) {
        $('#postlist').prepend('<p>' + 'zzz.' + ' received on ' + new Date($.now())+ '</p>');    
    } else if (randomNumber < 0.4) {
        $('#postlist').prepend('<p>' + 'Me....zzz.' + ' received on ' + new Date($.now())+ '</p>');
    } else if (randomNumber < 0.5) {
        $('#postlist').prepend('<p>' + 'one small nap for cat...' + ' received on ' + new Date($.now())+ '</p>');
    } else if (randomNumber < 0.6) {
        $('#postlist').prepend('<p>' + 'rub mah belly k stop now.' + ' received on ' + new Date($.now())+ '</p>');
    } else if (randomNumber < 0.7) {
        $('#postlist').prepend('<p>' + 'Cat fact #49: The first cat in space was French. She was named Felicette, or “Astrocat.” She survived the trip.' + ' received on ' + new Date($.now())+ '</p>');
    } else if (randomNumber < 0.8) {
        $('#postlist').prepend('<p>' + 'zzzzzzzzzzzzzzzzzzzzzzz.' + ' received on ' + new Date($.now())+ '</p>');
    } else if (randomNumber < 0.9) {
        $('#postlist').prepend('<p>' + 'i can haz freezedrycheezburger?' + ' received on ' + new Date($.now())+ '</p>');
    } else {
        $('#postlist').prepend('<p>' + 'Bark....meow?' + ' received on ' + new Date($.now())+ '</p>');
    }
}

