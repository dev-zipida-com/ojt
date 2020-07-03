Javscript
===
* 자바스크립트는 웹페이지에서 적용할 수 있는 스크립트 혹은 프로그래밍 언어입니다.
* 자바스크립트는 HTML,CSS이후 적용하는 이벤트입니다 HTML에서 작성되어진 태그를 CSS를 거쳐 자바스크립트에 적용이 되며 자바스크립트에서 변경되어진 태그 속성을 CSS를 거쳐 HTML로 적용이 됩니다.
* javascript는 이벤트 중심의언어 입니다.
    * 이벤트는 클라이언트가 동작을 하면 그에 대한 반응으로 작용됩니다.
* 인터프리터 언어입니다.
* HTML문서에 연결하여 사용합니다.
```
<script src='javscript.js'> //HTML내부에 javascript를 선언해주어야 해당 scirpt가 적용이 됩니다.
```
* 자료형을 철저하게 검사하지 않습니다.
* C언어
```
int a=1
char b="h"

printf(a+b) //에러 발생합니다 a는 정수형 b는 문자로 선언되어 자료형이 맞지 않기 때문입니다.
```
* javascipt
```
var a=1
char b="h"

console.log(a+b) //자료형을 엄격하게 관리하지 않기때문에 1h로 출력이 됩니다.
```
* 자바스크립트의 HTML에서 태그의 id,class를 받아서 사용할 수 있습니다.
```
const selectId = document.getelementbyid('idname')//태그의 id를 받아올 수 있습니다.
const selectClass = document.queryselector('.classname)//태그의 class를 받아올 수 있습니다.
```
* id와 class의 차이
    * 내부에 한개만 존재해야 할 경우에는 id로 설정할 수 있습니다 
    * 내부에 여러개의 속성을 한번에 처리할 수 있습니다. 여러개의

---
### scope
* scope는 global,local로 나뉘어집니다.
    * global : 전역변수입니다. 스크립트 어디에서도 사용가능합니다.
    * local : 지역변수입니다. 정의되어진 함수 내에서만 사용가능합니다.
    #### 지역변수의 유효범위는 함수입니다.
    ```
    function local(){        
        if(True){
            var a=5
            var b=0
            console.log("b:"+b)b=0
        }
        console.log("a:"+a) //a=5
    }
    ```
    다른 언어에서는 console.log("a:"+a) //a=5부분에서 오류가 발생합니다. 지역변수의 범위는 제어문에 한정되기 때문입니다.허나 자바스크립트의 유효범위는 함수 내부가 범위이기 때문에 a의 출력에 오류가 발생하지 않습니다.
    #### 변수명 중복
    ```
    var a=0
    function name(){
        var a=10
        console.log("function:"+a)//a=10
    }
    console.log("global:"+a)//a=0
    ```
    변수명을 재 선언하여도 문제가 되지 않습니다 선언한 변수를 출력할때 가장 가까운 범위에 존재하는것을 참조하여 사용합니다.
    #### 함수내에서 전역변수 선언
    ```
    function global(){
        var a=10//var 선언 = 지역변수
    }
    function globalTest(){
        console.log(a)//에러발생
    }
    ```
    이경우에는 에러가 발생합니다. var a=10은 global함수의 지역변수 이기 떄문에 선언을 하여도 다른함수인 globalTest에서는 변수가 존재하지 않아서 확인할 수 없습니다.
    ```
    function global(){
        a=10 //var선언하지 않음 = 전역변수
    }
    function globalTest(){
        console.log(a)//10출력
    }
    ```
    위 코드와 차이점은 global함수에서 a를 선언할때 var을 이용하여 변수를 선언하지 않았습니다. 이 차이로 a는 전역변수로 선언이 되어 다른 함수에서도 변수를 활용할 수 있습니다.
    #### 렉시컬
    ```
    var lexical ="global"
    function lexicalTest(){
        console.log(lexical)//undefined
        var lexical ="local"
        console.log(lexical)//local
    }
    ```
    렉시컬은 함수했을때 실행했을때가 아니라 정의되었을때 실행합니다.
    예를들어 전역변수로 선언한뒤 함수에서 사용하면 문제가 발생합니다.
    이 코드에서는 추가적으로 호이스팅에 관하여 설명이 가능합니다.
    #### 호이스팅
    ```
    function hoistingTest(){
        console.log(hoisting)//undefined
        var hoisting = 10
        console.log(hoisting)//10
    }
    ```
    다른 언어에서는 첫줄에서 hoisting이 선언이 안되어있어서 오류가 발생합니다. 허나 자바스크립트에서는 선언을하면 아래에서 끌어올려서
    정의가 되어있지 않기때문에 정의되어지지않음 이라고 선언됩니다.
---
### 실행문맥
