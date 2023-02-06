const root = document.getElementById('root');

// CLOCK --------------------------------------------
const clock = document.createElement('div');
clock.id = 'clock';

const clockHeader = document.createElement('h1');
clockHeader.textContent = 'CLOCK';

const clockContent = document.createElement('h2');

const toggle = document.createElement('button');
toggle.textContent = 'TOGGLE';
toggle.id = 'toggle';
toggle.onclick = changeToggle;

// STOPWATCH ----------------------------------------
const stopwatch = document.createElement('div');
stopwatch.id = 'stopwatch';

const stopwatchHeader = document.createElement('h1');
stopwatchHeader.textContent = 'STOPWATCH';

const stopwatchContent = document.createElement('h2');
stopwatchContent.textContent = '00:00:000';

const buttonList = document.createElement('div');
buttonList.className = 'buttonList';

const start = document.createElement('button');
start.textContent = 'START';
start.id = 'start';
start.onclick = timerStart;

const pause = document.createElement('button');
pause.textContent = 'PAUSE';
pause.id = 'pause';
pause.onclick = timerStop;

const record = document.createElement('button');
record.textContent = 'RECORD';
record.id = 'record';
record.onclick = timerRecord;

const reset = document.createElement('button');
reset.textContent = 'RESET';
reset.id = 'reset';
reset.onclick = timerReset;

const recordList = document.createElement('ul');
recordList.id = 'recordList';

// 생성한 태그 부모자식 관계 매핑 ----------------------------
clock.appendChild(clockHeader);
clock.appendChild(clockContent);

buttonList.appendChild(start);
buttonList.appendChild(pause);
buttonList.appendChild(record);
buttonList.appendChild(reset);

stopwatch.appendChild(stopwatchHeader);
stopwatch.appendChild(stopwatchContent);

root.appendChild(clock);
root.appendChild(stopwatch);
root.appendChild(toggle);
root.appendChild(buttonList);
root.appendChild(recordList);

// CLOCK 동작함수 생성 ---------------------------------------
function init() {
  getTime();
  stopwatch.style.display = 'none';
  buttonList.style.display = 'none';
  setInterval(getTime, 1000);
  setInterval(display, 10);
}

// 현재시간 조회 + 형식
function getTime() {

    var today = new Date();
    var options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false};
    var date = today.toLocaleTimeString("ko", options);
    clockContent.textContent = date;
}

// Toggle 클릭 시 CLOCK <-> STOPWATCH 전환
function changeToggle() {
  if (clock.style.display === 'none') {

    stopwatch.style.display = 'none';
    buttonList.style.display = 'none';
    recordList.style.display = 'none';
    clock.style.display = 'block';
  } 
  else {

    stopwatch.style.display = 'block';
    buttonList.style.display = 'block';
    recordList.style.display = 'block';
    clock.style.display = 'none';
  }
}

// STOPWATCH 동작 함수 선언 --------------------------
let startTime = 0;
let intervalId;
let elapsedTime = 0;
let running;

function timerStart() {
  if (running)
    return;
  running = true;
  startTime = Date.now();
  intervalId = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    display();
  }, 10);
};

function timerStop() {
  if (!running)
    return;
  running = false;
  clearInterval(intervalId);
};

function timerRecord() {
  const recordAdd = document.createElement('li');
  recordAdd.textContent = display();
  recordList.appendChild(recordAdd);
}

function timerReset() {
  elapsedTime = 0;
  startTime = 0;
  recordList.innerHTML = "";
  timerStop();
  display();
};

function display() {
  const time = new Date(elapsedTime);
  let minutes = addZero(time.getUTCMinutes());
  let seconds = addZero(time.getUTCSeconds());
  let milliseconds = time.getUTCMilliseconds();
  
  milliseconds = milliseconds < 100 ? "0" + milliseconds : milliseconds;
  
  stopwatchContent.textContent = `${minutes}:${seconds}:${milliseconds}`;
  return `${minutes}:${seconds}:${milliseconds}`;
};

function addZero(num) {
  return (num >= 10 ? num : '0'+num);
}
init();