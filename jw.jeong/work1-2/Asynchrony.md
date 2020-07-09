동기와 비동기
===
* fetch를 사용하는도중에 동기,비동기를 구별하지 못하여서 값을 반환 도중 진행이 되어 값을 받지 못하고 시작하는 것을 확인하였습니다.
    * 문제 : 값을 반환하여서 값을 이용하여야 하는경우에 해당 값을 받지 못하고 진행을 하여서 문제가 발생하였습니다.
* 이유는 값을 받는 도중에 뒤의 작업들이 진행이 되어서 값들을 받지 못하였기 때문입니다.
* 바로 자바스크립트는 동기로 작업이 진행되기 때문에 비동기로 작업을 진행하기 위해서는 명시를 해주어야 하기때문입니다.
* 비동기로는 대표적인것은 setTimeout이 존재하며 아래에 작성하는것은 비동기에 관하여 정리한 문서입니다.
* 동기 : 어떤 로직이 실행이 되면 동시에 일어납니다. 해당 값이 시간이 필요할 경우 기다림 없이 바로 실행합니다.
* 비동기 : 어떤 로직이 실행이 될경우 동시에 일어나지 않게 하려고 선언하는것입니다. 해당 값이 시간이 필요할경우 대기후 실행합니다.
---
Call-back
===
* 참조사이트 : http://callbackhell.com
* 자바스크립트에서 비동기적으로 작업하기 위하여 초기에 사용되었던 방법입니다.
* 콜백함수를 받아서 비동기적으로 콜백함수를 진행합니다.
* 비동기가 return하는 값이 있다면 콜백함수를 매개변수로 전달합니다.
```js
function fun1(cb){
    setTimeout(function(){
        console.log(1);
        cb()
    },1000)
    console.log(cb) // a
}   

function fun2(cb){
    console.log(2);
    console.log(cb) //b
    cb()
}

function fun3(cb){
    console.log(3);
}

fun1(function(fun1Result){
    fun2(function(fun2Result){
        fun3()
    })
})
```
a를 실행하면 해당 함수를 확인할 수 있습니다. 선언되어진 값들이 실행을 내부에 넣어서 입력을 막아버리는 형식입니다.
ƒ (fun1Result){
    fun2(function(fun2Result){
        fun3()
    })
}

* 콜백은 치명적인 문제점이 있습니다 callback hell이라고 하는데요 이는 node.js에서도 볼 수 있습니다.
* 콜백함수가 값을 가지고 콜백을 다시 호출하고 그결과값으로 다시 콜백을 호출하게 되면 가독성이 떨어져 코드 이해하기가 매우 힘들어질 수 있습니다.
* 해결방법
    * 인라인 함수에 이름을 붙칩니다.
    * 코드를 간결하게 합니다.
    * 모듈화를 합니다.
    * promise패턴을 도입합니다.
---
Promise
===
* 자바스크립트에서 비동기 함수 로직을 처리한 이후 결과를 얻기위한 함수.
* 풀어 설명하면 해당 작업이 완료될때 까지 해당 함수의 진행을 일시 정지하여 진행합니다.
* 이번 과제인 1-2 fetch api에서도 해당 값을 받아서 화면에 출력해주기 위해서는 값이 도착하기까지 기다려주어야 해당 작업을 진행할 수 있습니다

### 3가지의 단계가 있습니다.
* pending : 이행되거나 거부하지 않은 초기상태
* fulfilled : 연산이 성공적으로 완료한 상태
* rejected : 연산이 실패한 상태.
실행이 완료된후
* resolve : 연산이 성공적으로 완료 되었을 경우 해당 함수를 호출합니다.
* reject : 연산이 실패하였을 경우 해당함수를 호출합니다.
excutor 함수의 연산이후 resolve함수를 파라미터로 넘겨주는 함수를 then으로 받을수 있으며 catch로 오류를 잡으면 됩니다.

### .then
* 참조 사이트 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
* Promise를 사용할때 .then을 사용하는 경우를 보실수 있습니다.
* Promise를 리턴하고 두개의 콜백함수를 인수로 받습니다.
```js
promise.then(fufilled,rejected);

promise.then(value=>{
    //이행
}),function(reason){
    console.log(reason)//거부
}
```

### Promise 생성자
* 참조 사이트 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/Promise
* 프로미스 지원하지 않는 함수를 감쌀때 사용합니다.
* excutor = resolve 및 reject인수를 전달할 실행 함수. 실행함수는 resolve와 reject 함수를 받아 실행됩니다.
    * 실행 함수는 비동기 작업을 시작한 후 작업을 끝내면 resolve를 호출해 프로미스를 이행하고, 오류가 발생한 경우 reject를 호출해 거부합니다.
        * try catch에서 오류잡을때 사용하는것이랑 형태가 비슷합니다.
* Promise는 new객체를 사용하여 만듭니다.
* 생성자는 매개변수로 실행함수를 받습니다.
* 이 함수는 매개변수로 두가지 함수를 받습니다(resolve,reject);
```js
const 변수명 = new Promise((resolve,reject)=>{
    //logic
});
```
* 함수에 프로미스 기능을 추가하려면 간단하게 프로미스를 반한하여도 가능합니다.

### Promise 체이닝
* 참조사이트 : https://www.javascripttutorial.net/es6/promise-chaining/
* 참조사이트 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
* 참조사이트 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Guide/Using_promises
* 찾는 도중 체이닝 관련하여 설명이 자주 보여서 따로 정리하였습니다.
* promise를 사용하면 then,catch,finally에게 프로미스 객체값을 뿌립니다.
```js
let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 3 * 100);
});

p.then((result) => {
    console.log(result); // 10
    return result * 2;
}).then((result) => {
    console.log(result); // 20
    return result * 3;
}).then((result) => {
    console.log(result); // 60
    return result * 4;
});
```
* 지금 코드를 분석하면 result에 2배,3배,4배를 진행합니다 . result는 앞의 값을 받아서 return 합니다. then((result))의 값은 앞의 return을 이용하여 값을 사용하는 것입니다. 이를 바탕으로 마지막 return값은 240으로 출력이 됩니다.
* 하나의 프로미스를 다중으로 값을 할당할 수 있습니다.
* 프로미스를 return으로 반환할 수 있습니다.

### Promise.all
* 참고 자료 : https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
* 프로미스 값이 아닌 다른 값을 프로미스처럼 실행할 수 있습니다.
```js
let a = 100;
let b='hello world';
const c = new Promise((resolve,reject)=>{setTimeout(resolve,10000,'hello')});

Promise.all([a,b,c])
.then((res)=>console.log(res));
Promise {<pending>}
(3) [100 , "hello world", "hello"]
```
* 위 코드를 보면 a,b는 평소에 사용하는 변수임을 확인할 수 있습니다. c만 프로미스를 사용하여 10초후 사용하게 선언하였지만, 나머지 a,b모두 c처럼 비동기 처리할 수 있습니다.
#### 실패우선성
```js
const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('하나'),1000)
}) 
const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('둘'),2000)
}) 
const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('셋'),3000)
}) 
const p4 = new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('넷'),4000)
}) 
const p5 = new Promise((resolve,reject)=>{
    reject(new Error('오류'))
}) 

Promise.all([p1,p2,p3,p4])
.then(res=>{
    console.log(res)
}).catch(error=>{
    console.log(error.message)
}) //(4) ["하나", "둘", "셋", "넷"]


Promise.all([p1,p2,p3,p4,p5]) //오류 추가
.then(res=>{
    console.log(res)
}).catch(error=>{
    console.log(error.message)
}) //오류
//Promise {<resolved>: undefined}
```
---
async & await
===
* 비동기 처리 패턴중 가장 최근에 나온 문법입니다. 
* 프로미스보다 보완된점
    * 참조사이트 :[async awit와 promise차이](https://hackernoon.com/6-reasons-why-javascripts-async-await-blows-promises-away-tutorial-c7ec10518dd9)
    1. 간결하고 깔끔합니다.
        * then이 필요없고, response를 해결하기 위한 비동기 함수를 만들 필요도 없습니다. 
    2. 에러 핸들링
        * 해당 코드를 try/catch를 사용할 수 있습니다.
        * promise내부에서 오류가 발생하면 외부에서 try/catch를 사용하면 오류를 찾지못하고 사용됩니다. .then이후 catch로 잡아주어야지 실행할 수 있습니다.
    3. 조건
        ```js
        const makeRequest = () => {
            return getJSON()
                .then(data => { //data를 받아옵니다.
                if (data.needsAnotherRequest) { //1.data.neddsAnotherRequest가 참이면
                    return makeAnotherRequest(data) //makeAnotherRequest(data)를 리턴합니다.
                .then(moreData => { //moreData=makeAnotherRequest(data) 이후
                    console.log(moreData) //moreData를 출력하고 반환합니다.
                    return moreData
                })} else { //2.거짓일 경우
                console.log(data) //data를 출력하고
                return data //반환합니다.
                    }
                })
        }

        ```
        ```js
        const makeRequest = async () => {
            const data = await getJSON() //json실행후 data를 받아옵니다.
            if (data.needsAnotherRequest) { //1.나머지는 동일합니다.
                const moreData = await makeAnotherRequest(data);
                console.log(moreData)
                return moreData
            } else {
                console.log(data)
                return data    
            }
        }
        ```
    4. 중간값
        * 프로미스의 결과값을 이용하여 다음프로미스를 실행하는 경우를 가정했을때, 해당 코드를 .then을 이용하여 프로미스를 체이닝해주어야합니다.
        * .all을 사용하여 사용할 수 있지만 또한 체이닝을 해주어야합니다.
        * 이때 async await를 사용하면 await에서 걸려 값 할당을 바로 해줄 수 있어서 코드가 간결해질 수 있습니다.
    5. 에러 스택
        * 프로미스가 체인으로 생성되었을때 어딘가에서 error가 발쌩하면 throw를 해줄것입니다.
        * promise에서는 체인도중 오류가 발생하면 어디서 발생하였는지 알려주지 않습니다.
        * async await에서는 해당 오류가 발생한 지역을 보여줍니다.
    6. 디버깅
        * return되는 arrow function들에 breakpoint를 잡을 수 없습니다.
        * async/await를 사용하게 되면 arrow function을 많이 사용할 필요가 없습니다.
---
### async/await를 사용하기
```js
async function fun1(){
    const data = await 비동기작업
    if(data){
        console.log('done');
    }
}
```
* await는 해당 값을 promise 혹은 반환되어질 값을 넣어줍니다.
* await문은 함수 실행을 중단시키고 fulfill되거나 reject되기를 기다리고, 다시 함수를 실행시킵니다.
* 만약 값이 reject되면 reject값을 반환합니다.
---
### async/await를 이용하여 promise chain
```js
async function fun1(url){
    let var1;
    try{
        var1 = await getData1(url);
    }catch(e){
        var1 = await getData2(url);
    }
    return data
}
```

