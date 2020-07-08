const getEmployee = document.getElementById('get-employee'),
    employeeTable = document.getElementById('employee-table');


function insertEmployee(){
    fetch("http://dummy.restapiexample.com/api/v1/employees")
    .then((res) => res.json())
    .then((json) => { 
        tableHead = Object.keys(json.data[0]);
        
        insertThead.apply(null,tableHead)

        if(employeeTable.tBodies[0] !==undefined){
            employeeTable.tBodies[0].remove()
        }

        json.data.forEach((employee) =>{
            employee = Object.values(employee)
            insertBody.apply(null,employee);
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

function insertThead(){
    if(employeeTable.tHead === null){
        employeeTable.createTHead()
        employeeTable.tHead.insertRow(0)
        for(let head in arguments){
            employeeTable.tHead.rows[0].insertCell(head).innerText=`${arguments[head]}`
        }
    }
    
}

function insertBody(){
    employeeTable.createTBody()
    employeeTable.tBodies[0].insertRow(employeeTable.tBodies[0].rows.length);
    for(let body in arguments){
        employeeTable.tBodies[0].rows[employeeTable.tBodies[0].rows.length-1].insertCell(body).innerText=`${arguments[body]}`
    }
}

getEmployee.addEventListener('click',insertEmployee);