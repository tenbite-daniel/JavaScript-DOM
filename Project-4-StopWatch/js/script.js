// VARIABLES FOR BUTTONS
const startStopBtn = document.querySelector("#start-stop-btn");
const resetBtn = document.querySelector("#reset-btn");

// VARIABLES FOR TIME VVALUES
let seconds = 0;
let minutes = 0;
let hours = 0;

// VARIABLES FOR LEADING ZERO
let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// VARIABLES FOR SET INTERVAL & TIMERSTATUS
let timerInterval = null;
let timerStatus = "Stopped";
// STOP WATCH FUNCTION
function stopWatch() {
    seconds++;
    if (seconds / 60 === 1) {
        seconds = 0;
        minutes++;
        if (minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }
    // SECONDS
    if (seconds < 10) {
        leadingSeconds = "0" + seconds.toString();
    } else {
        leadingSeconds = seconds;
    }
    // MINUTES
    if (minutes < 10) {
        leadingMinutes = "0" + minutes.toString();
    } else {
        leadingMinutes = minutes;
    }
    // HOURS
    if (hours < 10) {
        leadingHours = "0" + hours.toString();
    } else {
        leadingHours = hours;
    }
    let displayTimer = (document.getElementById("timer").innerText =
        leadingHours + ":" + leadingMinutes + ":" + leadingSeconds);
}

startStopBtn.addEventListener("click", function () {
    if (timerStatus === "stopped") {
        timerInterval = window.setInterval(stopWatch, 1000);
        document.querySelector(
            "#start-stop-btn"
        ).innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
        timerStatus = "started";
    } else {
        window.clearInterval(timerInterval);
        document.querySelector(
            "#start-stop-btn"
        ).innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
        timerStatus = "stopped";
    }
});
resetBtn.addEventListener("click", function () {
    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("timer").innerText = "00:00:00";
    if (timerStatus === "started") {
        document.querySelector(
            "#start-stop-btn"
        ).innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
        timerStatus = "stopped";
    }
});
