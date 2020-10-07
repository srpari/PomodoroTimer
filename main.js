var work_minutes = 25;
var short_minutes = 5;
var long_minutes = 15;

var seconds = "00";

function work(work_minutes) {
  document.body.style.background = "#f05b56";
  document.getElementById("timer").innerHTML = work_minutes + ":" + seconds;
}
function short(short_minutes) {
  document.body.style.background = "#4ca6a9";
  document.getElementById("timer").innerHTML = short_minutes + ":" + seconds;
}
function long(long_minutes) {
  document.body.style.background = "#498fc1";
  document.getElementById("timer").innerHTML = long_minutes + ":" + seconds;
}

function start_timer() {
  // start the countdown
  var minutes_interval = setInterval(minutesTimer, 60000);
  var seconds_interval = setInterval(secondsTimer, 1000);

  function leftTime() {}
}

function taskCompleted() {
  if ((document.getElementById("act-task").style.textDecoration = "none")) {
    document.getElementById("act-task").style.textDecoration = "line-through";
  } else if (
    (document.getElementById("act-task").style.textDecoration = "line-through")
  ) {
    alert("none");
    document.getElementById("act-task").style.textDecoration = "none";
  }

  //   if ((document.getElementById("cb").style.color = "red")) {
  //     document.getElementById("cb").style.color = "green";
  //   }else {
  //       document.getElementById("cb").style.color = "red"
  //   }
}

function openNewtask() {
  document.getElementById("newtask").style.display = "block";
}

function closeNewtask() {
  document.getElementById("at").value = "";
  document.getElementById("newtask").style.display = "none";
}

function openSettings() {
  document.getElementById("settime").style.display = "block";
}
function closeSettings() {
  document.getElementById("settime").style.display = "none";
}
function saveSettings() {
  work_minutes = document.getElementById("pt").value;
  short_minutes = document.getElementById("st").value;
  long_minutes = document.getElementById("lt").value;
}
