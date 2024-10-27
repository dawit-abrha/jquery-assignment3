const start = document.getElementById("start");
const stop = document.getElementById("stop");

let intervalId; // Variable to hold the interval ID

function dec_hr() {
    let hr = parseInt($('.hr').html());
    if (hr !== 0) {
        if ((hr - 1) < 10) {
            $('.hr').html('0' + (hr - 1));
        } else {
            $('.hr').html(hr - 1);
        }
        $('.min').html(59);
        $('.sec').html(59);
    } else {
        $('.hr').html(23);
    }
}

function dec_min() {
    let min = parseInt($('.min').html());
    if (min !== 0) {
        if ((min - 1) < 10) {
            $('.min').html('0' + (min - 1));
        } else {
            $('.min').html(min - 1);
        }
        $('.sec').html(59);
    } else {
        dec_hr();
    }
}

function update() {
    $('.sec').each(function() {
        let secnd = parseInt($(this).html());
        if (secnd !== 0) {
            if (secnd - 1 < 10) {
                $(this).html("0" + (secnd - 1));
            } else {
                $(this).html(secnd - 1);
            }
        } else {
            dec_min();
        }
    });
}

$(document).ready(function() {
    start.addEventListener('click', () => {
        // Start the countdown
        if (!intervalId) { // Prevent multiple intervals
            intervalId = setInterval(update, 1000);
        }
    });

    stop.addEventListener('click', () => {
        clearInterval(intervalId);
        intervalId = null; // Reset intervalId to allow restarting
    });
});