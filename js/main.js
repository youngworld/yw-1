$(document).ready(function() {

$('p.dev-description1').hide();
$('p.dev-description2').hide();
$('p.dev-description3').hide();
$('p.dev-description4').hide();

var $dev1 = $('#dev1'),
    $dev2 = $('#dev2'),
    $dev3 = $('#dev3'),
    $dev4 = $('#dev4');


$dev1.click(function(){
  $('p.dev-description1').slideToggle("slow")
  $('#dev1').toggleClass('dev-container-open', $(this).is(':visible'));
});

$dev2.click(function(){
  $('p.dev-description2').slideToggle("slow")
  $dev2.toggleClass('dev-container-open', $(this).is(':visible'));
});

$dev3.click(function(){
  $('p.dev-description3').slideToggle("slow")
  $dev3.toggleClass('dev-container-open', $(this).is(':visible'));
});

$dev4.click(function(){
  $('p.dev-description4').slideToggle("slow")
  $dev4.toggleClass('dev-container-open', $(this).is(':visible'));
});





});