const root = document.getElementById('root');

const clockForm = document.createElement('div');
clockForm.id = 'clock'

const clockTitle = document.createElement('h1');
clockTitle.textContent = 'CLOCK'

const clockTime = document.createElement('h2')

const toggleBtn = document.createElement('button');
toggleBtn.textContent = 'TOGGLE';
toggleBtn.onclick = handleToggle;

clockForm.appendChild(clockTitle);
clockForm.appendChild(clockTime);
root.appendChild(clockForm);

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  clockTime.textContent = `${addZero(hours)} : ${addZero(minutes)} : ${addZero(seconds)}`
}

function init() {
  getTime();
  stopwatchForm.style.display = 'none';
  setInterval(getTime, 1000);
}

let clock = true;

function handleToggle() {
  clock = !clock;

  if (clock) {
    clockForm.style.display = 'block';
    stopwatchForm.style.display = 'none';
  } else {
    clockForm.style.display = 'none';
    stopwatchForm.style.display = 'block';
  }
}

const stopwatchForm = document.createElement('div');
stopwatchForm.id = 'stopwatch'

const stopwatchTitle = document.createElement('h1');
stopwatchTitle.textContent = 'STOP WATCH';

const stopwatch = document.createElement('h2');
stopwatch.textContent = '00 : 00 : 00';
stopwatch.id = 'timer';

const buttonForm = document.createElement('div');

const startBtn = document.createElement('button');
startBtn.textContent = 'START';
startBtn.id = 'start';
const pauseBtn = document.createElement('button');
pauseBtn.textContent = 'PAUSE';
pauseBtn.id = 'pause';
const recordBtn = document.createElement('button');
recordBtn.textContent = 'RECORD';
recordBtn.id = 'record';
const resetBtn = document.createElement('button');
resetBtn.textContent = 'RESET';
resetBtn.id = 'reset';

const recordList = document.createElement('ul');
recordList.id = 'list';

buttonForm.appendChild(startBtn);
buttonForm.appendChild(pauseBtn);
buttonForm.appendChild(recordBtn);
buttonForm.appendChild(resetBtn);
stopwatchForm.appendChild(stopwatchTitle);
stopwatchForm.appendChild(stopwatch);
stopwatchForm.appendChild(buttonForm);
stopwatchForm.appendChild(recordList);

let startTime = 0, endTime = 0, timerStart, min, sec, milisec;

root.appendChild(stopwatchForm)
root.appendChild(toggleBtn);
startBtn.onclick = startWatch;
pauseBtn.onclick = stopTimer;
recordBtn.onclick = recordTime;
resetBtn.onclick = reset;

function startWatch() {
  if (!startTime) {
    startTime = Date.now();
  } else {
    startTime += (Date.now() - endTime);
  }

  timerStart = setInterval(getStopWatchTime, 1)
}

function stopTimer() {
  if (timerStart) {
    clearInterval(timerStart);
    endTime = Date.now();
  }
}

function recordTime() {
  let record = document.getElementById('timer').textContent;

  const li = document.createElement('li');
  li.textContent = record;

  recordList.appendChild(li);
}

function reset() {
  startTime = 0;
  timerStart = null;

  const record = document.getElementById('list');
  const recordList = record.getElementsByTagName('li');
  while (recordList.length) {
    recordList[0].remove();
  }

  const time = document.getElementById('timer');
  time.textContent = '00 : 00 : 00';
}

function getStopWatchTime() {
  let nowTime = new Date(Date.now() - startTime);

  min = addZero(nowTime.getMinutes());
  sec = addZero(nowTime.getSeconds());
  milisec = addZero(Math.floor(nowTime.getMilliseconds() / 10));

  stopwatch.textContent = `${min} : ${sec} : ${milisec}`;
}

function addZero(num) {
  return (num < 10 ? `0${num}` : num);
}

init();