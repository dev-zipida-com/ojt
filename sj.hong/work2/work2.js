const createElement = (tag, innerHTML, className) => {
  const element = document.createElement(tag);
  element.innerHTML = innerHTML;
  element.className = className;
  return element;
}

// 표 생성
const table = createElement("table", "", "table");
table.id = 'table';

// 표의 헤더 요소들 생성
const tableHeader = createElement("tr", "", "");
const headers = [
  { innerHTML: "id", className: "id" },
  { innerHTML: "employee_name", className: "employee_name" },
  { innerHTML: "employee_salary", className: "employee_salary" },
  { innerHTML: "employee_age", className: "employee_age" },
  { innerHTML: "profile_image", className: "profile_image" }
];

// forEach 를 통해 헤더 요소를 tableHeader 에 하위요소로 추가
headers.forEach(header => {
  tableHeader.appendChild(createElement("th", header.innerHTML, header.className));
});
table.appendChild(tableHeader);

// refresh 버튼 생성
const refreshButton = createElement("button", "Refresh", "refresh");

// root 하위에 표와 refresh 버튼 추가
const root = document.getElementById("root");
root.appendChild(refreshButton);
root.appendChild(table);

// refresh 버튼 클릭 이벤트 추가
refreshButton.addEventListener('click', clickRefresh)

// refresh 버튼 이벤트를 처리하는 함수
async function clickRefresh() {
  table.style.display = 'block';

  // fetch 를 이용하여 API 요청 보내기
  fetch('https://dummy.restapiexample.com/api/v1/employees', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(({ status, data }) => {
    // API 요청이 성공했다면, 표의 하위요소에 응답데이터 추가
    if (status === "success") {
      data.forEach( data => {
        const dataTable = createElement("tr", "", "");
        const dataElements = [
          { innerHTML: data.id, className: "" },
          { innerHTML: data.employee_name, className: "" },
          { innerHTML: data.employee_salary, className: "" },
          { innerHTML: data.employee_age, className: "" },
          { innerHTML: data.profile_image, className: "" }
        ];

        dataElements.forEach(element => {
          dataTable.appendChild(createElement("td", element.innerHTML, element.className));
        });
        table.appendChild(dataTable);
      });
    };
  })
  .catch(() => {
    // API 요청 에러 발생 시, 경고메시지 출력
    alert('잠시 후 다시 시도해주세요.');
  });
}