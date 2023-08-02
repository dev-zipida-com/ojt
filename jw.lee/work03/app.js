function app() {
  let timerInterval; // 타이머를 저장할 변수
  let minutes = 0;
  let seconds = 0;
  let milliseconds = 0;
  let recordedTimes = []; // 저장된 시간을 담을 배열

  // 현재 시간 출력
  Date.prototype.currentTime = function () {
    const current = new Date();
    const year = current.getFullYear();
    const month = current.getMonth() + 1;
    const day = current.getDate();
    const hour = current.getHours(); // 시
    const minute = current.getMinutes(); // 분
    const second = current.getSeconds(); // 초
    return `${year}-${month < 10 ? `0${month}` : month}-${
      day < 10 ? `0${day}` : day
    }
    ${hour < 10 ? `0${hour}` : hour}:${minute < 10 ? `0${minute}` : minute}:${
      second < 10 ? `0${second}` : second
    }`;
  };

  Date.prototype.timerStart = function () {
    // 이미 타이머가 동작 중인 경우 중지
    clearInterval(timerInterval);
    // 1밀리초마다 updateTime 함수를 호출하여 타이머 업데이트
    timerInterval = setInterval(() => {
      milliseconds += 1; // 밀리초 증가
      if (milliseconds >= 1000) {
        seconds += 1; // 1초마다 초 증가
        milliseconds = 0;
      }
      if (seconds >= 60) {
        minutes += 1; // 1분마다 분 증가
        seconds = 0;
      }
      updateTime();
    }, 10);
  };

  function updateTime() {
    const displayMinutes = padZero(minutes, 2);
    const displaySeconds = padZero(seconds, 2);
    const displayMilliseconds = padZero(milliseconds, 3);
    timeContent.innerHTML = `${displayMinutes}:${displaySeconds}:${displayMilliseconds}`;
  }

  // 각 시간 단위의 자릿수 맞추기
  function padZero(value, length) {
    return value.toString().padStart(length, "0");
  }

  // 타이머 일시중지
  Date.prototype.timerPause = function () {
    clearInterval(timerInterval); // 타이머 중지
  };

  // 타이머 기록
  Date.prototype.timerRecord = function () {
    const recordedTime = `${padZero(minutes, 2)}:${padZero(
      seconds,
      2
    )}:${padZero(milliseconds, 3)}`;
    recordedTimes.push(recordedTime);

    const list = document.querySelector(".list");
    list.innerHTML = "";
    recordedTimes.forEach((el) => {
      const recordItem = document.createElement("li");
      recordItem.innerHTML = el;
      list.appendChild(recordItem);
    });
  };

  // 타이머 리셋
  Date.prototype.timerReset = function () {
    clearInterval(timerInterval); // 타이머 중지
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    timeContent.innerHTML = "00:00:000";
    recordedTimes = [];
    const list = document.querySelector(".list");
    list.innerHTML = "";
  };

  // 초기 세팅
  let isToggle = false;
  const root = document.querySelector("#root");
  let time = new Date(); // 정적 함수

  const wrap = document.createElement("div");
  wrap.classList.add("wrap");
  root.appendChild(wrap);

  const title = document.createElement("h1");
  title.innerHTML = "CLOCK";
  wrap.appendChild(title);

  let timeContent = document.createElement("h2");
  timeContent.innerHTML = time.currentTime();
  wrap.appendChild(timeContent);

  const toggleBtn = document.createElement("button");
  toggleBtn.innerHTML = "TOGGLE";
  toggleBtn.classList.add("toggleBtn");
  toggleBtn.onclick = handleToggle;
  wrap.appendChild(toggleBtn);

  function handleToggle() {
    isToggle = !isToggle;
    if (isToggle) {
      timeContent.innerHTML = "00:00:00";

      title.innerHTML = "STOPWATCH";
      const btnWrap = document.createElement("div");
      btnWrap.classList.add("btnWrap");
      wrap.appendChild(btnWrap);

      const startBtn = document.createElement("button");
      startBtn.innerHTML = "START";
      startBtn.classList.add("startBtn");
      startBtn.addEventListener("click", time.timerStart);
      btnWrap.appendChild(startBtn);

      const pauseBtn = document.createElement("button");
      pauseBtn.innerHTML = "PAUSE";
      pauseBtn.classList.add("pauseBtn");
      pauseBtn.addEventListener("click", time.timerPause);
      btnWrap.appendChild(pauseBtn);

      const recordBtn = document.createElement("button");
      recordBtn.innerHTML = "RECORD";
      recordBtn.classList.add("recordBtn");
      recordBtn.addEventListener("click", time.timerRecord);
      btnWrap.appendChild(recordBtn);

      const resetBtn = document.createElement("button");
      resetBtn.innerHTML = "RESET";
      resetBtn.classList.add("resetBtn");
      resetBtn.addEventListener("click", time.timerReset);
      btnWrap.appendChild(resetBtn);

      const recordList = document.createElement("ul");
      recordList.classList.add("list");
      wrap.appendChild(recordList);
    } else {
      title.innerHTML = "CLOCK";
      wrap.innerHTML = "";
      wrap.appendChild(title);
      const timeContent = document.createElement("h2");
      timeContent.innerHTML = time.currentTime();
      wrap.appendChild(timeContent);
      wrap.appendChild(toggleBtn);
    }
  }
}

app();
