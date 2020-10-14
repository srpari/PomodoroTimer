let seconds = "00"; 
let timer_seconds=10;
let timer_minutes;
let seconds_interval;
let minutes_interval;

let pomo_minutes=25;

// Audio 
let bell = new Audio("tea-bell.mp3");


function timer() {
  let Label=document.getElementById("timerBtn").value; 
  
  if (Label=="START") {
        document.getElementById("timerBtn").innerHTML="RESET";
        document.getElementById("timerBtn").value="RESET";
       // timer_minutes = document.getElementById("timer-minutes").innerHTML-1;
       timer_minutes = document.getElementById("timer-minutes").innerHTML;
        
  
        seconds_interval = setInterval(secondsTimer, 1000);
      
        function secondsTimer() {
          
          if (timer_seconds>=0){
            document.getElementById("timer-minutes").innerHTML=timer_minutes-1;  
            document.getElementById("timer-seconds").innerHTML= ('0' + timer_seconds ).slice(-2);
            timer_seconds = timer_seconds-seconds_interval;
          }
          else
          {
            timer_seconds = 09;
            timer_minutes--;
            if(timer_minutes==0) 
            { 
             bell.play();
             clearInterval(seconds_interval);
              // PLay the bell sound to tell the end of session
            // alert("Task Completed");
            }
          }         
        } //seconds timer ends here
      }  
      else if (Label=="RESET") {
        document.getElementById("timerBtn").innerHTML="START";
        document.getElementById("timerBtn").value="START";      
        document.getElementById("timer-minutes").innerHTML = pomo_minutes;
        document.getElementById("timer-seconds").innerHTML = seconds;    
        clearInterval(seconds_interval); 
      }   
}

// timer types "Pomo" "Short" "Long" funtions
function work() {  
  pomo_minutes = 5;
  document.body.style.background = "#f05b56";
  templateTimers();
}
function short() {
  pomo_minutes = 3;
  document.body.style.background = "#4ca6a9";
  templateTimers();
}
function long() {
  pomo_minutes = 4;
  document.body.style.background = "#498fc1";
  templateTimers();
}

// Timer Template funtion -- Initializes the mins,secs & Timer Button
function templateTimers(){
  document.getElementById("timer-minutes").innerHTML = pomo_minutes;
  document.getElementById("timer-seconds").innerHTML = seconds;  
  document.getElementById("timerBtn").innerHTML="START";
  document.getElementById("timerBtn").value="START";   
  timer_seconds=10;
  clearInterval(seconds_interval);
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
