var hourHeading = document.getElementById("hour");
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var bg = document.getElementsByClassName("outer-circle");

var hour = 0;
var min = 0;
var sec = 0;
var msec = 0;
var interval;

function timer() {
  msec++;
  msecHeading.innerHTML = msec;
  if (msec >= 100) {
    sec++;
    secHeading.innerHTML = sec + ":";
    msec = 0;
  } else if (sec >= 60) {
    min++;
    minHeading.innerHTML = min + ":";
    sec = 0;
  } else if (min >= 60) {
    hour++;
    hourHeading.innerHTML = hour + ":";
    min = 0;
  }
}

function play() {
  var start = document.getElementById("startbtn");
  interval = setInterval(timer, 10);
  start.disabled = true;
}

function pause() {
  var start = document.getElementById("startbtn");
  clearInterval(interval);
  start.disabled = false;
}

function reset() {
  hour = 0;
  min = 0;
  sec = 0;
  msec = 0;
  hourHeading.innerHTML = hour + ":";
  minHeading.innerHTML = min + ":";
  secHeading.innerHTML = sec + ":";
  msecHeading.innerHTML = msec;
  pause();

}
