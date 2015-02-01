(function(jQuery) {
	$('.next-btn').on('click', function() {
		$('html, body').animate({
	        scrollTop: $('#sectionTwo').offset().top
	    }, 1000);
	});

	$('.signup-btn').on('click', function() {
		$('.modal-backdrop').fadeIn('slow');
		$('body').addClass('no-scroll');
	});

	$('.close-modal, .modal-backdrop').on('click', function() {
		$('.modal-backdrop').fadeOut('slow');
		$('body').removeClass('no-scroll');
	});

})();