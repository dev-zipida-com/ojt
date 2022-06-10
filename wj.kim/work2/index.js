const root = document.getElementById("root");

const reBtn = document.createElement("button");
reBtn.textContent = "Refresh";
reBtn.onclick = getApiData;

const table = document.createElement("table");

const tableHeader = document.createElement("thead");
const tr = document.createElement("tr");

const idHeader = document.createElement("th");
idHeader.textContent = "id";
idHeader.className = "table-head";

const nameHeader = document.createElement("th");
nameHeader.textContent = "employee_name";
nameHeader.className = "table-head";

const salaryHeader = document.createElement("th");
salaryHeader.textContent = "employee_salary";
salaryHeader.className = "table-head";

const ageHeader = document.createElement("th");
ageHeader.textContent = "employee_age";
ageHeader.className = "table-head";

const imageHeader = document.createElement("th");
imageHeader.textContent = "profile_image";
imageHeader.className = "table-head";

tr.appendChild(idHeader);
tr.appendChild(nameHeader);
tr.appendChild(salaryHeader);
tr.appendChild(ageHeader);
tr.appendChild(imageHeader);

tableHeader.appendChild(tr);

root.appendChild(reBtn);
root.appendChild(table);

// api 데이터 받아오기
function getApiData() {
  fetch(" http://dummy.restapiexample.com/api/v1/employees")
    .then((res) => res.json())
    .then((data) => {
      const list = data.data;
      makeTable(list);
      return data.data;
    })
    .catch((err) => {
      alert("Too Many Requests");
      console.log(err);
    });
}

// table 생성
// refresh 버튼을 클릭했을 때, 만약 테이블이 존재하면
// 새로 받아온 데이터로 table 생성
function makeTable(list) {
  while (table.hasChildNodes()) table.removeChild(table.firstChild);
  table.appendChild(tableHeader);

  const tableBody = document.createElement("tbody");

  for (let i = 0; i < list.length; i++) {
    const newData = document.createElement("tr");

    const id = document.createElement("td");
    const name = document.createElement("td");
    const salary = document.createElement("td");
    const age = document.createElement("td");
    const profile = document.createElement("td");

    id.textContent = list[i].id;
    name.textContent = list[i].employee_name;
    salary.textContent = list[i].employee_salary;
    age.textContent = list[i].employee_age;
    profile.textContent = list[i].employee_image;

    newData.appendChild(id);
    newData.appendChild(name);
    newData.appendChild(salary);
    newData.appendChild(age);
    newData.appendChild(profile);

    tableBody.appendChild(newData);
  }

  table.appendChild(tableBody);
}

getApiData();
