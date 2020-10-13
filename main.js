let seconds = "00"; 
let timer_seconds=10;
let timer_minutes;
let seconds_interval;
 let minutes_interval


function timer() {

  let Label=document.getElementById("timerBtn").value;
 
  
  if (Label=="START") {
        document.getElementById("timerBtn").innerHTML="STOP";
        document.getElementById("timerBtn").value="STOP";
       // timer_minutes = document.getElementById("timer-minutes").innerHTML-1;
       timer_minutes = document.getElementById("timer-minutes").innerHTML;
        
        seconds_interval = setInterval(secondsTimer, 1000);
      
        //  minutes_interval = setInterval(minutesTimer, 60000);

          function minutesTimer() {
            
          /*if (timer_minutes>0){
            timer_minutes = timer_minutes-minutes_interval;
            document.getElementById("timer-minutes").innerHTML=timer_minutes;
          }
          } */
        }

        function secondsTimer() {
          document.getElementById("timer-minutes").innerHTML=timer_minutes-1;   
          if (timer_seconds>=0){
            document.getElementById("timer-seconds").innerHTML= ('0' + timer_seconds ).slice(-2);
            timer_seconds = timer_seconds-seconds_interval;
          }
          else{
            timer_seconds = 10;
            timer_minutes--;
         //   clearInterval(seconds_interval);
          }
        }
      }  
      else if (Label=="STOP") {
            document.getElementById("timerBtn").innerHTML="START";
            document.getElementById("timerBtn").value="START";            
            clearInterval(seconds_interval);
      }
  
  
}



function work() {
  let work_minutes = 25;
  document.body.style.background = "#f05b56";
  document.getElementById("timer-minutes").innerHTML = work_minutes;
  document.getElementById("timer-seconds").innerHTML = seconds;
}
function short() {
  let short_minutes = 5;
  document.body.style.background = "#4ca6a9";
  document.getElementById("timer-minutes").innerHTML = short_minutes;
  document.getElementById("timer-seconds").innerHTML = seconds;
}
function long() {
  let long_minutes = 15;
  document.body.style.background = "#498fc1";
  document.getElementById("timer-minutes").innerHTML = long_minutes;
  document.getElementById("timer-seconds").innerHTML = seconds;
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
  document.getElementById("timer").innerHTML = work_minutes + ":" + seconds;
  document.getElementById("timer").innerHTML = short_minutes + ":" + seconds;
  document.getElementById("timer").innerHTML = long_minutes + ":" + seconds;
}
