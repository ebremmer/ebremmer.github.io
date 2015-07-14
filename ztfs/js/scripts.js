$(document).ready(function() {

	/***************** Waypoints ******************/

	$('.wp1').waypoint(function() {
		$('.wp1').addClass('animated fadeInLeft');
	}, {
		offset: '75%'
	});
	$('.wp2').waypoint(function() {
		$('.wp2').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});
	$('.wp3').waypoint(function() {
		$('.wp3').addClass('animated bounceInDown');
	}, {
		offset: '75%'
	});
	$('.wp4').waypoint(function() {
		$('.wp4').addClass('animated fadeInDown');
	}, {
		offset: '75%'
	});

	/***************** Flickity ******************/

	$('#featuresSlider').flickity({
		cellAlign: 'left',
		contain: true,
		prevNextButtons: false
	});

	$('#showcaseSlider').flickity({
		cellAlign: 'left',
		contain: true,
		prevNextButtons: false,
		imagesLoaded: true
	});

	/***************** Fancybox ******************/

	$(".youtube-media").on("click", function(e) {
		var jWindow = $(window).width();
		if (jWindow <= 768) {
			return;
		}
		$.fancybox({
			href: this.href,
			padding: 4,
			type: "iframe",
			'href': this.href.replace(new RegExp("watch\\?v=", "i"), 'v/'),
		});
		return false;
	});

});

$(document).ready(function() {
	$("a.single_image").fancybox({
		padding: 4,
	});
});

/***************** Nav Transformicon ******************/

/* When user clicks the Icon */
$(".nav-toggle").click(function() {
	$(this).toggleClass("active");
	$(".overlay-boxify").toggleClass("open");
});

/* When user clicks a link */
$(".overlay ul li a").click(function() {
	$(".nav-toggle").toggleClass("active");
	$(".overlay-boxify").toggleClass("open");
});

/* When user clicks outside */
$(".overlay").click(function() {
	$(".nav-toggle").toggleClass("active");
	$(".overlay-boxify").toggleClass("open");
});

/***************** Smooth Scrolling ******************/

$('a[href*=#]:not([href=#])').click(function() {
	if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

		var target = $(this.hash);
		target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		if (target.length) {
			$('html,body').animate({
				scrollTop: target.offset().top
			}, 2000);
			return false;
		}
	}
});

$(function() {
    // var BV = new $.BigVideo({container: $('.hero'), doLoop:true,controls:false});
    // BV.init();
		// if (Modernizr.touch) {
		//     BV.show('../../img/hero-bg.jpg');
		// } else {
		// 		BV.show([
		// 				{ type: "video/mp4",  src: "../../img/3393866.mp4" },
		// 				{ type: "video/webm", src: "../../img/3393866.webm" },
		// 				{ type: "video/ogg",  src: "../../img/3393866.ogg" }
		// 		]);
		// }

		Parse.initialize("0KJUPT4eZ1O2RsZN6sDyoZ3IfR3Y2nN9NLWYIoJ8", "Zesi4ClaVHXlh8HtwV14078AbBPmkPCffDb9p7QW");
		$('#subsfrm').submit(function( e ) {
				e.preventDefault();

				var input = this[0].value;
				var filter=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
				if (filter.test(input)) {
					var SubscribersCls = Parse.Object.extend("Subscribers");
					var contact = new SubscribersCls();


					contact.save({
						mail: input,
						event: window.location.pathname.split( '/' )[1]
					}, {
						success: function(gameScore) {
						},
						error: function(gameScore, error) {
						}
					});

					$(this[0]).val('');

				} else {
					alert("Niepoprawny email!");
					return false;
				}

		});

});
