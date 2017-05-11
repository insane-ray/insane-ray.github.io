/* --- Header nav search ---*/

var searchWrappper = document.getElementsByClassName("header__search-wrapper")[0];
var searchOpen = document.getElementsByClassName("header__search-call")[0];
var searchClose = document.getElementsByClassName("header__search-close")[0];

searchOpen.onclick = function () {
	searchWrappper.style.display = "block";
	searchClose.style.display= "block";
	setTimeout (function () {
		searchWrappper.style.transform = "translateX(0)";
		searchWrappper.style.opacity = "1";
		searchClose.style.opacity = "1";
		searchOpen.style.opacity = "0";
	} , 1);
}

searchClose.onclick = function () {
	searchWrappper.style.transform = "translateX(-100vw)";
	searchWrappper.style.onpacity= "0";
	searchOpen.style.opacity = "1";
	this.style.display= "none";
	setTimeout (function () {
		searchWrappper.style.display = "block";
	} , 400);
}

$(document).ready(function(){

	/* --- Owl Carousel 2 --- */

	var owl = $('.owl-carousel');

	$('.owl-carousel').owlCarousel({
	loop:true,
	margin:30,
	center: true,
	autoWidth:true,
	});

	$('.next').click(function() {
		owl.trigger('next.owl.carousel', [300]);
	})
	$('.prev').click(function() {
		owl.trigger('prev.owl.carousel', [300]);
	})

	/* --- Isotope --- */

	var $grid = $('.place-to-go__grid').isotope({
		filter: '.journey',
		itemSelector: '.place-to-go__item',
		layoutMode: 'fitRows',
	});

	// bind filter button click
	$('#filters').on( 'click', 'button', function() {
	  var filterValue = $( this ).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	});

	// change is-checked class on buttons
	$('.place-to-go__buttons').each( function( i, buttonGroup ) {
	  var $buttonGroup = $( buttonGroup );
	  $buttonGroup.on( 'click', 'button', function() {
	    $buttonGroup.find('.is-checked').removeClass('is-checked');
	    $( this ).addClass('is-checked');
	  });
	});

});

