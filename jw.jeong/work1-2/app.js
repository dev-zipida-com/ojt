const getEmployee = document.getElementById('get-employee'),
    employeeTable = document.getElementById('employee-table');


function insertEmployee(){
    fetch("http://dummy.restapiexample.com/api/v1/employees")
    .then((res) => res.json())
    .then((json) => { 
        const tableHead = Object.keys(json.data[0]);
        
        insertThead(tableHead);

        if(employeeTable.tBodies[0] !==undefined){
            employeeTable.tBodies[0].remove()
        }

        json.data.forEach((body,index) =>{
            const employee = Object.values(body)
            insertBody(employee,index);
        })
    })
}
/*let fetchEmployee = new Promise((resolve,reject)=>{
    fetch("http://dummy.restapiexample.com/api/v1/employees")
    .then((res) => res.json())
    .then((json) => resolve(json))
})

function insertEmployee(){
    fetchEmployee.then(employeeData=>{
        tableHead = Object.keys(employeeData.data[0]);
        insertThead.apply(null,tableHead)
        if(employeeTable.tBodies[0] !==undefined){
            employeeTable.tBodies[0].remove()
        }
        employeeData.data.forEach((employee) =>{
            employee = Object.values(employee)
            insertBody.apply(null,employee);
        })        
    })
}*/

function insertThead(tableHead){
    if(employeeTable.tHead === null){
        employeeTable.createTHead()
        employeeTable.tHead.insertRow(0)
        tableHead.forEach((head,index)=>{
            employeeTable.tHead.rows[0].insertCell(index).innerText=`${head}`;
        })
        // for(let head in tableHead){
        //     employeeTable.tHead.rows[0].insertCell(head).innerText=`${tableHead[head]}`
        // }
    }
    
}

function insertBody(employee,index){
    //employeeTable.createTBody()//tbody가 n개 생성됩니다.
    if (employeeTable.tBodies[0] === undefined){
        employeeTable.createTBody()
    }//toBodies n개 생성되는 것을 막기 위하여 사용했습니다.
    employeeTable.tBodies[0].insertRow(index);
    employee.forEach((body,bodyIndex)=>{
        employeeTable.tBodies[0].rows[index].insertCell(bodyIndex).innerText=`${body}`;
    })
    
    // for(let body in arguments){
    //     employeeTable.tBodies[0].rows[employeeTable.tBodies[0].rows.length-1].insertCell(body).innerText=`${arguments[body]}`
    // }
}

getEmployee.addEventListener('click',insertEmployee);