var $canvas = $('#canvas-path');
var ctx = $canvas[0].getContext('2d');
var height = $canvas[0].height;
var width = $canvas[0].width;

// Draw a sine wave on a canvas
$canvas.tween(function(now, fx) {
    var t = fx.pos; // current time
    var p = $.curve.sine(t, {
        x: 0,
        y: height / 2,
        amp: height / 2,
        wavelength: width
    });
    var x = p[0];
    var y = p[1];

    // start the path
    if (fx.pos === 0) {
        ctx.moveTo(x, y);
        ctx.beginPath();
    }

    // draw a line
    ctx.lineTo(x, y);
    ctx.stroke();
}, 3000);