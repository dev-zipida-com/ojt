const root = document.getElementById('container');
const clock = root.querySelector('#clock');
const buttonContainer = root.querySelector('#buttonContainer');
const labs = root.querySelector('#labs');

// 버튼
const toggle = root.querySelector('#toggle');
const start = root.querySelector('#start');
const pause = root.querySelector('#pause');
const record = root.querySelector('#record');
const reset = root.querySelector('#reset');

// 기본 시계
function defaultClock() {
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth()+1;
const day = date.getDate();
const hour = date.getHours(); // 시
const minute = date.getMinutes(); // 분
const second = date.getSeconds(); // 초

const paintClock =  `${year}-${month < 10 ? `0${month}`:month}-${day <10 ? `0${day}`:day} 
    ${hour < 10 ? `0${hour}`:hour}:${minute < 10 ? `0${minute}`:minute}:${second < 10 ? `0${second}`:second}`
//paintClock 삼항연산자 10보다 작을때 앞에 0을 붙여서 출력 아니면 그대로 출력

clock.innerHTML = paintClock; // 완성된 시계를 HTML에 뿌려준다.
}

// 타이머 변경
function changeClock() {
    if(clock.id == "clock") {
        clearInterval(clockStart);
        clock.id = "Timer";
        const paintTimer = `00:00:00`;
        clock.innerHTML = paintTimer; // 초기화
    } else {
        clock.id = "clock";
        defaultClock();
        clockstart = setInterval(defaultClock, 1000); // 재개
    }
}

let clockStart =  setInterval(defaultClock, 1000);

toggle.addEventListener("click", changeClock);