const target = "http://132.226.224.62:3000/api";
const root = document.getElementById("root");

const table1 = root.querySelector('#table1');
const refreshButton = root.querySelector("#refresh");
const tableSection = root.querySelector("#tableSection");

console.log(table1);

function loaddata(){
  fetch(target).then((res) =>{
    const json_data = res.json();
    json_data.then((dummy)=>{
      // document.querySelector("#table1").innerHTML+=
      let htmldata = 
      "<table id="+"table"+">"+
      "<thead>"+
      "<tr>"+
      "<th>id</th>"+
      "<th>employee_name</th>"+
      "<th>employee_salary</th>"+
      "<th>employee_age</th>"+
      "</tr>"+
      "</thead>"+
      "<tbody>"

      for(i=0; i<dummy.length; i++) {
        htmldata +=
        "<tr>"+
        "<td>"+dummy[i].id+"</td>"+
        "<td>"+dummy[i].employee_name+"</td>"+
        "<td>"+dummy[i].employee_salary+"</td>"+
        "<td>"+dummy[i].employee_age+"</td>"+
        "</tr>"
      };
      htmldata +=
      "</tbody>"+
      "</table>"
      document.querySelector("#table1").innerHTML+=htmldata
    })
  })
}

function deletedata() {
  const table = root.querySelector('#table');
  table1.removeChild(table);
  loaddata();
}


function refreshAction(){
  const xhr = new XMLHttpRequest();

  xhr.open('GET',target,true);
  xhr.send();
  xhr.onload = () => {
    if(xhr.status === 200){
      console.log(xhr.response);
      console.log('통신 성공');
      loaddata();
    }
    else {
      console.log('통신 실패');
    }
  }
}

function init(){
  loaddata();
  refreshButton.addEventListener('click',deletedata);
  
}
init();
