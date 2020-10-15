let seconds = "00"; 
let timer_seconds=10;
let timer_minutes;
let seconds_interval;
let minutes_interval;

// used to reset the minutes timer
let pomo_minutes=25;

//temp variables for each timer types
let work_minutes=25,short_minutes=5,long_minutes=15;

// Audio 
let bell = new Audio("tea-bell.mp3");

//todoList
let todoArr = [];

function timer() { 
  let Label=document.getElementById("timerBtn").value; 
  
  if (Label=="START") {
        document.getElementById("timerBtn").innerHTML="RESET";
        document.getElementById("timerBtn").value="RESET";
       // timer_minutes = document.getElementById("timer-minutes").innerHTML-1;
       timer_minutes = document.getElementById("timer-minutes").innerHTML;
        
       //clearInterval(seconds_interval);
        seconds_interval = setInterval(secondsTimer, 1000);
      
        function secondsTimer() {
          
          if (timer_seconds>=0){
            //document.getElementById("timer-minutes").innerHTML=timer_minutes-1;  
            document.getElementById("timer-minutes").innerHTML=('0' + (timer_minutes-1) ).slice(-2);
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

// Initialize timer types "Pomo" "Short" "Long" funtions
function work() {  
  pomo_minutes = work_minutes;
  document.body.style.background = "#f05b56";
  templateTimers();
}
function short() {
  pomo_minutes = short_minutes;
  document.body.style.background = "#4ca6a9";
  templateTimers();
}
function long() {
  pomo_minutes = long_minutes;
  document.body.style.background = "#498fc1";
  templateTimers();
}

// Timer Template funtion -- Initializes the mins,secs & Timer Button
function templateTimers(){
 // document.getElementById("timer-minutes").innerHTML = pomo_minutes;
  document.getElementById("timer-minutes").innerHTML=('0' + (pomo_minutes) ).slice(-2);           
  document.getElementById("timer-seconds").innerHTML = seconds;  
  document.getElementById("timerBtn").innerHTML="START";
  document.getElementById("timerBtn").value="START";   
  timer_seconds=10;
  clearInterval(seconds_interval);
 
  //clearTimeout(seconds_interval);
}

// function to set customized time
function saveSettings() {
  work_minutes = document.getElementById("pt").value;
  short_minutes = document.getElementById("st").value;
  long_minutes = document.getElementById("lt").value;
  closeSettings();
}


// addNewTask to the List 
function saveNewtask() {
  if(document.getElementById("at").value !="") {
    todoArr.push(document.getElementById("at").value);
    //console.log('todoArr :>> ', todoArr);
    
 // document.getElementById("task-list").style.display=block;
    document.querySelector(".task-list").innerHTML = "";
    for (let i = 0; i < todoArr.length; i++) {
      document.querySelector(".task-list").innerHTML +=
     "<div class='listItems' id="+i+"'> <button class='btn' onclick='taskCompleted("+i+")'>"+
        "  <i class='fa fa-check-circle' style='font-size: 28px; color: green' "+ 
         " ></i> </button>" + 
       "  <div id='act-task' onclick='updateTask("+i+")' >"+todoArr[i]+"</div> "+
       "<button class='btn' onclick=alert('123')>"+
       "<i class='fa fa-ellipsis-v' style='font-size: 26px; color: black'></i>"+ 
     "</button></div>";
    }
  }
  else {
    alert ("Pleses add new task !");
  }
  closeNewtask();  
}

function updateTask(id) {
  alert(todoArr[id]);
  document.querySelector(".current-task").innerHTML =
  "<div>working on</div>"+
  "<div id='task'>"+todoArr[id]+"</div>";
}

function taskCompleted(id) {
  if ((document.getElementById("act-task").style.textDecoration = "none")) {
    document.getElementById("act-task").style.textDecoration = "line-through";
  } 
  else {
    alert("Im here");
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



function onlyNumberKey(evt) {           
  // Only ASCII charactar in that range allowed 
  var ASCIICode = (evt.which) ? evt.which : evt.keyCode 
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) 
      return false; 
  return true; 
} 