# ECMAScript 6
### ES6
ES란 ECMAScript 의 약자로 자바스크립트의 표준, 규격을 나타내는 용어입니다.   
ECMAScript는 ECMA 인터네셔널의 ECMA-262 기술 규격에 정의된 표준화된 스크립트 프로그래밍  언어입니다.   
ES6는 2015년에 발행된 자바스크립트 표준 규격으로 ECMAScript 2015 입니다.   
보통 ES6, ECMAScript 6로 알려져 있습니다.

### let , const
ES5 까지는 변수를 선언할 때, var 키워드를 사용했습니다. var는 함수 레벨 스코프(Function-level scope)로 함수의 코드 블록만을 스코프로 인정합니다. 또한 변수의 중복 선언이 가능하고 변수 호이스팅이 되기 때문에 변수를 선언하기 전에 참조할 수 있습니다.   
사용이 편리할 수 있지만 변수의 중복과 함수 레벨 스코프로 인해 복잡성을 증가시키는 원인이 됩니다.   
ES6는 이러한 var키워드의 단점을 보완하기 위해 let과 const 키워드를 도입했습니다.

- let, const는 블록 레벨 스코프를 따르고 중복 선언이 불가능합니다.
- let은 변수에 재할당이 가능하지만 const는 재할당이 불가능합니다.

|키워드|스코프|중복선언|재할당|
|---|---|---|---|
|var| 함수 레벨 | 가능 | 가능 |
|let| 블록 레벨 | 불가능 | 가능 |
|const| 블록 레벨 | 불가능 | 불가능 |

#

### Template literal
ES6는 새로운 문자열 표기법인 ` 백틱(backtick)을 도입했습니다.   
템플릿 리터럴은 일반적인 문자열과 달리 여러 줄에 걸쳐 문자열을 작성할 수 있습니다. 또한 + 연산자를 사용하지 않아도 간단한 방법으로 새로운 문자열을 삽입할 수 있는 기능을 제공합니다. 이를 문자열 인터폴레이션(String Interpolation) 이라고 합니다.

```javascript
const name = 'Kim';

console.log(`My name is ${name}`)
// "My name is Kim"
```
문자열 인터폴레이션은 ${...}으로 표현식을 감싸고 표현식은 문자열로 강제 타입 변환됩니다.

#

### 화살표 함수
화살표 함수는 function 키워드 대신 화살표(=>)를 사용하여 보다 간략하게 함수를 선언할 수 있습니다.    
화살표 함수는 익명 함수로만 사용할 수 있기 때문에 함수 표현식을 사용합니다.
```javascript
// ES5
var pow = function (x) { return x * x; };
console.log(pow(10)) // 100

// ES6
const pow = x => x * x;
console.log(pow(10)); // 100
```
또 화살표 함수는 콜백 함수로 간결하게 사용할 수 있다.
```javascript
// ES5
var arr = [1, 2, 3];
var pow = arr.map(function (x) { // x는 요소값
  return x * x;
});

console.log(pow); // [ 1, 4, 9 ]

// ES6
const arr = [1, 2, 3];
const pow = arr.map(x => x * x);

console.log(pow); // [ 1, 4, 9 ]
```

#

### Rest 파라미터
Rest 파라미터는 매개변수 이름 앞에 세개의 점( ... ) 을 붙여 정의한 매개변수를 의미합니다. 함수에 전달된 인수들의 목록을 배열로 전달받고 전달된 인수들은 순차적으로 파라미터와 Rest 파라미터에 할당됩니다.
```javascript
function foo(param, ...rest) {
  console.log(param); // 1
  console.log(rest); // [2, 3, 4, 5]
}

foo(1,2,3,4,5);
```
Rest 파라미터는 이름 그대로 먼저 선언된 파라미터에 할당된 인수를 제외한 나머지 인수들을 모두 배열에 담아 할당합니다. 따라서 Rest 파라미터는 반드시 마지막 파라미터로 사용돼야 합니다.

#

### Spread 문법
Spread 문법은 이터러블한 인수를 개별 요소로 분리합니다.
```javascript
console.log(...[1, 2, 3]); // 1, 2, 3
console.log(,,,'Hello'); // H e l l o

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

arr1.push(...arr2); // arr1.push(4, 5, 6)

console.log(arr1); // [1, 2, 3, 4, 5, 6]
```

#

### 객체 프로퍼티 축약 표현, 동적 생성
- ES6에서는 프로퍼티 값으로 변수를 사용하는 경우, 프로퍼티 키 이름을 생략할 수 있습니다. 이때 프로퍼티 키 이름은 변수의 이름으로 자동 생성됩니다.   
- 대괄호 표기법을 사용해 객체 프로퍼티 키를 동적으로 생성 가능합니다.
```javascript
let x = 1, y = 2;
const obj = {x, y};

console.log(obj) // { x: 1, y: 2}

obj['z'] = 3;

console.log(obj) // { x: 1, y: 2, z: 3}
```

#

### 구조 분해 할당
구조 분해 할당은 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 표현식 입니다.
```javascript
let [a, b] = [10, 20];
console.log(a, b) // 10, 20

let x, y, rest;
[x, y, rest] = [1, 2, 3, 4, 5];
console.log(x, y); // 1, 2
console.log(rest); // [3, 4, 5]

const obj = {
  name: 'kim',
  age: 20,
  gender: 'male'
};

const {name, age} = obj;

console.log(name, age); // 'kim', 20
```

#

### Class
ES6는 클래스(class) 키워드를 사용해서 클래스를 정의할 수 있습니다. 클래스는 생성자 함수와 마찬자기로 new 연산자와 함께 클래스 이름을 호출하면 인스턴스가 생성됩니다.   
#### constructor
constructor는 인스턴스를 생성하고 클래스 필드를 초기화하기 위한 특수한 메소드로 클래스 내부의 캡슐화된 변수를 말합니다. 클래스 내에 한 개만 존재할 수 있으며 2개 이상의 constructor를 포함하면 문법 에러가 발생합니다.
#### extends
extends 키워드는 부모 클래스를 상속받는 자식 클래스를 정의할 때 사용합니다. 
#### super
super 키워드는 부모 클래스를 참조할 때 또는 부모 클래스의 constructor를 호출할 때 사용합니다.

```javascript
// 클래스 선언 부모 클래스
class Person {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log(`Hi! ${this.name}`)
  }
}

// 인스턴스 생성
const me = new Person('kim');
me.sayHi(); // Hi! kim

class Korean extends Person {
  constructor(name, country) {
    // super 는 부모 클래스의 constructor를 호출해 인수를 전달한다.
    super(name); 
    this.country = country;
  }
}
```

#

### 모듈
- ES5 까지 javascript에는 모듈에 대한 표준이 없었습니다.
- ES6 에서 처음으로 모듈에 대한 표준이 도입되었습니다.
- 모듈 표준이 없었을 당시에는 AMD, CommonJS 방식의 모듈시스템을 사용했습니다.
  
```HTML
<script type="module" src="./utils.js"></script>
```

- js 파일이 곧 모듈이 됩니다.
- 모듈에서 다른 모듈을 가져와 사용할 수 있고, 반대로 내보낼 수 있습니다. (import / export)

#

### Promise
- 프로미스는 자바스크립트의 비동기 처리를 위한 패턴입니다.
- 프로미스 이전엔 비동기 처리를 위한 패턴으로 콜백 함수를 사용했습니다.
- 전통적인 콜백 패턴은 콜백 헬로 인해 가독성이 떨어지고 비동기 처리중 발생한 에러 처리에 한계가 있었습니다.

#### 프로미스 생성
```javascript
// Promise 객체의 생성
const promise = new Promise((resolve, reject) => {
  // 비동기 작업을 수행한다.

  if (/* 비동기 작업 수행 성공 */) {
    resolve('result');
  }
  else { /* 비동기 작업 수행 실패 */
    reject('failure reason');
  }
});
```
