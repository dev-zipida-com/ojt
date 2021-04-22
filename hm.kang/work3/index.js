var toggleWatch = document.getElementById("toggle-clock");
var toggleStop = document.getElementById("toggle-stop");

var clockView = document.getElementById("clock");
var stopWatchView = document.getElementById("stop-watch");

toggleStop.onclick = changeView;
toggleWatch.onclick = changeView;

var toggle = true;

function changeView(e){
    if( toggle ) {
        clockView.hidden = true;
        stopWatchView.hidden = false;
    }else{
        clockView.hidden = false;
        stopWatchView.hidden = true;
    }
    toggle = !toggle;
}

var clockTime = document.getElementById("clock-time");


Date.prototype.getMyTime = function(){
    let year = this.getFullYear();
    let month = this.getMonth();
    let date = this.getDate();

    let hour = this.getHours();
    let minutes  = this.getMinutes();
    let seconds = this.getSeconds();

    return year+ "/" + month + "/" + date + " " + hour + ":" + minutes + ":" + seconds; 
}

Date.prototype.stopWatchTime = function(time){
    let timerDate = new Date(time);
    let timerStr = timerDate.getMinutes() +":" + timerDate.getUTCSeconds() + ":" + timerDate.getMilliseconds();

    return timerStr;
}

setInterval(
    ()=>{
        clockTime.innerHTML = new Date().getMyTime();
    }
    , 1000
)

const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const recordBtn = document.getElementById("record-btn");
const initBtn = document.getElementById("init-btn");

const timeLabel = document.getElementById("stop-watch-timer");

var stopWatchAction = null;
var stopWatchRunning = false;

var startTime = 0;

startBtn.onclick = startTimer;
stopBtn.onclick = stopTimer;

function startTimer(){
    startTime = new Date().getTime();
    if( !stopWatchRunning ){
        timerAction = setInterval(
            () =>{
                timeLabel.innerHTML = Date.prototype.stopWatchTime( new Date().getTime() - startTime);
            }
            , 10
        )
    }
        
}
function stopTimer(){
    clearInterval( timerAction );
}