const root = document.getElementById('container');
const clock = root.querySelector('#clock');
const buttonContainer = root.querySelector('#buttonContainer');
const labs = root.querySelector('#labs');
const title = root.querySelector('h1');

// 버튼
const toggle = root.querySelector('#toggle');
const start = root.querySelector('#start');
const pause = root.querySelector('#pause');
const record = root.querySelector('#record');
const reset = root.querySelector('#reset');

const time = new Date(); // 정적

// 기본 시계
Date.prototype.defaultClock = function(timeReturn) {
const year = timeReturn.getFullYear();
const month = timeReturn.getMonth()+1;
const day = timeReturn.getDate();
const hour = timeReturn.getHours(); // 시
const minute = timeReturn.getMinutes(); // 분
const second = timeReturn.getSeconds(); // 초
                    //paintClock 삼항연산자 10보다 작을때 앞에 0을 붙여서 출력 아니면 그대로 출력
clock.innerHTML = `${year}-${month < 10 ? `0${month}`:month}-${day <10 ? `0${day}`:day}
                    ${hour < 10 ? `0${hour}`:hour}:${minute < 10 ? `0${minute}`:minute}:${second < 10 ? `0${second}`:second}`;
}

let clockStart =  setInterval(()=>{
    let timeReturn = new Date(); // timeReturn 변수를 setInterval에 넣어 함수 파라미터로 이용해 동적으로 불러온다.
    time.defaultClock(timeReturn)
}, 1000);

function changeClock() {
    if(buttonContainer.className === "show") {
        buttonContainer.className = "hide";
        title.innerHTML = "CLOCK";

    } else {
        buttonContainer.className = "show";
        title.innerHTML = "STOPWATCH";
        //clock.innerHTML = "00:00:00";
        //clearInterval(clockStart)
        
    }
}

toggle.addEventListener("click", changeClock);