const root = document.getElementById('root');

const clockZone = root.querySelector('.clock-zone');
const stopwatchZone = root.querySelector('.stopwatch-zone');
const nowTime = root.querySelector('.nowTime');
const toggleBtn = root.querySelector('#toggleBtn');

function clock() {
    const nowDate = new Date();

    const year = nowDate.getFullYear();
    const month = nowDate.getMonth() + 1;
    const date = nowDate.getDate();
    const hours = nowDate.getHours();
    const minutes = nowDate.getMinutes();
    const seconds = nowDate.getSeconds();

    nowTime.innerText = year + '-' + month + '-' + date + ' ' + hours + ':' + minutes + ':' + seconds;
}

function onToggleClick() {
    console.log('Toggle Click!!!!!');
    if(clockZone.style.display == 'none') {
        clockZone.style.display = 'block';
        stopwatchZone.style.display = 'none';    
    } else {
        clockZone.style.display = 'none';
        stopwatchZone.style.display = 'block';
    }
}

function init() {
    clock();
    // setInterval(clock, 1000);
}

init();