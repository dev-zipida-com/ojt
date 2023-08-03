import tempData from "./dummy.js";
function app() {
  // 초기 세팅
  const root = document.querySelector("#root");
  const refreshBtn = document.createElement("button");
  refreshBtn.innerHTML = "refresh";
  refreshBtn.className = "refresh";
  refreshBtn.onclick = refreshList;
  root.appendChild(refreshBtn);

  const table = document.createElement("table");
  root.appendChild(table);

  // th 컴포넌트의 경우 재사용이 필요하여 function 분리
  function renderTableHeader() {
    const tableHeader = document.createElement("tr");
    table.appendChild(tableHeader);

    const thId = document.createElement("th");
    thId.innerHTML = "id";
    thId.className = "id";
    tableHeader.appendChild(thId);

    const thName = document.createElement("th");
    thName.innerHTML = "employee_name";
    thName.className = "employee_name";
    tableHeader.appendChild(thName);

    const thSalary = document.createElement("th");
    thSalary.innerHTML = "employee_salary";
    thSalary.className = "employee_salary";
    tableHeader.appendChild(thSalary);

    const thAge = document.createElement("th");
    thAge.innerHTML = "employee_age";
    thAge.className = "employee_age";
    tableHeader.appendChild(thAge);

    const thImg = document.createElement("th");
    thImg.innerHTML = "profile_image";
    thImg.className = "profile_image";
    tableHeader.appendChild(thImg);
  }
  renderTableHeader();
  // 초기 세팅 끝

  // javascript fetch 사용 시 CORS 오류로 더미데이터로 임시 적용
  function getDummyList() {
    console.log("tempData : ", tempData);
    const tableList = tempData.data;
    tableList.forEach((el) => {
      const newData = document.createElement("tr");
      let id = document.createElement("td");
      id.innerHTML = el.id;
      let name = document.createElement("td");
      name.innerHTML = el.employee_name;
      let salary = document.createElement("td");
      salary.innerHTML = el.employee_salary;
      let age = document.createElement("td");
      age.innerHTML = el.employee_age;
      let profile = document.createElement("td");
      profile.innerHTML = el.profile_image;
      newData.appendChild(id);
      newData.appendChild(name);
      newData.appendChild(salary);
      newData.appendChild(age);
      newData.appendChild(profile);
      table.appendChild(newData);
    });
  }

  // 새로고침
  function refreshList() {
    table.innerHTML = "";
    renderTableHeader();
    getDummyList();
  }

  getDummyList();
}

app();
