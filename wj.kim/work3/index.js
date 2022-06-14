const root = document.getElementById('root');

const clockForm = document.createElement('div');
clockForm.id = 'clock'

const clockTitle = document.createElement('h1');
clockTitle.textContent = 'CLOCK'

const clockTime = document.createElement('h2')

const toggleBtn = document.createElement('button');
toggleBtn.textContent = 'TOGGLE';
toggleBtn.id = 'toggle';
toggleBtn.className = 'button';
toggleBtn.onclick = handleToggle;

const stopwatchForm = document.createElement('div');
stopwatchForm.id = 'stopwatch'

const stopwatchTitle = document.createElement('h1');
stopwatchTitle.textContent = 'STOP WATCH';

const stopwatch = document.createElement('h2');
stopwatch.textContent = '00 : 00 : 00';

const buttonListForm = document.createElement('div');

const startBtn = document.createElement('button');
startBtn.textContent = 'START';
startBtn.id = 'start';
startBtn.className = 'button';
const pauseBtn = document.createElement('button');
pauseBtn.textContent = 'PAUSE';
pauseBtn.id = 'pause';
pauseBtn.className = 'button';
const recordBtn = document.createElement('button');
recordBtn.textContent = 'RECORD';
recordBtn.id = 'record';
recordBtn.className = 'button';
const resetBtn = document.createElement('button');
resetBtn.textContent = 'RESET';
resetBtn.id = 'reset';
resetBtn.className = 'button';

const recordList = document.createElement('ul');
recordList.id = 'list';

clockForm.appendChild(clockTitle);
clockForm.appendChild(clockTime);
buttonListForm.appendChild(startBtn);
buttonListForm.appendChild(pauseBtn);
buttonListForm.appendChild(recordBtn);
buttonListForm.appendChild(resetBtn);
buttonListForm.appendChild(recordList);
stopwatchForm.appendChild(stopwatchTitle);
stopwatchForm.appendChild(stopwatch);

root.appendChild(clockForm);
root.appendChild(stopwatchForm);
root.appendChild(toggleBtn);
root.appendChild(buttonListForm);

startBtn.onclick = startTimer;
pauseBtn.onclick = pauseTimer;
recordBtn.onclick = recordTime;
resetBtn.onclick = resetTimer;

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
  buttonListForm.style.display = 'none';
  setInterval(getTime, 1000);
}

let clock = true;

function handleToggle() {
  clock = !clock;

  if (clock) {
    clockForm.style.display = 'block';
    stopwatchForm.style.display = 'none';
    buttonListForm.style.display = 'none';
  } else {
    clockForm.style.display = 'none';
    stopwatchForm.style.display = 'block';
    buttonListForm.style.display = 'block';
  }
}

let startTime = 0, endTime = 0, timerStart;

function startTimer() {
  startBtn.disabled = true;
  if (!startTime) {
    startTime = Date.now();
  } else {
    startTime += (Date.now() - endTime);
  }

  timerStart = setInterval(getStopWatchTime, 10)
}

function pauseTimer() {
  startBtn.disabled = false;
  if (timerStart) {
    clearInterval(timerStart);
    endTime = Date.now();
  }
}

function recordTime() {
  let record = stopwatch.textContent;

  const li = document.createElement('li');
  li.textContent = record;

  recordList.appendChild(li);
}

function resetTimer() {
  pauseTimer();

  startTime = 0;
  timerStart = null;

  const timeList = recordList.getElementsByTagName('li');

  while (timeList.length) {
    timeList[0].remove();
  }

  stopwatch.textContent = '00 : 00 : 00';
}

function getStopWatchTime() {
  let nowTime = new Date(Date.now() - startTime);

  let min = addZero(nowTime.getMinutes());
  let sec = addZero(nowTime.getSeconds());
  let milisec = addZero(Math.floor(nowTime.getMilliseconds() / 10));

  stopwatch.textContent = `${min} : ${sec} : ${milisec}`;
}

function addZero(num) {
  return (num < 10 ? `0${num}` : num);
}

init();