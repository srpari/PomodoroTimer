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
let saveTemp = [];


// Windows onLoad / refresh()
window.onload = function () {
  if (JSON.parse(localStorage.getItem("todoArr")) != null)
  todoArr = JSON.parse(localStorage.getItem("todoArr"));
  //console.log(todoArr);
  displayTodo();
};

function timer() { 
  let Label=document.getElementById("timerBtn").value; 
  
  if (Label=="START") {
        document.getElementById("timerBtn").innerHTML="RESET";
        document.getElementById("timerBtn").value="RESET";
       // timer_minutes = document.getElementById("timer-minutes").innerHTML-1;
       timer_minutes = document.getElementById("timer-minutes").innerHTML;
        
       //clearInterval(seconds_interval);
        seconds_interval = setInterval(secondsTimer, 1000); // calls timer countdown
        
      }  
      else if (Label=="RESET") {
        document.getElementById("timerBtn").innerHTML="START";
        document.getElementById("timerBtn").value="START";        
        document.getElementById("timer-minutes").innerHTML=('0' + (pomo_minutes) ).slice(-2);           
        document.getElementById("timer-seconds").innerHTML =('0' + (seconds) ).slice(-2);    
        clearInterval(seconds_interval); 
      }   
}

// Timer Countdown function 
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
  document.getElementById("timer-seconds").innerHTML =('0' + (seconds) ).slice(-2);   
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
  long();
  short();
  work();
}

// addNewTask to the List 
function saveNewtask() {
  if(document.getElementById("at").value !="") {
    todoArr.push(document.getElementById("at").value);
    //console.log('todoArr :>> ', todoArr);
    if (localStorage.getItem("todoArr") == null) {
      localStorage.setItem("todoArr", JSON.stringify(todoArr));
    } else {
      localStorage.setItem("todoArr", JSON.stringify(todoArr));
    }
    displayTodo();
  }
  else {
    alert ("Pleses add new task !");
  }
  closeNewtask();  
}

function displayTodo() {
 // document.getElementById("task-list").style.display=block;
 document.querySelector(".task-list").innerHTML = "";
 for (let i = 0; i < todoArr.length; i++) {
   document.querySelector(".task-list").innerHTML +=
  "<div class='listItems' id="+i+"'> <button class='btn' onclick='taskCompleted("+i+")'>"+
     "  <i class='fa fa-check-circle' style='font-size: 28px; color: green' "+ 
      " ></i> </button>" + 
    "  <div id='act-task' onclick='updateTask("+i+")' >"+todoArr[i]+"</div> "+
    "<button class='btn' onclick='taskEdit("+i+")'>"+
    "<i class='fa fa-ellipsis-v' style='font-size: 26px; color: black'></i>"+ 
  "</button></div>";
 }
}

function saveEdittask(id){
 todoArr[id]=document.querySelector(".edit-input").value;
 displayTodo();
 closeEdittask();
}

function deleteEdittask(id) {
  var remove=todoArr.splice(id, 1);
  if (localStorage.getItem("todoArr") == null) {
    localStorage.setItem("todoArr", JSON.stringify(todoArr));
  } else {
    localStorage.setItem("todoArr", JSON.stringify(todoArr));
  }
  displayTodo();
  closeEdittask();
  // console.log("removed==="+remove);
  // console.log(todoArr);
}

function updateTask(id) {
  document.querySelector(".current-task").innerHTML =
  "<div>working on</div>"+
  "<div id='task'>"+todoArr[id]+"</div>";  
}

function taskEdit(id) {
  document.getElementById("edittask").style.display = "block";
  let removeStrike = todoArr[id];
  document.querySelector(".edit-input").value=removeTags(removeStrike);
  document.querySelector(".editsave").setAttribute("id",id);
  document.querySelector(".editdelete").setAttribute("id",id);
}


function taskCompleted(id) {
  if (todoArr[id].includes("<strike>")) {
    todoArr[id] = todoArr[id].replace("<strike>", "");
    todoArr[id] = todoArr[id].replace("</strike>", "");
  } else {
    todoArr[id] = todoArr[id].strike();
  }
//  console.log("todoArr===>"+todoArr);
if (localStorage.getItem("todoArr") == null) {
  localStorage.setItem("todoArr", JSON.stringify(todoArr));
} else {
  localStorage.setItem("todoArr", JSON.stringify(todoArr));
}
  displayTodo();
}

function delCompletedTasks() {
  let delArr =[];
  let delIndex=0;
  for (let i = 0; i < todoArr.length; i++) {
    if (todoArr[i].includes("<strike>")) {
      delArr[delIndex]=todoArr[i];
      delIndex++;
    }
  } 
  todoArr = todoArr.filter(item => !delArr.includes(item));
  // console.log("deleted===>"+delArr);  
  // console.log("todoArr===>"+todoArr);  
  if (localStorage.getItem("todoArr") == null) {
    localStorage.setItem("todoArr", JSON.stringify(todoArr));
  } else {
    localStorage.setItem("todoArr", JSON.stringify(todoArr));
  }
  displayTodo();
  document.getElementById("tm").style.display="none";
}

function saveTemplate() {
  let temparr = [];
  temparr = todoArr;
  for (let i = 0; i < temparr.length; i++) {
      saveTemp[i]=removeTags(temparr[i]);
  }
  //console.log("saveTemp===>"+saveTemp); 
  //console.log("todoArr===>"+todoArr);
  document.getElementById("tm").style.display="none";
}

function addTemplate () {
  todoArr = todoArr.concat(saveTemp);
 // console.log("addTemplate===>"+todoArr);
  displayTodo();
  document.getElementById("tm").style.display="none";
}

function openNewtask() {
  document.getElementById("newtask").style.display = "block";
}

function closeEdittask () {
  document.querySelector(".edit-input").value = "";
  document.getElementById("edittask").style.display = "none";
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

function openTaskMenu(){
  document.getElementById("tm").style.display="block";
}

function onlyNumberKey(evt) {           
  // Only ASCII charactar in that range allowed 
  var ASCIICode = (evt.which) ? evt.which : evt.keyCode 
  if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) 
      return false; 
  return true; 
} 

function removeTags(str) { 
  if ((str===null) || (str==='')) 
      return false; 
  else
      str = str.toString();         
  // Regular expression to identify HTML tags in  
  // the input string. Replacing the identified  
  // HTML tag with a null string. 
  return str.replace( /(<([^>]+)>)/ig, ''); 
} 