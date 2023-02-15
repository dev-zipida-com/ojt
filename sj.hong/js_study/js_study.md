# 학습 내용

<!-- TOC -->

- [학습 내용](#%ED%95%99%EC%8A%B5-%EB%82%B4%EC%9A%A9)
  - [JavaScript](#javascript)
    - [JavaScript 특징](#javascript-%ED%8A%B9%EC%A7%95)
    - [브라우저 동작원리](#%EB%B8%8C%EB%9D%BC%EC%9A%B0%EC%A0%80-%EB%8F%99%EC%9E%91%EC%9B%90%EB%A6%AC)
    - [데이터 타입](#%EB%8D%B0%EC%9D%B4%ED%84%B0-%ED%83%80%EC%9E%85)
      - [변수 선언](#%EB%B3%80%EC%88%98-%EC%84%A0%EC%96%B8)
    - [타입 변환](#%ED%83%80%EC%9E%85-%EB%B3%80%ED%99%98)
  - [ECMAScript](#ecmascript)
  - [Node.js](#nodejs)
    - [Node.js 란?](#nodejs-%EB%9E%80)

<!-- /TOC -->

<br>

## JavaScript

<hr>

### JavaScript 특징

> JavaScript 는 HTML, CSS 와 함께 웹을 구성하는 요소 중 하나로, 웹 브라우저에서 동작하는 유일한 프로그래밍 언어다.
- 컴파일 작업을 수행하지 않는 인터프리터 언어.
- 자바스크립트는 명령형, 함수형, 프로토타입 기반 객체지향 프로그래밍을 지원하는 **멀티 패러다임 프로그래밍 언어**다.

<br>

### 브라우저 동작원리

> 자바스크립트는 렌더링 엔진이 아닌 자바스크립트 엔진이 처리한다. 
>  > HTML 파서는 script 태그를 만나면 JS 코드를 실행하기 위해 DOM 생성 프로세스를 중지하고 JS 엔진으로 제어 권한을 넘긴다. 제어 권한을 받은 JS 엔진은 script 태그 내의 JS 코드 또는 src 속성에 정의된 JS 를 로드하고 실행한다. JS 실행이 완료되면 HTML 파서로 제어 권한을 넘겨서 브라우저가 중지했던 시점부터 DOM 생성을 재개한다.

- 브라우저는 동기적으로 HTML, CSS, JavaScript 를 처리한다.
  - script 태그의 위치에 따라 블로킹이 발생하여 DOM의 생성이 지연될 수 있다는 것을 의미한다.
    - script 태그의 위치에 따라 동작순서가 달라지므로 body 요소의 가장 아래에 위치하는 것이 좋다.
      - 스크립트 로딩 지연으로 인한 HTML 렌더링 지장이 사라져서 페이지 로딩시간 단축
      - DOM 이 완성되지 않은 상태에서 JS가 DOM을 조작하면 에러 발생

<br>

### 데이터 타입

> 자바스크립트는 동적 타입 언어다. 변수의 타입 지정없이 값이 할당되는 과정에서 자동으로 변수타입이 결정된다.

- ECMAScript 표준은 7개의 데이터 타입을 제공한다.
  - 원시 타입 : 변경 불가능한 값
    - boolean
    - null : 변수에 값이 없다는 의미
      - JS 엔진이 참조하지 않은 메모리 영역에 대해 가비지 콜렉션을 수행한다.
    - undefined : 선언 이후 값을 할당하지 않은 변수
      - 사용되지 않은 변수는 JS 엔진에 의해 초기화된다.
    - number : 64비트 부동소수점 형
      - 모든 수를 실수로 처리한다.
    - string : 인덱스를 통해 접근가능
      - 변경 불가, 한번 생성된 문자열은 read only
    - symbol (ES6에서 추가) : 객체의 프로퍼티 키를 만들기 위해 사용
  - 객체 타입
    - object

```javascript
var foo;

console.log(typeof foo);  // undefined

foo = null;
console.log(typeof foo);  // object

foo = {};
console.log(typeof foo);  // object

foo = 3;
console.log(typeof foo);  // number

foo = 3.14;
console.log(typeof foo);  // number

foo = 'Hi';
console.log(typeof foo);  // string

foo = true;
console.log(typeof foo);  // boolean
```

#### 변수 선언

> ES5에서 변수를 선언할 수 있는 유일한 방법은 var 키워드를 사용하는 것이다.
- var 로 인해 여러가지 문제 발생
  - 함수 레벨 스코프
    - 전역 변수의 남발
    - for loop 초기화식에서 사용한 변수를 외부에서 참조할 수 있다.
  - var 키워드 생략 허용
    - 의도치 않은 변수의 전역화
  - 중복 선언 허용
    - 의도하지 않은 변수값 변경
  - 변수 호이스팅
    - 변수를 선언하기 전에 참조가 가능하다.

<br>

> ES6는 이러한 var 단점을 보완하기 위해 `let` `const` 키워드를 도입했다.

<br>

### 타입 변환

> 동적 타입 언어인 자바스크립트는 개발자의 의도와는 상관없이 자바스크립트 엔진에 의해 암묵적으로 타입이 자동 변환되기도 한다. 이를 암묵적 타입 변환 이라고 한다.

- 원시타입 + 문자열 => 문자열
  - \+ 연산자를 제외한 (-, *, /) 산술연산자는 숫자 값을 만든다.
  - \+ 단항 연산자는 숫자타입으로 변환해준다.

## ECMAScript

<hr>

<br>

## Node.js

<hr>

### Node.js 란?

> Node.js 는 Chrome V8 자바스크립트 엔진으로 빌드된 자바스크립트 런타임 환경이다. 브라우저에서만 동작하던 자바스크립트를 브라우저 이외의 환경에서 동작시킬 수 있는 자바스크립트 실행 환경.
- 주로 CSR 애플리케이션 개발에 사용되며 모듈, 시스템, HTTP 등 빌트인 API를 제공한다.
- 데이터를 실시간 처리하여 빈번한 I/O 가 발생하는 SPA(Single Page Application)에 적합하다.
  - CPU 사용률이 높은 애플리케이션에서는 권장 X

<br>
