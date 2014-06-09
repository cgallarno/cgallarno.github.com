var delta = 0;
var currentSlideIndex = 0;
var scrollThreshold = 4;
var scrolling = false;
var $slides;
var $links;

function init(){
 $slides = $('.slide');
 for(var i =0; i < $slides.length; i++){
	$('#timeline').append('<a class="timeline-point'+ ((i === 0)?" active":"") +'" href="#nav_'+i+'"></a>');
 }
 $links = $("#timeline .timeline-point");

 $links.on('click', handleLinkClick);
}

function handleLinkClick(e){
	e.preventDefault();
	console.log('Clicked', $(e.target)[0].hash.replace('#nav_', ''));
	currentSlideIndex = $(e.target)[0].hash.replace('#nav_', '');
	showSlide();
	scrolling = false;
}
 
function elementScroll (e) {

	if(!scrolling){

		clearTimeout($.data(this, 'timer'));
		$.data(this, 'timer', setTimeout(function() {
			console.log("reset Page scrolling");
			scrolling = false;
			//do something
		}, 900));
		// --- Scrolling up ---
		if (e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0) {	
			delta--;
			if ( Math.abs(delta) >= scrollThreshold) {
			prevSlide();
			}
		}
	 
		// --- Scrolling down ---
		else {
	 
			delta++;
	 
			if (delta >= scrollThreshold) {
				nextSlide();
			}
		}
	}
	
 
	// Prevent page from scrolling
	return false;
}
 
 
function showSlide() {
	console.log('started scrolling');
	scrolling = true;

	// reset
	delta = 0;

	$slides.each(function(i, slide) {
		console.log('Current Slide', currentSlideIndex, i);
		$(slide).toggleClass('active', (i >= currentSlideIndex));
		$($links[i]).toggleClass('active', (i == currentSlideIndex));
	});

	//$(".arrow").toggleClass('top', currentSlideIndex == slides.length - 1);

 
}
 
 
function prevSlide() {
 
	currentSlideIndex--;
 
	if (currentSlideIndex < 0) {
		currentSlideIndex = 0;
	}
 
	showSlide();
}
 
function nextSlide() {
 	var numSlides = $slides.length - 1; //zero based
	currentSlideIndex++;
 
	if (currentSlideIndex > numSlides) { 
		currentSlideIndex = numSlides;
	}
 
	showSlide();
}

$(document).ready(init);
 
$(window).on({
	'DOMMouseScroll mousewheel': elementScroll
});
