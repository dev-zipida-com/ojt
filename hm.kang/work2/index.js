
const table = document.createElement("table");

var thId = document.createElement("th");
thId.innerHTML = "id"
thId.className = "id";
var thName = document.createElement("th");
thName.innerHTML = "employee_name";
thName.className = "employee_name";
var thSalary = document.createElement("th");
thSalary.innerHTML = "employee_salary";
thSalary.className = "employee_salary";
var thAge = document.createElement("th");
thAge.innerHTML = "employee_age";
thAge.className = "employee_age";
var thImg = document.createElement("th");
thImg.innerHTML = "profile_image";
thImg.className = "profile_image";

let tableHeader = document.createElement("tr");


tableHeader.appendChild(thId);
tableHeader.appendChild(thName);
tableHeader.appendChild(thSalary);
tableHeader.appendChild(thAge);
tableHeader.appendChild(thImg);

table.appendChild(tableHeader);
const refreshBtn = document.createElement("button");
refreshBtn.className = "refresh";
refreshBtn.innerHTML = "Refresh";

const rootDiv = document.getElementById("root");



rootDiv.appendChild(refreshBtn);
rootDiv.appendChild(table);

refreshBtn.onclick = refreshTable;

document.addEventListener('DOMContentLoaded' , () => {
    refreshTable();
});

function refreshTable() {
    while (table.hasChildNodes()) table.removeChild(table.firstChild);
    table.appendChild(tableHeader);

    // 테스트 dummy api 제공하는 곳이 잘 안되서 임의로 변수에 데이터 지정.
    // fetch( "http://dummy.restapiexample.com/api/v1/employees", ).then( response => {
    // if( response.data.status == "success" ){

    //     response.data.data.forEach( data => {
    //         let newData = document.createElement("tr");

    //         let id = document.createElement("td");
    //         let name = document.createElement("td");
    //         let salary = document.createElement("td");
    //         let age = document.createElement("td");
    //         let profile = document.createElement("td");

    //         id.innerHTML = data.id;
    //         name.innerHTML = data.employee_name;
    //         salary.innerHTML = data.employee_salary;
    //         age.innerHTML = data.employee_age;
    //         profile.innerHTML = data.profile_image;

    //         newData.appendChild(id);
    //         newData.appendChild(name);
    //         newData.appendChild(salary);
    //         newData.appendChild(age);
    //         newData.appendChild(profile);

    //         table.appendChild( newData);
    //     });
    // }
    // }).catch( error => {
    //     console.log( JSON.stringify( error, null ,4));
    // })
    

    if( dummy.status == "success" ){
        dummy.data.push( dummy.data.shift() );

        dummy.data.forEach( data => {
            let newData = document.createElement("tr");

            let id = document.createElement("td");
            let name = document.createElement("td");
            let salary = document.createElement("td");
            let age = document.createElement("td");
            let profile = document.createElement("td");

            id.innerHTML = data.id;
            name.innerHTML = data.employee_name;
            salary.innerHTML = data.employee_salary;
            age.innerHTML = data.employee_age;
            profile.innerHTML = data.profile_image;

            newData.appendChild(id);
            newData.appendChild(name);
            newData.appendChild(salary);
            newData.appendChild(age);
            newData.appendChild(profile);

            table.appendChild( newData);
        });
    }
}



//임시 dummy data 
var dummy = {
    "status": "success",
    "data": [
        {
            "id": "1",
            "employee_name": "Tiger testMAnd",
            "employee_salary": "320800",
            "employee_age": "61",
            "profile_image": ""
        },
        {
            "id": "2",
            "employee_name": "Tiger Nixon",
            "employee_salary": "320800",
            "employee_age": "61",
            "profile_image": ""
        }, {
            "id": "3",
            "employee_name": "Tiger Nixon",
            "employee_salary": "320800",
            "employee_age": "61",
            "profile_image": ""
        }, {
            "id": "14",
            "employee_name": "Tiger WOW",
            "employee_salary": "320800",
            "employee_age": "61",
            "profile_image": ""
        }, {
            "id": "1",
            "employee_name": "Tiger Nixon",
            "employee_salary": "595948",
            "employee_age": "61",
            "profile_image": ""
        }, {
            "id": "5",
            "employee_name": "Tiger Nixon",
            "employee_salary": "320800",
            "employee_age": "61",
            "profile_image": ""
        }, {
            "id": "9",
            "employee_name": "Tiger Nixon",
            "employee_salary": "320800",
            "employee_age": "61",
            "profile_image": ""
        }, {
            "id": "8",
            "employee_name": "Tiger Nixon",
            "employee_salary": "320800",
            "employee_age": "61",
            "profile_image": ""
        }, {
            "id": "7",
            "employee_name": "Lion",
            "employee_salary": "320800",
            "employee_age": "61",
            "profile_image": ""
        },

    ]
}