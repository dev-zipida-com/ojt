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

let startInterval //interval함수.

function clock(){
    toggle.classList.add('clock');
    startInterval = setInterval(()=>{
        const time = new Date();
        const year = time.getFullYear(),
            month = time.getMonth() < 10 ? "0"+time.getMonth() : time.getMonth(),
            day = time.getDate() < 10  ? "0"+time.getDate() : time.getDate(),
            hours = time.getHours() <10 ? '0'+time.getHours() : time.getHours() ,
            minutes = time.getMinutes() <10 ? '0'+time.getMinutes() : time.getMinutes(),
            seconds = time.getSeconds() <10 ? '0'+time.getSeconds() : time.getSeconds();

        clockView.innerHTML=`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    },100)

    //clearInterval(startInterval);
}
//
const time = {
    minute : 5, 
    timelabStopwatch : ()=>{
        return console.log(`${this.minute}`)
    }
}

function stopwatch(){
    clearInterval(startInterval);

    start.addEventListener('click',stopwatchInterval);
    pause.addEventListener('click',()=>{
        clearInterval(startInterval);
    });
    // reset.addEventListener('click',()=>{
    //     stopwatchM.innerHTML = '00 : ';
    //     stopwatchS.innerHTML = '00 : ';
    //     stopwatchMs.innerHTML = '00'
    // });
    reset.addEventListener('click',resetTimewatch)
    timelab.addEventListener('click',timeRecord);
}

function resetTimewatch(){
    if(document.querySelector('.recordTimelab') !== null){
        const ul = document.querySelector('.recordTimelab');
        ul.remove()
    }
    stopwatchM.innerHTML = '00 : ';
    stopwatchS.innerHTML = '00 : ';
    stopwatchMs.innerHTML = '00'
}

function timeRecord(){
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

function stopwatchInterval(){
    startInterval = setInterval(()=>{
        let millisecond = parseInt(stopwatchMs.innerHTML),
            second = parseInt(stopwatchS.innerHTML),
            minute = parseInt(stopwatchM.innerHTML);

        if(millisecond==99){ //밀리세컨드 100
            stopwatchMs.innerHTML = "0";
            second = second<9 ? '0' + (second+1) + " : ": second + 1 + " : ";
            stopwatchS.innerHTML = second;
        }else{
            millisecond = millisecond<9 ? '0' + (millisecond+1) : millisecond+1;
            stopwatchMs.innerHTML = millisecond;
        }
        if(second == 60){
            stopwatchS.innerHTML = "00 : ";
            minute = minute <9 ? '0' + (minute+1) + " : " : minute + 1 + " : ";
            stopwatchM.innerHTML = minute;
        }
    },10)
}



function toggleBtn(){ //toggle 입력시 해당 출력 변경.
    if(toggle.className == 'toggle clock'){
        clockView.classList.add('delete');
        stopwatchView.classList.add('delete');
        toggle.className = 'toggle';
        statusName.innerHTML= 'STOPWATCH';
        stopwatch()
    }else{
        clockView.classList.remove('delete');
        stopwatchView.classList.remove('delete');
        toggle.className = 'toggle clock';
        statusName.innerHTML = 'CLOCK'
        clock()
    }
}

clock();
toggle.addEventListener('click',toggleBtn);
    