$(document).ready(function() {



/***** SOCIAL NOTES ******/  

var chirp = $("#chirp")[0];
$('#twitter').mouseenter(function() {
  chirp.play();
});

var shutter = $("#shutter")[0];
$('#instagram').mouseenter(function() {
  shutter.play();
});

var meow = $("#meow")[0];
$('#github').mouseenter(function() {
  meow.play();
});



});