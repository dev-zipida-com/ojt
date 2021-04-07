const root = document.getElementById('root');

const refreshBtn = document.getElementById('refresh-btn');
const employeeTable = document.getElementById('employee-table');
const tableHead = document.getElementById('table-head');
const tableBody = document.getElementById('table-body');

function createTableHead(data) {
    // console.log('createTableHead ======= ' + Object.keys(data));
    // console.log('createTableHead ======= ' + Object.values(data));
    const headRow = tableHead.insertRow(0);
    const dataObjKeys = Object.keys(data); // 넘어온 data object의 key값만 저장

    dataObjKeys.forEach((data, idx) => {
        headRow.insertCell(idx).innerText = data;
    });

}

function createTableBody(data) {
    const bodyRow = tableBody.insertRow(-1);
    const dataObjValues = Object.values(data); // 넘어온 data object의 value값만 저장

    dataObjValues.forEach((data, idx) => {
        bodyRow.insertCell(idx).innerText = data;
    });
}

function paintTable(data) {
    try {
        createTableHead(data[0]);
        data.forEach(data => {
            createTableBody(data);
        });
    } catch(e) {
        console.log('error : ' + e);
    }
}

function getEmployeeJson(){
    // OJT에 나와있는 링크는 429 (Too many request) 오류로 인해 링크 인터넷 떠도는 예제 링크로 대체
    fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => response.json())
        .then(data => {
            // console.log(data[0].userId)
            paintTable(data);
        })
        .catch(error => console.log(error));
}

// refresh 버튼 중복 방지 함수
function checkOverlap() {
    if(tableBody.childElementCount === 0){  // 테이블 바디에 자식이 하나도 없으면
        getEmployeeJson();
    } else { // 자식이 1개라도 있으면 이미 refresh버튼 누른걸로 간주
        alert('이미 데이터를 불러왔습니다');
    }
}

refreshBtn.addEventListener('click', checkOverlap);