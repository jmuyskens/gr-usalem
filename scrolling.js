/*$(document).ready( function () {
var startingHeight = 450;
var endingHeight = 150;
var startScrollTransition = 0;
var endScrollTransition = 450;
var map = $("#leafletmap");

$(window).scroll(function() {

    if ($(this).scrollTop() > startScrollTransition && $(this).scrollTop() < endScrollTransition) {

        var height = (endingHeight - startingHeight) * (($(this).scrollTop() - endScrollTransition) / (endScrollTransition - startScrollTransition)) + endingHeight;
        //console.log(height);
        map.css("height", height);
        
    }
});
    
});*/