const root = document.getElementById("root");

const reBtn = document.createElement("button");
reBtn.textContent = "Refresh";

const table = document.createElement("table");

const idHeader = document.createElement("th");
idHeader.textContent = "id";
idHeader.className = "table-head";

const nameHeader = document.createElement("th");
nameHeader.textContent = "이름";
nameHeader.className = "table-head";

const salaryHeader = document.createElement("th");
salaryHeader.textContent = "연봉";
salaryHeader.className = "table-head";

const ageHeader = document.createElement("th");
ageHeader.textContent = "나이";
ageHeader.className = "table-head";

const imageHeader = document.createElement("th");
imageHeader.textContent = "사진";
imageHeader.className = "table-head";

table.appendChild(idHeader);
table.appendChild(nameHeader);
table.appendChild(salaryHeader);
table.appendChild(ageHeader);
table.appendChild(imageHeader);

root.appendChild(reBtn);
root.appendChild(table);

function getApiData() {}
