const clockView = document.querySelector('.clock-view'), //clock,stopwatch 화면 전환
    stopwatchView = document.querySelector('.stopwatch-view'),
    toggle = document.querySelector('.toggle'),
    statusName = document.querySelector('.status-name');

let stopwatchMs = document.querySelector('.stopwatch-ms'),
    stopwatchS = document.querySelector('.stopwatch-second'),
    stopwatchM = document.querySelector('.stopwatch-minute');
     //stopwatch 시간

const start = document.querySelector('.stopwatch-start'), //stopwatch 버튼
    pause = document.querySelector('.stopwatch-pause'),
    reset = document.querySelector('.stopwatch-reset'),
    timelab = document.querySelector('.stopwatch-timelab');

const TIME = new Date();

let clockInterval,stopwatchInterval //interval함수

// Date.prototype.clock = ()=>{
//     startInterval : setInterval(()=>{
//         const year = time.getFullYear(),
//             month = time.getMonth() < 10 ? "0"+time.getMonth() : time.getMonth(),
//             day = time.getDate() < 10  ? "0"+time.getDate() : time.getDate(),
//             hours = time.getHours() <10 ? '0'+time.getHours() : time.getHours() ,
//             minutes = time.getMinutes() <10 ? '0'+time.getMinutes() : time.getMinutes(),
//             seconds = time.getSeconds() <10 ? '0'+time.getSeconds() : time.getSeconds();

//         clockView.innerHTML=`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
//     },100000)
// }
//clock
Date.prototype.clock = function(){
    this.year = date.getFullYear();
    this.month = date.getMonth() < 10 ? "0"+date.getMonth() : date.getMonth(),
    this.day = date.getDate () < 10  ? "0"+date.getDate() : date.getDate(),
    this.hours = date.getHours() <10 ? '0'+date.getHours() : date.getHours() ,
    this.minutes = date.getMinutes() <10 ? '0'+date.getMinutes() : date.getMinutes(),
    this.seconds = date.getSeconds() <10 ? '0'+date.getSeconds() : date.getSeconds();
    clockView.innerHTML=`${this.year}-${this.month}-${this.day} ${this.hours}:${this.minutes}:${this.seconds}`;
}

Date.prototype.clockStart = function(){
    clockInterval = setInterval(()=>{
        date = new Date()
        TIME.clock(date)
    },100)
}

Date.prototype.stopInterval = function(){
    clearInterval(clockInterval);
}

//stopwatch
Date.prototype.resetTimewatch = function(){
    if(document.querySelector('.recordTimelab') !== null){
        const ul = document.querySelector('.recordTimelab');
        ul.remove()
    }
    stopwatchM.innerHTML = '00 : ';
    stopwatchS.innerHTML = '00 : ';
    stopwatchMs.innerHTML = '00'
}

Date.prototype.timeRecord = function(){
    const li = document.createElement('li');
    li.innerHTML = `${stopwatchM.innerHTML} ${stopwatchS.innerHTML} ${stopwatchMs.innerHTML}`;

    if(document.querySelector('.recordTimelab') === null){
        const ul = document.createElement('ul');
        ul.className = 'recordTimelab'
        ul.append(li);
        stopwatchView.append(ul);
    }else{
        const ul = document.querySelector('.recordTimelab')
        ul.append(li)
    }    
}

Date.prototype.stopwatchStart = function(){
    if(stopwatchInterval == false){
        stopwatchInterval = setInterval(()=>{
            let millisecond = parseInt(stopwatchMs.innerHTML),
                second = parseInt(stopwatchS.innerHTML),
                 minute = parseInt(stopwatchM.innerHTML);

            if(millisecond==99){ //밀리세컨드 100마다 1초추가.
                stopwatchMs.innerHTML = "0";
                second = second<9 ? '0' + (second+1) + " : ": second + 1 + " : ";
                stopwatchS.innerHTML = second;
            }else{
                millisecond = millisecond<9 ? '0' + (millisecond+1) : millisecond+1;
                stopwatchMs.innerHTML = millisecond;
            }
            if(second == 60){//60초마다 1분추가.
                stopwatchS.innerHTML = "00 : ";
                minute = minute <9 ? '0' + (minute + 1) + " : " : minute + 1 + " : ";
                stopwatchM.innerHTML = minute;
            }
        },10)
    }
}


Date.prototype.stopwatch = function(){   
    stopwatchInterval = false;
    start.addEventListener('click',TIME.stopwatchStart);
    pause.addEventListener('click',()=>{
        clearInterval(stopwatchInterval);
        stopwatchInterval=false;
    });
    reset.addEventListener('click',TIME.resetTimewatch);
    timelab.addEventListener('click',TIME.timeRecord);
}

function toggleBtn(){ //toggle 입력시 해당 출력 변경.
    if(toggle.className == 'toggle clock'){
        clockView.classList.add('delete');
        stopwatchView.classList.add('delete');
        toggle.className = 'toggle stopwatch';
        statusName.innerHTML= 'STOPWATCH';
        TIME.stopInterval();
        TIME.stopwatch()
    }else{
        clockView.classList.remove('delete');
        stopwatchView.classList.remove('delete');
        toggle.className = 'toggle clock';
        statusName.innerHTML = 'CLOCK';
        TIME.clockStart()
    }
}


toggle.addEventListener('click',toggleBtn);
    