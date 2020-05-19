$(document).ready(function(){

	$(".nav-icon").click(function(){

		$(".full-nav").addClass("open");
	});

	$(".nav-close").click(function(){
		$(".full-nav").removeClass("open");
	});

	$(window).scroll(function(){
		var sc = $(window).scrollTop();
		if(sc > 100){
           $(".nav").addClass("sticky");
		}else{
           $(".nav").removeClass("sticky");
		}
	});

	


	$(".bxslider").bxSlider({
		mode: 'horizontal',
		moveSlides:1,
		slideMargin:40,
		infiniteLoop:true,
		minSlides:1,
		maxSlides:1,
		speed:1200,

	});

	$("#work").magnificPopup({
		delegate:'a',
		type: 'image',
		gallery:{
			enabled:true
		}
	}); 

    $(".portfolio-area").magnificPopup({
		delegate:'a',
		type: 'image',
		gallery:{
			enabled:true
		}
	});

     // for gallery filtering
	  var $grid = $('.grid').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
	    // use outer width of grid-sizer for columnWidth '.grid-sizer'
	  columnWidth: 1
	  }
  });

    // for menu filtering
	$('.portfolio-menu').on( 'click', 'button', function() {
	   var filterValue = $(this).attr('data-filter');
	   $grid.isotope({ filter: filterValue });
  });
     // for menu active class
	$('.portfolio-menu button').on( 'click', function(event) {
	   $(this).siblings('.active').removeClass('active');
	   $(this).addClass('active');
	   event.preventDefault();
  });

   // for counterup
			$('.counter').counterUp({
		    delay: 10,
		    time: 1000
		    });

    // for typing
		var typed = new Typed(".type", {
	    strings: [
	     "Responsive Website Design",
	     "Designing UI/UX",
	     "Landing Page",
	     "PSD to HTML",
	     "PSD to Bootstrap4",
	     "Wordpress",
	     "PHP & Laravel",
	     "Angular 8,9 & Angular Material",
	     "Photo & Video Editing",
	    ],
	     typeSpeed: 50,
	     backSpeed: 50,
	     loop: true
	     });

		 // for typing
		var typed = new Typed(".type1", {
	    strings: [
	     "Responsive Website Design",
	     "Designing UI/UX",
	     "Landing Page",
	     "PSD to HTML",
	     "PSD to Bootstrap4",
	     "Wordpress",
	     "PHP & Laravel",
	     "Angular 8,9 & Angular Material",
	     "Photo & Video Editing",
	    ],
	     typeSpeed: 50,
	     backSpeed: 50,
	     loop: true
	     });
    

		 // for typing
		var typed2 = new Typed('#typed2', {
	    strings: [
	     "Responsive Website Design",
	     "Designing UI/UX",
	     "Landing Page",
	     "PSD to HTML",
	     "PSD to Bootstrap4",
	     "Wordpress",
	     "PHP & Laravel",
	     "Angular 8,9 & Angular Material",
	     "Photo & Video Editing",
	     ],
	    typeSpeed: 0,
	    backSpeed: 0,
	    fadeOut: true,
	    loop: false
	  });

       // for aos animation
		AOS.init({
      	duration: 2500
      });
         

		//$(".overlay").hover(function(){
		//  $(this).addClass("");
		//});

        

        // for closing inspect element option
	//	document.addEventListener("contextmenu",function(mdJahin){
	//		mdJahin.preventDefault();
	//	});



	 // for typing
		var typed3 = new Typed('.typeContact', {
	    strings: [
	     "Contact Info :",
	     ],
	    typeSpeed: 0,
	    backSpeed: 0,
	    fadeOut: true,
	    loop: true
	  });

		// for placeholder text removing while typing

		$(function(){
			'use strict';
			$('[placeholder]').focus(function(){
				$(this).attr('data-text', $(this).attr('placeholder'));
				$(this).attr('placeholder', ' ');
			}).blur(function(){
				$(this).attr('placeholder', $(this).attr('data-text'));
			});
		});
        // for placeholder text removing while typing

		


   // $(".fa-address-book").click(function(){

	//	alert("Please read these informations carefully");
//	});






		
		
         





});