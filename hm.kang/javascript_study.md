## javascript 
자바스크립트란 css html과 같은 정적언어를 동적으로 변경해 주는 언어. 경고창을 띄우는 등 기능을 만든 스크립트 언어.

특징

 - 인터프리터 언어로서 클라이언트의 웹 브라우저에 의해 해석되고 실행됩

 - HTML문서 내에서 기술되고 HTML 문서와 함께 수행된다.

 - HTML에 연산 제어 등 프로그래밍적인 요소를 추가하고 클라이언트의 자원을 활용할 수 있게 해준다.

Node.js 환경에서 서버측에서도 사용가능

### 변수 선언 방식
- var 
  - 변수를 여러번 선언해도 에러가 없다.<br>
  -> 같은 변수명으로 복잡해질수 있다

es6 추가
- let
  - 변수 재선언 불가능 , 변수 재할당 가능

- const
  - 변수 재선언 불가능 , 뱐수 재할당 불가능


# 기본 타입
## primitive type ( 원시 타입 )
- number
  -  정수와 실수를 구분하지 않고 모든수를 실수 하나로만 표현

- string

- boolean

- symbol ( ECMAScript 6부터 제공 )
  - 유일하고 변경할 수 없는 타입으로, 객체의 프로퍼티를 위한 식별자로 사용.

- undefine
  - null과 차이
  null : 아직 값이 정해지지 않은 것을 의미
  undefine : 타입이 정해지지 않음
    -> 초기화되지 않은 변수나 존재하지 않는 값에 접근할 때 반환됨.

- Object 객체타입


## 비교 연산자

|연산자 | 설명 |
|------|------|
| == | 왼쪽 피연산자와 오른쪽 피연산자의 값이 같으면 참을 반환함. |
| === | 외쪽 피연산자와 오른쪽 피연산자의 값이 같고, 같은 타입이면 참을 반환함. |
| != | 왼쪽 피연산자와 오른쪽 피연산자의 값이 같이 않으면 참을 반환함.|
| !== | 왼쪽 피연산자와 오른쪽 피연산자의 값이 같이 않거나, 타입이 다르면 참을 반환함. |


## 반복문 
- while : 조건문에 맞으면 수행
- do while : 일단 한번 수행후 조건문을 검사하여 while 수행
- for ( 초기식 ; 표현식 ; 증감식) : 식에 맞춰 반복 실행
- for in : 해당 객체의 모든 열거할 수 있는 프로퍼티(enumerable properties)를 순회할수 있도록 해준다.
~~~javascript
var arr = [3, 4, 5];
for (var i = 0; i < arr.length; i++) { // 배열 arr의 모든 요소의 인덱스(index)를 출력함.
    document.write(i + " ");
}
for (var i in arr) { // 위와 같은 동작을 하는 for / in 문
    document.write(i + " ");
}

//객체 프로퍼티에 접근
var obj = { name : "이순신", age : 20 };
for (var i in obj) {
    document.write(i + "<br>");
}
~~~
- for of : 반복할 수 있는 객체(iterable objects)를 순회할 수 있도록 해주는 반복문.

~~~javascript
var arr = [3, 4, 5];
for (var i = 0; i < arr.length; i++) { // 배열 arr의 모든 요소의 인덱스(index)를 출력함.
    document.write(arr[i] + " ");
}

for (var value of arr) { // 위와 같은 동작을 하는 for / of 문
    document.write(value + " ");
}
~~~


