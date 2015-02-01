(function(jQuery) {
	var nodeAnimated = false;

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

	$.fn.center = function () {
	    var left = ( $(window).width() - this.width() ) / 2+$(window).scrollLeft() + "px";
	    this.animate({left: left}, function(){
	        $(this).css({position: 'static', margin: '0 auto'});
	    });
	    return this;
	}

	$(document).on('scroll', function() {
		if($(window).scrollTop() > 1300 && nodeAnimated === false) {
			setTimeout(function() {
				$('.nodeTree').center();
			}, 1000);
			setTimeout(function() {
				$('.nodeObj').center();
			}, 1500);
			setTimeout(function() {
				$('.nodeKr').center();
			}, 2000);
			setTimeout(function() {
				$('.nodeTask').center();
			}, 2500);		      
			nodeAnimated = true;
		}
	});
})();