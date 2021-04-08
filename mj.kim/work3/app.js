const root = document.getElementById('root');

const chooseWord = root.querySelector('#choose-word');
const clockSection = root.querySelector('.time-section');
const stopwatchSection = root.querySelector('.stopwatch-section');
const nowTime = root.querySelector('#now-time');
const stopwatchTime = root.querySelector('#stopwatch-time');
const toggleBtn = root.querySelector('#toggleBtn');
const recordList = root.querySelector('#record-list');

// stopwatch button
const startBtn = root.querySelector('#start-btn');
const pauseBtn = root.querySelector('#pause-btn');
const recordBtn = root.querySelector('#record-btn');
const resetBtn = root.querySelector('#reset-btn');

let nowDateTime = new Date();
let now = new Date();

let minutes = 0;
let seconds = 0;
let mseconds = 0;
let recordTime = "00:00:000";
let timer; // 스탑워치 Interval
let clock; // clock Interval

// let recordArray = []; 

let startBtnActivation = false; // start버튼 활성화 유무 변수

let pauseTime = 0; // pause 눌렀다가 다시 start버튼 누를 때 시간 알아내기 위한 변수

startBtn.addEventListener('click', function() {
    console.log("startBtn click!!");
    if(startBtnActivation) return; // 스탑워치 시간재기 활성화 중일 시 그냥 return
    startBtnActivation = true; // 스탑워치 시간재기 활성화 중
    clearInterval(timer);
    nowDateTime = new Date();
    timer = setInterval(startTimer, 10); // 10miliSecond 초마다 Interval
});

function startTimer() {
    if(!pauseTime) {
        now = new Date();
    } else {
        now = Date.now() + pauseTime;
    }
    mseconds = (now - nowDateTime) % 1000;
    seconds = parseInt((now - nowDateTime) / 1000 % 60);
    minutes = parseInt((now - nowDateTime) / 1000 / 60);

    // 10의 자리가 수가 없을 시 10의자리 수에 0을 붙혀주는 작업
    mseconds = mseconds < 10 ? mseconds = "00" + mseconds : mseconds < 100 ? "0" + mseconds : mseconds;
    seconds = seconds < 10 ? seconds = "0" + seconds : seconds;
    minutes = minutes < 10 ? minutes = "0" + minutes : minutes;

    recordTime = stopwatchTime.innerText = minutes + ":" + seconds + ":" + mseconds;
}


pauseBtn.addEventListener('click', function() {
    startBtnActivation = false; // 스탑워치 시간 재기 비활성화
    clearInterval(timer);
    pauseTime = now - nowDateTime; // 다음 start버튼 누를때 pauseTime을 알아야 이어서 시간재기 가능
    console.log(pauseTime);
    
});

resetBtn.addEventListener('click', function() {
    startBtnActivation = false; // 스탑워치 시간 재기 비활성화
    clearInterval(timer);
    pauseTime = 0;
    minutes = 0;
    seconds = 0;
    mseconds = 0;

    removeListChild();
    recordTime="00:00:000";
    stopwatchTime.innerText = "00:00:000";
});

function removeListChild() { // record에 저장된 list 전부 삭제
    while(recordList.hasChildNodes()) {
        recordList.removeChild(recordList.firstChild);
    }
}

recordBtn.addEventListener('click', function() {
    
    const li = document.createElement('li');
    const span = document.createElement('span');

    console.log(recordTime + '기록');
    // recordArray.push(recordTime);

    span.innerText = recordTime;
    li.appendChild(span);

    // recordArray.forEach((data, idx) => {
    //     recordList.appendChild(li);
    // });
    recordList.appendChild(li);

});
function currentTime() { // CLOCK-SECTION 에 출력할 현재 시간 구하는 함수
    const currentClock = new Date();
    let year = currentClock.getFullYear();
    let month = currentClock.getMonth() + 1;
    let date = currentClock.getDate();
    let hours = currentClock.getHours();
    let minutes = currentClock.getMinutes();
    let seconds = currentClock.getSeconds();
    month = month < 10 ? "0" + month : month;
    date = date < 10 ? "0" + date : date;
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    nowTime.innerText = year + '-' + month + '-' + date + ' ' + hours + ':' + minutes + ':' + seconds;
}

// 스톱워치 시간 초기화
function startStopWatch() {
    stopwatchTime.innerText = "00:00:000";
}

function onToggleClick() {
    console.log('Toggle Click!!!!!');
    if(nowTime.style.display == 'none') {
        console.log("nowTIme style ======= none");
        chooseWord.innerText = "CLOCK";
        nowTime.style.display = 'block';
        stopwatchTime.style.display = 'none';
        stopwatchSection.style.display = 'none';
        clearInterval(timer); // 스톱워치 interval clear
        intervalClock();
    } else {
        console.log("nowTIme style ======= block");
        removeListChild();
        recordTime = "00:00:000";
        chooseWord.innerText = "STOPWATCH";
        nowTime.style.display = 'none';
        stopwatchTime.style.display = 'block';
        stopwatchSection.style.display = 'block';
        clearInterval(clock); // 현재 시간 구하는 interval clear
        // 스톱워치에 필요한 기능 초기화
        startStopWatch();
        startBtnActivation = false;
        pauseTime = 0;
    }
}

function intervalClock() {
    clock = setInterval(currentTime, 10);
}

function init() {
    chooseWord.innerText = "CLOCK";

    intervalClock();
    // setInterval(clock, 1000);
}

init();