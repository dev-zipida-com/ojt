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
    let year = leadingZeros( this.getFullYear(),2 );
    let month = leadingZeros(this.getMonth(),2);
    let date = leadingZeros(this.getDate(),2);
    let hour = leadingZeros(this.getHours(),2);
    let minutes  = leadingZeros(this.getMinutes(),2);
    let seconds = leadingZeros(this.getSeconds(),2);
    return year+ "/" + month + "/" + date + " " + hour + ":" + minutes + ":" + seconds; 
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
const resetBtn = document.getElementById("reset-btn");

const timeLabel = document.getElementById("stop-watch-timer");

const recordDiv = document.getElementById("record-section");

var stopWatchAction = null;
var stopWatchRunning = false;

Date.prototype.stopWatchTime = function(time){
    let timerDate = new Date(time);
    let timerStr =leadingZeros( timerDate.getMinutes(),2) +":" + leadingZeros(timerDate.getUTCSeconds(),2) + ":" + leadingZeros(timerDate.getMilliseconds(),3);

    return timerStr;
}

var pastTime = 0;
var curTime = 0;

var curTimer = 0;

startBtn.onclick = startTimer;
stopBtn.onclick = stopTimer;
recordBtn.onclick = recordTime;
resetBtn.onclick = resetTimer;

function startTimer(){
    if( !stopWatchAction ){
        curTime = new Date().getTime();

        stopWatchAction = setInterval(
            () =>{
                pastTime = curTime;
                curTime = new Date().getTime();
                let spentTime = curTime - pastTime;
                curTimer += spentTime;
                timeLabel.innerHTML = Date.prototype.stopWatchTime( curTimer );
            }
            , 10
        )
    }
}

function stopTimer(){
        clearInterval( stopWatchAction );
        stopWatchAction = null;
}

function resetTimer(){
    curTimer = 0;
    timeLabel.innerHTML = "00:00:000";
    while ( recordDiv.hasChildNodes() ) { recordDiv.removeChild( recordDiv.firstChild ); }

}

function recordTime(){
    let timeRecord = document.createElement("li");
    timeRecord.innerHTML = Date.prototype.stopWatchTime(curTimer);
    recordDiv.append( timeRecord );
}


function leadingZeros( time , length){
    let str = time.toString();
    while( str.length < length){
        str = "0" + str;
    }
    return str;
}