const btnList = document.querySelector('.btnList');

function promiseTest1(url){ //함수내부에서 한번에 처리할 수 있는가 확인.
    const var1 =  new Promise((resolve,reject)=>{
        fetch(url)
        .then((res) => res.json())
        .then((json) => (resolve(json)))
    }) 

    var1.then((promiseData)=>{
        console.log(promiseData)//{status:'',data:Arr}
    });
}

function promiseTest2(url){
    let p = new Promise((resolve, reject) => {
        setTimeout(() => { //비동기를 유사하게 만들기 위하여 사용했습니다.
            resolve(10);
        }, 3 * 100);
    });
    
    p.then((result) => {
        console.log(result); // 10
        return result * 2; //20
    }).then((result) => {
        console.log(result); // 20
        return result * 3; //60
    }).then((result) => {
        console.log(result); // 60
        return result * 4; //240
    }).then((a)=>{
        // console.log(result) undefined
        console.log(a)//a는 return값을 받아서 사용하는 것입니다.
    })
}

function btnEvent(){
    const url ='http://dummy.restapiexample.com/api/v1/employees';
    var input = document.createElement('input');
    input.type ='button';
    input.value = 'promiseTest1';
    btnList.append(input)
    btnList.children[0].addEventListener('click',promiseTest1.bind(null,url))
    var input = document.createElement('input');
    input.value = 'promiseTest2';
    input.type ='button';
    btnList.append(input)
    btnList.children[1].addEventListener('click',promiseTest2.bind(null,url))
    
}

btnEvent()