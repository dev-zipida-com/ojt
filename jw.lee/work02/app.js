function app() {
  const root = document.querySelector("#root");
  const table = document.createElement("table");
  root.appendChild(table);

  let tableHeader = document.createElement("tr");
  table.appendChild(tableHeader);

  var thId = document.createElement("th");
  thId.innerHTML = "id";
  thId.className = "id";
  tableHeader.appendChild(thId);

  var thName = document.createElement("th");
  thName.innerHTML = "employee_name";
  thName.className = "employee_name";
  tableHeader.appendChild(thName);
  
  var thSalary = document.createElement("th");
  thSalary.innerHTML = "employee_salary";
  thSalary.className = "employee_salary";
  tableHeader.appendChild(thSalary);
  
  var thAge = document.createElement("th");
  thAge.innerHTML = "employee_age";
  thAge.className = "employee_age";
  tableHeader.appendChild(thAge);
  
  var thImg = document.createElement("th");
  thImg.innerHTML = "profile_image";
  thImg.className = "profile_image";
  tableHeader.appendChild(thImg);
  

  


  
  
  
  
  
}

app();