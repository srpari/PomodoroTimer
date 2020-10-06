var work_minutes = 25;
var short_minutes = 5;
var long_minutes = 15;

var seconds = "00";

function work() {
  document.getElementById("timer").innerHTML = work_minutes + ":" + seconds;
}
function short() {
  document.getElementById("timer").innerHTML = short_minutes + ":" + seconds;
}
function long() {
  document.getElementById("timer").innerHTML = long_minutes + ":" + seconds;
}

function start_timer() {
  // start the countdown
  var minutes_interval = setInterval(minutesTimer, 60000);
  var seconds_interval = setInterval(secondsTimer, 1000);

  function leftTime() {}
}
