$(document).ready(function() {
	
	/*  Links with scroll positions */
	$("a[href='#top']").click(function() {
	  $("html, body").animate({ scrollTop: 0 }, "slow");
	  return false;
	});

	$("a[href='#contact']").click(function() {
	  $("html, body").animate({ scrollTop: $('.section-seven').offset().top }, "slow"); 
	});

	$("a[href='#portfolio']").click(function() {
	  $("html, body").animate({ scrollTop: $('.section-five').offset().top }, "slow"); 
	});

	$("a[href='#sf']").click(function() {
	  $("html, body").animate({ scrollTop: $('.section-two').offset().top }, "slow"); 
	});

	/* showing and hiding home button */
	$(window).on('scroll', function() {
		console.log($(window).scrollTop());
		if(($(window).scrollTop() > 50)) {
			$('.home').show();
			$('footer').show();
		} 
		else {
			$('.home').hide();
			$('footer').hide();
		}
	})
	

	/* Parallax magic */
	$(window).scroll(function(){
		$('*[class^="prlx"]').each(function(r){
			var pos = $(this).offset().top;
			var scrolled = $(window).scrollTop();
	    	$('*[class^="prlx"]').css('top', -(scrolled * .5) + 'px');			
	    });
	});

	/*$(window).on('scroll', function() {

		if(($(window).scrollTop() > 90)) {
			$("html, body").animate({ scrollTop: $('.section-two').offset().top }, "slow");
		} 
		else {
			$('.home').hide();
			$('footer').hide();
		}
	}) */


/* var iScrollPos = 0;

$(window).scroll(function () {
    var iCurScrollPos = $(this).scrollTop();
    if (iCurScrollPos > iScrollPos && ($(window).scrollTop() > 90)) {
        $("html, body").animate({ scrollTop: $('.section-two').offset().top }, "slow");
    } 

   
}); */


});	