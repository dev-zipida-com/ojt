
const root = document.getElementById('root');

const refreshButton = root.querySelector('#refreshButton');
const table = root.querySelector('#incomplete-table');
const thead = root.querySelector('#table-head');
const tbody = root.querySelector('#table-body');

function createThead(obj) { // thead row 생성 함수
    let headRow = thead.insertRow(0);
    let objKey = Object.keys(obj);

    objKey.forEach((data,index)=> {
        headRow.insertCell(index).innerHTML = data;
    })
}

function createTbody(obj) { // tbody row 생성 함수
    let row = tbody.insertRow(-1); // 0을 하면 24부터 삽입 -1을 하면 1부터 삽입

    obj = Object.values(obj);
    obj.forEach((data,index)=> { // data 값, index 값의 번호
        row.insertCell(index).innerHTML = data; // idex 번호로 cell 번호를 지정하고 data를 삽입한다.
    });
}

function newObj(data) { // fetchData의 JSON을 객체에 담는다.
    let obj = {};

    if(data !== "success") { // undefined 값 방지
        obj = data;
        createThead(obj[0]);
        for(let i in obj) {
            createTbody(obj[i]);
        }
    }
}

function fetchData() { // JSON 파싱
    fetch("http://dummy.restapiexample.com/api/v1/employees")
    .then((res) => res.json())
    .then((json) => {
        for(let i in json) {
            newObj(json[i])
        }
    })
}


function tableCheck(row) { // 테이블 중복생성 방지
    let tbodyCount = tbody.childElementCount;
    if(tbodyCount === 0) { // tbody에 요소가 없으면 테이블을 그려준다.
        fetchData();
    } else { // 요소가 있으면 중복 생성을 방지하기 위해서 지우고 새로 만들어준다.
        table.deleteRow(0);
        for(let i=0; i<=tbodyCount; i++){
            tbody.deleteRow(-1, tbodyCount);
        }
        fetchData();
    }
}


function init() {
        refreshButton.addEventListener("click", tableCheck);
}

init();