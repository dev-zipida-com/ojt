const root = document.getElementById('root');
const datetime = root.querySelector('#datetime');
const stopwatch = root.querySelector('#stopwatch');
const startButton = root.querySelector('#start');
const pauseButton = root.querySelector('#pause');
const recordButton = root.querySelector('#record');
const resetButton = root.querySelector('#reset');
const recorddatasection = root.querySelector('#recorddatasection');
const recorddatabody = root.querySelector('#recorddatabody');
const clockBlockStyle = root.querySelector('#clockblock');
const stopWatchBlockStyle = root.querySelector('#stopwatchblock')
const toggleButton1 = root.querySelector('#togle1');
const toggleButton2 = root.querySelector('#togle2');

let stopWatchMil = 0
let stopWatchSec = 0
let stopWatchMin = 0
let timerID;
let recordData;

function toglefunc() {
  if(clockBlockStyle.style.display === 'none'){
    stopWatchBlockStyle.style.display = 'none';
    clockBlockStyle.style.display = 'inline';
  }
  else{
    stopWatchBlockStyle.style.display = 'inline';
    clockBlockStyle.style.display = 'none';
  }
}


let timer = setInterval(() => {
  let datefunc = new Date();
  const yy = datefunc.getFullYear();
  const mm = addZero(datefunc.getMonth());
  const date = addZero(datefunc.getDate());

  const hh = addZero(datefunc.getHours());
  const mini = addZero(datefunc.getMinutes());
  const ss = addZero(datefunc.getSeconds());
  
  const Clock_Data = yy+"-"+mm+"-"+date+' '+hh+':'+mini+':'+ss;
  datetime.innerHTML = Clock_Data;
}, 0);

function addZero(num){
  num = num >= 10 ? num : '0' + num;
  return num
}

function timerCycle() {
  timerID = setInterval(() => {
    if(stopWatchMil > 1000) {
      stopWatchMil = 0
      stopWatchSec += 1
    }
    if(stopWatchSec > 60) {
      stopWatchSec = 0
      stopWatchMin += 1
    }
    stopWatchMil+=1;
    // stopWatchMil = addMilZero(stopWatchMil)
  
    recordData = stopWatchMin+":"+stopWatchSec+":"+stopWatchMil
    stopwatch.innerHTML = recordData 
  }, 1);
  console.log(timerID);
}

function recordfunc(){
  recorddatabody.innerHTML += "<li>"
  +recordData
  +"</li>";
}

function resetfunc(){
  recorddatasection.removeChild(recorddatabody);
  clearInterval(timerID)
  recordData = '00:00:000'
  stopwatch.innerHTML = recordData 
}

function init(){
  startButton.addEventListener('click',timerCycle);
  pauseButton.addEventListener('click',function(){
    for(let i=0;i<=timerID;i++){
      clearInterval(i);
      console.log('stop',timerID,i);
    }
  })
  recordButton.addEventListener('click',recordfunc);
  resetButton.addEventListener('click',resetfunc);
  toggleButton1.addEventListener('click',toglefunc);
  toggleButton2.addEventListener('click',toglefunc);
}
init()

