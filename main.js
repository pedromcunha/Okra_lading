(function(jQuery) {
	var nodeAnimated = false;

	function closeModal() {
		$('.modal-body').animate({
			top: '0'
		}, 500);
		$('.modal-body').slideUp('fast');
		$('.modal-backdrop').fadeOut('fast');
		$('body').removeClass('no-scroll');
	}

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

	$('.close-modal, .modal-backdrop').on('click', closeModal);

	$.fn.center = function () {
	    var left = ( $(window).width() - this.width() ) / 2+$(window).scrollLeft() + "px";
	    this.animate({left: left}, function(){
	        $(this).css({position: 'static', margin: '0 auto'});
	    });
	    return this;
	}

	function validateEmail (email) {
		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    return re.test(email);
	}

	$('#mc-embedded-subscribe').on('click', function() {
		var x = document.forms["mc-embedded-subscribe-form"]["EMAIL"].value;
	    if (x.length !== 0 && validateEmail(x)) {
	        closeModal();
	    }
	});

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