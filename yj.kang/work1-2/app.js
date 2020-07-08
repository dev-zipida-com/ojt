
const root = document.getElementById('root');

const refreshButton = root.querySelector('#refreshButton');
const table = root.querySelector('#incomplete-table');
const tbody = root.querySelector('#table-body');

function newObj(json) {
    let obj = {}

    obj = json
    console.log(json);
}

function fetchData() {
    fetch("http://dummy.restapiexample.com/api/v1/employees")
    .then((res) => res.json())
    .then((json) => {newObj(json.data)})
}

function addTable() {
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    console.log(table.tBodies[0])

}


function init() {
    refreshButton.addEventListener("click", fetchData);
}

init();