const table = document.createElement("table");
table.id = 'table';
/*
<html 태그 만들기>
table
- tableHeader
  - id
  - employee_name
  - employee_salary
  - employee_age
  - profile_image
- tableContent
  - data
*/

// table 요소 만들기
var userId = document.createElement("th");
userId.innerHTML = "id";
userId.className = "id";
var userName = document.createElement("th");
userName.innerHTML = "employee_name";
userName.className = "employee_name";
var userSalary = document.createElement("th");
userSalary.innerHTML = "employee_salary";
userSalary.className = "employee_salary";
var userAge = document.createElement("th");
userAge.innerHTML = "employee_age";
userAge.className = "employee_age";
var userProfile = document.createElement("th");
userProfile.innerHTML = "profile_image";
userProfile.className = "profile_image";

// 만든 태그들을 tableHeader의 자식요소로 매핑
let tableHeader = document.createElement("tr");

tableHeader.appendChild(userId);
tableHeader.appendChild(userName);
tableHeader.appendChild(userSalary);
tableHeader.appendChild(userAge);
tableHeader.appendChild(userProfile);

table.appendChild(tableHeader);

const refreshButton = document.createElement("button");
refreshButton.innerHTML = "Refresh";
refreshButton.className = "refresh";

const root = document.getElementById("root");

root.appendChild(refreshButton);
root.appendChild(table);

refreshButton.addEventListener('click', clickRefresh)

async function clickRefresh() {
  document.getElementById('table').style.display = 'block';

  fetch('https://dummy.restapiexample.com/api/v1/employees', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(response => {
    {
      if (response.status === "success") {
        response.data.forEach( data => {
          let dataTable = document.createElement("tr");
  
          let dataId = document.createElement("td");
          let dataName = document.createElement("td");
          let dataSalary = document.createElement("td");
          let dataAge = document.createElement("td");
          let dataProfile = document.createElement("td");
  
          dataId.innerHTML = data.id;
          dataName.innerHTML = data.employee_name;
          dataSalary.innerHTML = data.employee_salary;
          dataAge.innerHTML = data.employee_age;
          dataProfile.innerHTML = data.profile_image;
  
          dataTable.appendChild(dataId);
          dataTable.appendChild(dataName);
          dataTable.appendChild(dataSalary);
          dataTable.appendChild(dataAge);
          dataTable.appendChild(dataProfile);
  
          table.appendChild(dataTable);
        });
      }
    };
  })
  .catch(err => {
  alert('잠시 후 다시 시도해주세요.');
})
}
