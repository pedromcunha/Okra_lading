(function(jQuery) {
	$('.next-btn').on('click', function() {
		$('html, body').animate({
	        scrollTop: $('#sectionTwo').offset().top
	    }, 1000);
	});

	$('.signup-btn').on('click', function() {
		$('.modal-body').slideDown('fast');
		$('.modal-body').animate({
			top: '15%'
		}, 500);
		$('.modal-backdrop').fadeIn('fast');
		$('body').addClass('no-scroll');
	});

	$('.close-modal, .modal-backdrop').on('click', function() {
		$('.modal-body').animate({
			top: '0'
		}, 500);
		$('.modal-body').slideUp('fast');
		$('.modal-backdrop').fadeOut('fast');
		$('body').removeClass('no-scroll');
	});

	$('.modal-body').on('click', function(event) {
		console.log('clicked');
	});

})();