(function(jQuery) {
    var nodeAnimated = false,
        jsPlumbDefaults = {
            PaintStyle: {
                lineWidth: 3,
                strokeStyle: "#99b742",
                outlineWidth: 1
            },
            EndpointStyle: {
                fillStyle: "#99b742",
                radius: 4
            },
            Connector: ["Bezier", {
                curviness: 20
            }],
            Anchors: ["BottomCenter", "TopCenter"]
        };
    jsPlumb.importDefaults(jsPlumbDefaults);

    function closeModal() {
        $('.modal-body').animate({
            top: '0'
        }, 500);
        $('.modal-body').slideUp('fast');
        $('.modal-backdrop').fadeOut('fast');
        $('body').removeClass('no-scroll');

        $('#mce-EMAIL').val("");
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

        $("#mce-EMAIL").focus();
    });

    $('.close-modal, .modal-backdrop').on('click', closeModal);

    $.fn.center = function() {
        var left = ($(window).width() - this.width()) / 2 + $(window).scrollLeft() + "px";
        this.animate({
            left: left
        }, function() {
            $(this).css({
                position: 'static',
                margin: '0 auto'
            });
        });
        return this;
    }

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    $('#mc-embedded-subscribe').on('click', function() {
        function showError(msg) {
            $('#mce-EMAIL').css("border", "2px solid #E41E1E");
            $('#mce-EMAIL').css("outline", "none");
            $('#errorMsg').css("display", "block");
            $('#errorMsg').html(msg);
            setTimeout(function() {
            	$('#errorMsg').fadeOut();
            	$('#mce-EMAIL').css("border", "2px inset");
                $('#mce-EMAIL').val("");
            }, 1550);
        }

        function showSuccess(msg) {
            $('#successMsg').css("display", "block");
            $('#successMsg').html(msg);
            setTimeout(function() {
                closeModal();
            }, 700);
            setTimeout(function() {
                $('#successMsg').toggle();
            }, 900);
        }

        function callback(data) {
            if (data.status === 200) {
                showSuccess(data.msg);
            } else {
                showError(data.msg)
            }
        }

        var email = $("#mce-EMAIL").val();

        if (validateEmail(email)) {
            var payload = {
                "email": email
            };
            $.ajax({
                type: "POST",
                url: "https://immense-eyrie-7172.herokuapp.com/signup",
                data: JSON.stringify(payload),
                success: callback,
                dataType: "json",
                contentType: "application/json"
            });
        } else {
            showError("Please enter a valid email address!");
        }
    });

    $(document).on('scroll', function() {
        if ($(window).scrollTop() > 1300 && nodeAnimated === false) {
            setTimeout(function() {
                $('.nodeTree').center();
                $('#list1').center();
            }, 1000);
            setTimeout(function() {
                $('#row1').center();
                $('#list2').center();
            }, 2000);
            setTimeout(function() {
                $('#row2').center();
                $('#list3').center();
            }, 3000);
            setTimeout(function() {
                $('#row3').center();
                $('#list4').center();
                $('#list5').center();
            }, 4000);

            setTimeout(function() {
                jsPlumb.connect({
                    source: "objective1",
                    target: "keyResult1"
                });
            }, 4300);

            setTimeout(function() {
                jsPlumb.connect({
                    source: "objective1",
                    target: "keyResult2"
                });
            }, 4500);

            nodeAnimated = true;
        }
    });

    //when resize
    $(window).resize(function() {
        jsPlumb.repaintEverything();
    });

})();