
jQuery(function($) {
	'use strict';
	/* ----------------------------------------------------------- */
	/*  Mobile Menu
	/* ----------------------------------------------------------- */
	jQuery('.nav.navbar-nav li a').on('click', function() { 
		jQuery(this).parent('li').find('.dropdown-menu').slideToggle();
		jQuery(this).find('li i').toggleClass('fa-angle-down fa-angle-up');
	});

	/* ----------------------------------------------------------- */
	/*  Site search
	/* ----------------------------------------------------------- */

	$('#search').on('click', function () {
		$('.site-search').addClass('visible');
		$('#searchInput').focus();
	});
	$('.search-close').on('click', function () {
		$('.site-search').removeClass('visible');
	});

	/* ----------------------------------------------------------- */
	/*  Slick Carousel
	/* ----------------------------------------------------------- */
	// trending bar slide
	$('.trending-news-slider').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		infinite: true,
		arrows:false,
		fade: false,
		vertical:true,
		verticalSwiping:true

	});




	//Latest news slide
	$('.news-style-one-slide').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		draggable: true,
		loop:true,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true
				}
			},
			{
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		]
	});

	$('.news-style-two-slide').slick({
		infinite: true,
		arrows: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		draggable:true,
		loop:true,
		autoplay:true,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true
				}
			},
			 {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
		]
	});



	$('.post-slide').slick({
		fade: true
	});		
	// -----------------------------
	//  Video Replace
	// -----------------------------
	$('.play-icon').click(function () {
		var video = '<iframe allowfullscreen src="' + $(this).attr('data-video') + '"></iframe>';
		$(this).replaceWith(video);
	});

	$('.play-icon').mousemove(function (e) {
		var parentOffset = $(this).offset();
		var relX = e.pageX - parentOffset.left;
		var relY = e.pageY - parentOffset.top;
		$('.play-button').css({ left: relX, top: relY});
	});
	$('.play-icon').mouseout(function() {
		$('.play-button').css({ left: '50%', top: '50%'});
	});

	/* ----------------------------------------------------------- */
	/*  Scroll To Top
	/* ----------------------------------------------------------- */
	$(window).scroll(function () {
		if ($(this).scrollTop() > 500) {
			$('.scroll-to-top').fadeIn();
		} else {
			$('.scroll-to-top').fadeOut();
		}
	});

	// scroll body to 0px on click
	$('.scroll-to-top').on('click', function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});
});