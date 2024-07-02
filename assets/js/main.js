$(document).ready( function() {

	/*	Firefox is mishandling the z-indices on the fixed-position backgrounds.
		I'm not sure why, since this isn't showing up in Webkit, but the background image
		for the intro section completely covers the About section. After some experimenting
		with z-indices, I've found that the most reliable trick is to hide the 
	*/

	$(".row.about-tina").addClass("showBg");
	$("#nav").clone().appendTo(".dropNav");
	$(".dropNav ul").removeAttr("id");

	var waypoint = new Waypoint({
		element: document.getElementById('intro-section'),
		handler: function(direction) {
			$(".grow-music-intro").toggleClass("showBg");			
		},
		offset: function() {
			return -this.element.clientHeight;
		}
	});

	var waypoint = new Waypoint({
		element: document.getElementById('nav'),
		handler: function(direction) {
			$(".dropNav").toggleClass("hidden");			
		},
		offset: function() {
			return -this.element.clientHeight;
		}
	});

/*
	var waypoint = new Waypoint({
		element: document.getElementById('nav'),
		handler: function(direction) {
			$("#nav").toggleClass("fixedPos");
		},
		offset: function() {
			return -this.element.clientHeight;
		}
	});



	/*
	var waypoint = new Waypoint({
		element: document.getElementById('nav'),
		handler: function(direction) {
			console.log('Scrolled to waypoint!');
			$("html").toggleClass("bob");
		},
		offset: 'bottom-in-view'
	});
	*/

/*
	window.onscroll = function (oEvent) {

	    var topOfOthDiv = $("#last").offset().top;
	    
	    if($(window).scrollTop() > topOfOthDiv) { //scrolled past the other div?
			$(".row.about-tina").addClass("showPortrait");
	    }
	    else {
			$(".row.about-tina").removeClass("showPortrait");	    
	    }


		$(".site-nav").clone().attr("class", "site-nav--fixedPos hidden").appendTo("body");

	    var navTop = $(".site-nav").offset().top;
	    
	    if($(window).scrollTop() >= navTop) { //scrolled past the other div?
			$(".site-nav--fixedPos").removeClass("hidden");
	    }
	    else {
			$(".site-nav--fixedPos").addClass("hidden");	    
	    }


http://stackoverflow.com/questions/10966710/choppy-laggy-scroll-event-on-chrome-and-ie

			
	};

*/

});