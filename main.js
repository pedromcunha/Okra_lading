(function(jQuery) {
	$('.next-btn').on('click', function() {
		$('html, body').animate({
	        scrollTop: $('#sectionTwo').offset().top
	    }, 1000);
	});
})();