### JavaScript
##### 1.개요
> 1. 프로토타입기반의 객체지향 프로그래밍 언어로, 스크립트 언어에 해당된다.
> 2. 특수한 목적이 아닌 이상 모든 웹 브라우저에 인터프리터가 내장되어 있다.
> 3. HTML이 웹 페이지의 기본 구조를 담당하고, CSS가 디자인을 담당한다면 JavaScript는 클라이언트 단에서 웹 페이지가 동작하는 것을 담당한다. (동적인 요소)

#### 브라우저에서 할 수 있는 일

브라우저 환경에선 웹페이지 조작, 클라이언트와 서버의 상호작용에 관한 모든 일을 할 수 있다.

1. 페이지에 새로운 HTML을 추가하거나 기존 HTMl, 혹은 스타일 수정
2. 마우스 클릭이나 포인터의 움직임, 키보드 키 눌림 등과 같은 사용자 행동에 반응하기
3. 네트워크를 통해 원격 서버에 요청을 보내거나, 파일 다운로드, 업로드하기(AJAX나 COMET과 같은 기술 사용)
4. 쿠키를 가져오거나 설정하기, 사용자에게 질문을 건네거나 메시지 보여주기
5. 클라이언트 측에 데이터 저장하기(로컬 스토리지)

#### 자바스크립트만의 강점
다양한 장점이 있지만 대표적인 3가지를 예를 들 수 있다.

1. HTML/CSS와 완전히 통합할 수 있음
2. 간단한 일은 간단하게 처리할 수 있게 해줌
3. 모든 주요 브라우저에서 지원하고, 기본 언어로 사용됨

출처 : [모던 JavaScript 튜토리얼](https://ko.javascript.info/)

#### 사용법
CSS와 비슷하게 `HTML`문서 내에 기술하거나 별도의 파일로 분리하여 사용한다.
```
<!-- HTML 내에 기술 -->
<html>
    <head>
        <script type="text/javascript"> #HTML5부터 생략가능
            document.write('Hello World!');
        </script>
    </head>
    <body>
    </body>
</html>
```
```
<!-- 외부 파일에서 불러오기 -->
<head>
    <script type="text/javascript" src="test.js"></script>
</head>
```

#### 스크립트 언어
`JavaScript `는 스크립트 언어이자 인터프리터 방식이 사용되어 컴파일 과정이 별도로 필요하지 않다.
즉 브라우저에서 즉시 해석되어 실행되는데, 한 곳에서 만든 엔진을 사용하지 않기 때문에 브라우저 마다 완전 동이한게 동작한다고 하기 어렵다.

#### 동적타입 언어
자바스크립트에서는 개발자가 변수의 `타입`을 지정해주지 않는다.
정확히 말하면 변수의 값에 따라 인터프리터가 알아서 변수의 타입을 파악하고 값을 저장한다.
```
var a = 10;
var b = 'K';

function main() {
    return 2;
}

#var, let, const function 이라는 키워드를 사용하며, 타입을 명시하지 않는다.
```

#### 주석
```
/*
여러줄짜리 주석
*/

// 한줄짜리 주석
```

#### var, let, const 차이점
`var`는 `function-scoped` 이고 `let`, `const`는 `block-scoped` 이다.

`var` : 변수 재선언, 재할당이 가능하다.

es2015 추가
`let` : 변수에 재선언은 안되지만 재할당이 가능하다.
`const` : 변수 재선언, 재할당 모두 불가능하다.

`var`를 이용하면 이미 만들어진 변수이름을 재선언 하거나 
```
var a = 'test'
var a = 'test2'
#이미 만들어진 변수이름으로 재선언했는데 아무런 문제가 발생하지 않는다.
```
호스팅으로 인한 에러가 표시되지 않는다.
```
c='test'
var c
#hoisting으로 인해 ReferenceError에러가 안난다.
```

es2015에서 추가된 `let`과 `const`가 조금 더 엄격한 호이스팅 기준으로 인하여 기존의 `var`가 가지고 있던 문제를 어느정도 해결해 준다.

출처 [var, let, const 차이점은?](https://gist.github.com/LeoHeo/7c2a2a6dbcf80becaaa1e61e90091e5d)

##### 스코프(Scope)
어떤 변수들에 접근할 수 있는지를 정의한다.
1. 전역 스코프(Global Scope)
    * 변수가 함수 바깥이나 중괄호(`{}`) 바깥에 선언 되었다면 전역 스코프에 정의된다.
```
const hello = 'Hello World!"

function sayHello() {
    console.log(hello)
}

console.log(hello) // 'Hello World!"
sayHello() // 'Hello World!'

```
######  전역 스코프 문제점
* 전역 스코프에 변수를 선언할 수는 있어도, 그러지 않는 것이 좋다. 왜냐하면, 두 개 이상의 변수의 이름이 충돌하는 경우가 생길 수도 있기 때문이다. 만약 변수를 `const`나 `let`을 사용하여 선언했다면, 이름에 충돌이 발생할 때마다 에러가 발생한다.
```
let a = "hello"
let a = "World!" // Error, thing has already been declared
```
만약 `var`를 이용하여 변수를 선언했다면, 두 번째 변수가 첫 번째 변수를 덮어쓰게 된다. 이러면 디버깅이 어려워지기 때문에 이런 식으로 사용하면 안된다.

2. 지역 스코프(Local Scope)
    * 코드의 특정 부분에서만 사용할 수 있는 변수는 지역 스코프에 있다고 할 수 있다. 이를 지역 변수라고 부른다.
    * 자바스크립트에서는 두 가지의 지역 변수가 존재한다. 함수 스코프(function scope)와 블록 스코프(block scope)이다.

###### 함수 스코프(Function Scope)
함수 내부에서 변수를 선언하면, 그 변수는 선언한 변수 내부에서만 접근할 수 있다. 함수 바깥에서는 해당 변수에 접근할 수 없다.
```
function test() {
    const hello = "hello world!"
    console.log(hello)
}
test() // 'hello world!'
console.log(hello) // Error, hello is not defined
```
###### 블록 스코프(Block Scope)
중괄호(`{}`) 내부에서 `const` 또는 `let`으로 변수를 선언하면, 그 변수들은 중괄호 블록 내부에서만 접근할 수 있다.
```
{
    const hello = "hello world!"
    console.log(hello) // "hello world!"
}
console.log(hello) // Error, hello is not defined
```

출처 : [자바스크립트 스코프와 클로저](https://medium.com/@khwsc1/%EB%B2%88%EC%97%AD-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%8A%A4%EC%BD%94%ED%94%84%EC%99%80-%ED%81%B4%EB%A1%9C%EC%A0%80-javascript-scope-and-closures-8d402c976d19)

#### 객체
자바스크립트는 객체(object) 기반의 스크립트 언어이며 자바스크립트를 이루고 있는 거의 "모든 것"이 객체이다. 원시타입을 제외한 나머지 값들(함수, 배열, 정규표현식 등)은 모두 객체이다.
+ 키(이름)와 값으로 구성된 프로퍼티(property)의 집합이다.
+ 프로퍼티 값으로 함수를 사용할 수도 있으며 프로퍼티 값이 함수일 경우 메소드라 부른다.
```
var person = {
    name : 'Kang',
    age : '26',
    gender : 'male',
    sayHello: function() {
        console.log('Hello world!' + this.name);
    }
};

console.log(typeof person);
#object
console.log(person);
#{ name: 'Kang', age: '26', gender: 'male", sayHello....}

person.sayHello();
#Hello world! Kang
```

#### 배열
배열(array)은 1개의 변수에 여러 개의 값을 순차적으로 저장할 때 사용
```
var arr = [1,2,3,4,5];
#순서대로 0,1,2,3,4 의 인덱스를 가지고 있음

console.log(arr[1]);
#arr의 1번지 값은 2이다.
```

#### 원시타입 
변경 불가능한 값이며 pass-by-value(값에 의한 전달)이다.
> boolean, null, undefined, number, string, symbol(ES6에서 추가)
> 객체 타입 : object

#### undefined
undefined 타입의 값은 `undefined`가 유일하다. 선언 이후 값을 할당하지 않은 변수는 undefined 값을 가진다.
+ 즉 선언은 되었지만 값을 할당하지 않은 변수에 접근하거나 존재하지 않는 객체 프로퍼티에 접근할 경우 이 값이 반환된다.

#### null
null 타입의 값은 `null`가 유일하다.
+ 대소문자 구분으로 인한 `null`과 Null, NULL 등과 다르다.
의도적으로 변수에 값이 없다는 것을 명시할 때 사용한다.
+ 참조 정보를 제거할 때 사용한다.
+ 또는 함수가 호출되었으나 유효한 값을 반환할 수 없는 경우, 명시적으로 null을 반환하기도 한다.
+ HTML 요소를 검색해 반환하는 Document.querySelector()는 조건에 부합하는 HTML 요소를 검색할 수 없는 경우 null을 반환한다.

