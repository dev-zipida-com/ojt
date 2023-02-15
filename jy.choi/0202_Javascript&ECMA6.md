# Javascript Introduction
===
> 목차
[1. Javascript란](#Javascript란)
[2. 느슨한 타입의 동적 언어](#느슨한-타입의-동적-언어)
[3. Javascript의 특징 (ECMAScript6)](#javascript의-특징-ecmascript6)
  [1. 스코프와 호이스팅](#스코프와-호이스팅)
  [2. javascript의 배열(Array)](#javascript의-배열array)
    [1. 배열(Array)과 연결리스트(Linked list)](#배열array과-연결리스트linked-list)
    [2. 배열 다루기](#배열-다루기-출처1)
    [3. 배열의 순회: 반복연산자](#배열의-순회-반복연산자)
      [고차 함수형(High-order function) 반복연산자](#고차-함수형high-order-function-반복연산자-출처2)
  [3. 전개연산자](#전개연산자)
  [4. 화살표 함수](#화살표-함수)
  [5. 클로져](#클로져)
  [6. 클래스](#클래스)

===

## Javascript란
* Javascript는 프로토타입 기반의 객체 기반의 프로그래밍 언어입니다. HTML로는 웹의 내용을 작성하고, CSS로는 웹을 디자인하며, 자바스크립트로는 웹의 동작(dinamically interact with users)을 구현할 수 있습니다.
* 자바스크립트는 타입(가령 int, string, ...)을 명시할 필요가 없는 인터프리터 언어로, Event driven 개발, Class / Object 기반의 객체지향 프로그래밍, 함수형 프로그래밍이 모두 가능합니다(=일급 객체).
* 자바스크립트는 call stack과 Kernel을 사용한 비동기(Asynchronous)처리를 전제합니다. 하나의 함수가 처리되는 동안, 다른 여러 함수를 처리하며(Non-blocking), 함수 처리가 완료되면 가져와 보여줍니다.
  - vanilla javascript의 비동기 처리의 예를 들면 다음과 같습니다.
  ```javascript
    fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
  ```
* 1996년에 넷스케이프(Netscape)는 자바스크립트를 국제 표준안으로 만들기 위해 ECMA(European Computer Manufacturers Association)에 제출합니다. ECMA는 ECMAScript라는 새로운 표준을 제정하였고, 그 첫 번째 버전인 ECMA-262를 1997년에 공표합니다. 현재 자바스크립트의 최신 표준은 2015년에 발표된 ECMAScript 6입니다.
* HTML 문서 내부에서, 다음과 같이 사용할 수 있습니다. 불필요한 에러를 예방하기 위해 일반적으로 script tag를 body tag 아래에 둘 수 있습니다.
  ```html
  <script>
      document.getElementById("text").innerHTML = "Hello World!";
  </script>
  ```

## 느슨한 타입의 동적 언어
* 자바스크립트는 변수 선언 시 타입(types)을 개발자가 지정해주어야 하는 자바, 또는 C와 같은 강 타입/정적 타입 언어와 구분되는 약 타입/동적 타입/느슨한 타입(Loosen type) 언어입니다. 
* 약 타입 언어인 자바스크립트는, 변수 선언 단계에서 의도적인 형 지정을 요구하지 않아 강 타입 언어보다 편의성에서 강점이 있습니다. 또한 다양한 변수 타입을 원시 타입 / 참조 타입 등으로 간추렸습니다(Dynamic language). 
  * 원시 타입 (Primitive types: Immutable values)
    | 데이터 타입 | 형태 | 메모리의 크기 | 표현 가능 범위 |
    |:----------|:----------:|----------:|
    | Boolean 타입 | True, False  |  1bit| |
    | Null 타입 | null | 1byte | |
    | Undefined 타입 | undefined | - | |
    | Number 타입 | 1 | 8byte(정수/소수 구분이 없음) | |
    | String 타입 | char |  한 문자 당 2byte| |
    | Symbol 타입 | symbol("") | - | |

    * 주의: **비어있음**을 표현하는 javascript의 표현은 크게 세 가지가 있습니다. 
      * 1. empty: empty는 반복문을 통하여 객체를 순회할 때 잡히지 않는다. empty는 변수가 선언되기 이전 단계에서 개념적으로 존재하는 것으로 어떤 주소도 가리키지 못한다.
      * 2. undefined: 개발자가 의도적으로 undefined 값을 할당하는 경우 반복문을 통해 객체를 순환할 때 값이 할당된 변수로써 순회 대상이 되지만, 변수를 초기화만 하고 값을 할당하지 않은 상태와 같이 자바스크립트 엔진이 자동적으로 undefined를 할당하는 경우에서는 순회 대상이 되지 않는다. 때문에 의도적으로 undefined를 할당하는 것은 예기치 못한 오류를 발생시킬 수 있다. 
      * 3. null: null의 타입을 받아올 때 아래와 같이 object type을 반환하므로 주의해야 한다. 과거 자바스크립트 버전의 버그이지만, 과거 버전을 기반으로 빌드된 여러 웹페이지가 여전히 잘 사용되고 있어 건드리지 못하고 있는 상태이다.
      ```javascript
      console.log(typeof null) // Object
      console.log(null == undefined) // true
      console.log(null === undefined) // false
      ```

  * 참조 타입 (Reference types/ Object types: Mutable values)
    | 데이터 타입 | 주 사용 목적 |
    |:----------:|:-:|
    | Object 타입 | 동적 데이터 저장 및 전송  | 
    | Array 타입 | 동적 데이터 저장 공간 |
    | Date 타입 | 정해진 날짜, 시간 반환 |  | 
    | Function 타입 | 메서드를 담고있는 인스턴스 생성 | 
    | Primitive wrapper 타입 | 원시 값 조작을 위한 참조 타입 | 

* 이는 개발 편의성에 있어 장점이 있지만, 서버가 고도화될수록 개발자가 의도한 것과 다른 타입의 값을 언제든 받아들일 수 있다는 점, 타입을 지정하도록 하고 있는 다른 강 타입 언어와의 호환성 등을 이유로 변수 선언시 타입을 지정할 수 있도록 할 필요가 점점 커져왔습니다. 
* Typescript, Flow 등은 더 나은 개발 환경 제공 및 비의도적인 장래의 오류를 예방하기 위해 변수에 타입을 지정할 수 있도록 선택권을 부여하고 있습니다. Server side language로 최근 뜨고있는 Nest.js의 경우 Typescript를 Defalut로 설치하도록 하고 있는 등입니다. 

## Javascript의 특징 (ECMAScript6)
### 스코프와 호이스팅
  * 만약 어떤 변수가 함수 내부에 정의되었거나, 중괄호 밖에 정의되었다면 이 변수를 전역 스코프에 정의되었다고 말합니다. 반대로 중괄호 내부에 정의된 변수가 있다면 이 변수는 지역 스코프라고 합니다. 
  * 만약 어떤 지역 스코프에서 선언된 변수가 있다면, 이 변수는 전역 스코프나 다른 함수(즉 다른 지역 스코프)에서 참조할 수 없습니다.
  ```javascript
  var a = 1;

  function test() {
    var b = 2;
    console.log(a); /* 1이 출력됩니다. */
    console.log(b); /* 2가 출력됩니다. */
  }

  console.log(b); /* b는 지역 스코프 변수이므로 참조할 수 없습니다. ReferenceError: b is not defined */
  ```

  * 호이스팅은 자바스크립트의 특징 중 하나로, 함수를 선언하면 **어떤 위치에 있던** 그 함수의 시작 위치로 끌어올리는 현상입니다(즉 .js file도 결국 함수와 같을 것입니다).
  ```javascript
  function test(){
      console.log(a) // 초기화 후 "hoist"라는 string이 할당되기 전이므로, undefined가 출력됩니다.
      var a = "hoist" 
      console.log(a) // "hoist"라는 string이 출력됩니다.
  }

  test()
  ```
  * 위의 예시는 다음 코드와 정확히 일치하는 결과를 반환할 것입니다.

  ```javascript
  function test(){
      var a // 변수 a를 선언하고, 데이터 공간을 할당한 뒤, 초기화합니다.
      console.log(a) // 초기화된 a의 값을 호출합니다(= undefined).
      var a = "hoist"
      console.log(a) // "hoist"가 return됩니다.
  }

  test()
  ```

  * 변수 뿐 아니라 함수도 호이스팅 되지만, 함수 선언식의 경우 선언과 초기화가 동시에 이루어 집니다.
  ```javascript
  test()

  function test(){
      console.log("hello world!")
      let a = 3 
      console.log(a) // 3
  }

  // 위의 코드와 아래의 코드는 동일한 결과물을 출력합니다. 

  function test(){
      console.log("hello world!")
      let a = 3 
      console.log(a) // 3
  }

  test()
  ```

  * 자바스크립트는 코드를 실행하기 위해 일종의 전처리 과정을 거칩니다.
  * 자바스크립트는 전처리 과정에서 미리 코드 내부의 변수들과 함수들을 파악합니다. 그리고 그 변수들과 함수들을 위한 메모리 공간을 할당하고, 초기화하는 과정을 거칩니다. 이 과정을 **파싱(Parsing)**이라고 합니다.
  * 변수들과 함수들은 자신의 직접 상위 객체의 멤버로 포섭됩니다(**스코프 등록**).
  * 파싱은 전역 수준에서 먼저 일어나고, 전역 수준의 파싱이 끝난 뒤 코드가 실행 단계로 들어서면, 자바스크립트는 함수를 만날 때마다 다시 그 함수의 지역 수준에서 파싱 과정을 거칩니다.  
  * 파싱 과정에서 자바스크립트 전역/ 지역 스코프의 첫 시작점 수준으로 변수등을 끌어올리는(hoisting)것과 같은 현상은 자바스크립트에게 미리 이러이러한 변수들과 함수들을 쓸 것이라고 알려주는 역할을 할 수 있습니다. **하지만** 실행 컨텍스트 과정에서 초기화된 변수가 코드의 실행 단계에서 개발자가 의도한 값이 할당되기도 전에 호출됨으로써 예기치 못한 오류를 발생시킬 수 있습니다.

  * 이런 문제때문에 ES2015 이후부터 자바스크립트에서 **var 대신 let과 const를 사용할 수 있게 됩니다**. let과 const는 실행 컨텍스트 과정에서 호이스팅이 발생하는 것은 동일하지만, var와 달리 선언만 가능하고 데이터 할당과 초기화가 이루어지지 않음으로써, 개발자가 의도한 값이 할당되기 전, 미리 참조할 수 없게 만들어졌습니다. 
  ```javascript
  function test(){
      console.log(a) // let으로 선언한 a는 아직 초기화되지 않았으므로, 참조할 수 없습니다(bumped in a TDZ!!).
                    //ReferenceError: Cannot access 'a' before initialization
      let a = 1      // const로 선언하였더라도 마찬가지입니다. 
      console.log(a)
  }

  test()
  ```

  * let과 const는, 함수 스코프를 가진 var와는 달리 **블록 스코프**를 가지고 있습니다. 때문에 중괄호( { ... } ) 내부에서 let과 const를 통해 선언된 변수를 중괄호 밖에서는 재정의할 수 없는 반면, function scope인 var를 통해 선언한 경우는 그렇지 않습니다.
  * 또한 let으로 선언한 변수는 재선언이 불가능하지만 변수에 재할당하는 것은 가능합니다. 하지만 const는 변수를 재선언하거나, 재할당할 수 없습니다.

### javascript의 배열(Array)
#### 배열(Array)과 연결리스트(Linked list)
* 배열과 연결리스트 모두 특정한 변수에 여러 개의 값을 저장하기 위해 사용할 수 있습니다. 자바스크립트의 경우, 여러 서로 다른 타입의 값을 하나의 변수에 저장할 수 있다는 특징이 있습니다. 
* 배열의 경우, 배열형 변수의 선언 단계에서 일정한 크기의 **연속된** 메모리 공간의 할당을 필요로 합니다. 반면 연결리스트의 경우, 연속된 메모리 공간을 반드시 할당할 필요가 없지만, **각각의 메모리 공간이 다음 메모리 공간의 주소를 가지고 있다**는 특징이 있습니다. 
* 자바스크립트는 연결리스트를 구현하기 위한 별도의 도구를 지원하지는 않는 것으로 알고 있습니다. 그러나, 상기한 배열의 정의와 자바스크립트가 제공하는 배열 tool은, 자바스크립트의 배열이 일종의 객체라는 점에서 차이가 있습니다.
* 자바스크립트 배열의 "여러 서로 다른 타입의 값을 하나의 변수에 저장할 수 있다는 특징"은, 자바스크립트 배열이 해시 테이블에 저장된 여러 객체를 연결시키는 것을 기반으로 자바스크립트에 최적화한 결과물이기 때문입니다.
* 자바스크립트 배열은 고정된 크기나 요소로 초기화할 필요가 없고, 자유롭게 사이즈를 늘리거나 줄일수도 있습니다. 이런 자바스크립트 배열을 달리 구분하여 **희소 배열(sparse array)**이라고 부릅니다.

#### 배열 다루기 [^출처1]
##### 1. 생성: Array()
  ```javascript
  const arr = new Array(3) // (3) [empty * 3]
  const arr2 = new Array([1,2,3]) // [1,2,3]
  ```

##### 2. 요소 추가
* 인덱스를 사용하여 필요한 위치에 값을 할당할 수 있습니다.
```javascript
const arr = [];
arr[3] = 3;
console.log(arr) // [empty, empty, empty, 3]
```

##### 3. 요소 삭제: delete / splice
```javascript
const arr = [1, 2, 3, 4]
delete arr[2] // delete는 배열의 크기는 유지한 채 값만 제거합니다. eg.) [1, 2, empty, 4]
arr.splice(2, 1) // splice method는 첫 번째 인수인 start index로부터, 두 번째 인수인 end index 전까지 값과 배열 모두 제거합니다. eg.) [1, 2, 4] 
```

##### 4. 배열의 순회 - 후술

##### 5. 길이: Array.prototype.length
```javascript
const arr = [1, 2, 3, 4]
console.log(arr.length) // 4
```

##### 6. Array methods
 * **Array.isArray()**: Array 타입인지 Boolean 타입의 값으로 반환합니다.

 * **Array.from()**: 유사 배열 객체(array-like object: key가 순차적인 index 역할을 수행하며 length를 key-value로 가지는 배열과 유사한 객체) 또는 이터러블 객체(iterable object: Symbol.iterator 메소드를 구현하거나 프로토타입 체인에 의해 상속한 객체)를 변환하여, 새로운 배열을 반환합니다.
 ```javascript
 const arr3 = Array.from({ length: 5 }, function (v, i) { return i; });
 console.log(arr3); // [ 0, 1, 2, 3, 4 ]
 ```

 * **Array.of()**: 인수를 요소(Elements)로 갖는 배열을 반환합니다. 
 ```javascript
 const arr = Array.of(1, 2, 3, 4) // [1, 2, 3, 4]
 ```

 * **Array.prototype.indexOf()**: 배열에 인수와 같은 요소가 있는지 탐색하여 요소의 위치를 반환합니다. 만약 존재하지 않는 경우 -1을 반환하고, 중복되는 경우 첫 번째 요소의 인덱스를 반환합니다.
 ```javascript
 const arr = [1, 2, 3, 3, 4]
 arr.indexof(3) // 2
 arr.indexof(5) // -1
 ```

 * !ES7! **Array.prototype.includes()**: 배열에 인수와 같은 요소가 있는지 탐색하여 Boolean 타입의 값을 반환합니다. 
 ```javascript
 const arr = ['a', 'b', 'c']
 arr.includes('a') // true
 arr.includes('d') // false
 ```

 * **Array.prototype.concat()**: 인수로 전달받은 배열, 또는 값을 기존의 배열의 끝에 합쳐 반환합니다. 단, 원본 배열은 변경되지 않습니다.
 ```javascript
 const arr = [1, 2]
 const arr2 = arr.concat([3, 4]) // arr2 = [1, 2, 3, 4]
 console.log(arr) // [1, 2]
 ```

 * **Array.prototype.join()**: 인수로 전달받은 값을 구분자(seperator)로 하여, string type으로 변환된 배열을 구분자에 따라 연결 및 반환합니다.
 ```javascript
 const arr = [1, 2 ,3 ,4]
 arr.join() // "1,2,3,4"
 arr.join("") // "1234"
 ```

 * **Array.prototype.push()**: 인수로 전달받은 모든 값을 원본 배열의 마지막에 요소로 추가하고 변경된 length 값을 반환합니다. push 메소드는 원본 배열을 직접 변경합니다(주의: .concat은 원본 배열 변경 XXX).
 ```javascript
 const arr = [1, 2];
 arr.push(3, 4); // arr = [1,2,3,4]
 arr[5] = 5 // arr = [1,2,3,4,5] , exactly same as .push!
 const arr2 = [...arr, 6] // arr2 = [1,2,3,4,5,6] with spread operator. same!
 ```

 * **Array.prototype.pop()**: 원본 배열에서 마지막 요소를 제거하고 제거한 요소를 반환합니다. pop 메소드는 원본 배열을 직접 변경합니다.
 ```javascript
 const arr = [1,2]
 arr.pop() // arr = [1]
 ```

 * **Array.prototype.reverse()**: 배열 요소의 순서를 반대로 변경합니다. 이때 원본 배열이 변경됩니다.
 ```javascript
 const a = ['a', 'b', 'c'];
 const b = a.reverse();

 console.log(a); // [ 'c', 'b', 'a' ]
 console.log(b); // [ 'c', 'b', 'a' ]
 ```

 * **Array.prototype.shift()**: 배열에서 첫요소를 제거하고 제거한 요소를 반환합니다.
 ```javascript
 const a = ['a', 'b', 'c'];
 const c = a.shift();

 console.log(a); // a --> [ 'b', 'c' ]
 console.log(c); // c --> 'a'
 ```

 * **Array.prototype.slice()**: 인자로 지정된 배열의 부분까지 복사하여 반환합니다. 원본 배열은 변경되지 않습니다.
 ```javascript
 const items = ['a', 'b', 'c'];

 let res = items.slice(0, 1);
 console.log(res);  // [ 'a' ]
 ```

### 배열의 순회: 반복연산자
* 1. for: while문과 같이, 반복 처리를 위해 사용되는 반복연산자의 하나입니다.
* 2. for in: **객체**의 순환을 위해 사용됩니다. 만약 자바스크립트의 배열을 인수로 사용하는 경우, index를 반환합니다(자바스크립트의 배열 또한 객체이므로).
```javascript
const arr = [1, 2 ,3]
const obj = {a: 1, b: 2, c: 3}

for (let value in arr) {
  console.log(value)
}
// 1, 2, 3

for (let value in obj) {
  console.log(value) // Uncaught TypeError: obj is not iterable
}
```

* 3. for of: **배열**의 순환을 위해 사용됩니다. 만약 객체를 인수로 사용하는 경우, 타입에러를 반환합니다. 
```javascript
const arr = [1, 2 ,3]
const obj = {a: 1, b: 2, c: 3}

for (let value in arr) {
  console.log(value)
}
// 0, 1, 2 (indexes)

for (let value in obj) {
  console.log(value) // 1, 2, 3
}
```

#### 고차 함수형(High-order function) 반복연산자 [^출처2]
* 고차 함수: 자바스크립트에선 함수를 변수에 할당하거나, 함수를 인수 또는 파라미터에 할당할 수 있습니다. 고차 함수란 함수를 인자로 받거나, 또는 함수를 반환하는 함수를 말합니다. 예를 들어, Promise 객체나 아래와 같은 고차함수 반복 연산자를 들 수 있습니다.

  1. Array.prototype.map(): map() 메소드는 입력으로 들어온 배열 내 모든 엘리먼트를 인자로 제공받는 콜백 함수를 호출함으로써 **새로운** 배열을 만들어냅니다.
  ```javascript
  const arr1 = [1, 2, 3]
  const arr2 = arr1.map(v => v ** 2) // map 함수는 arguments로 (value, index, array)를 받을 수 있습니다. 사용하지 않는 인수는 생략할 수 있습니다. 
  console.log(arr2) // [1, 4, 9]
  ```

  2. Array.prototype.filter(): filter() 메소드는 콜백 함수에 의해 제공된 테스트를 통과한 모든 엘리먼트를 가진 새로운 배열을 만들어냅니다. 
  ```javascript
  const persons = [
  { name: 'Peter', age: 16 },
  { name: 'Mark', age: 18 },
  { name: 'John', age: 27 },
  { name: 'Jane', age: 14 },
  { name: 'Tony', age: 24},
  ];
  const fullAge = persons.filter(person => person.age >= 18);
  console.log(fullAge); // ['Mark', 'John', 'Tony']
  ```

  3. Array.prototype.reduce(): reduce method는 하나의 callback function과 option인 initial value, 두 개의 arguments를 받습니다. callback function은 (accumulator, current value, current index, source array) 네 개의 인수를 받으며, index와 source array는 생략할 수 있습니다. 정해진 횟수만큼 콜백함수를 실행하여 결과값을 축적, 반환합니다. 
  ```javascript
  const arr = [5, 7, 1, 8, 4];

  const sum = arr.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
  }, 10); // initial value를 주는 경우~

  console.log(sum); // 35
  ```

  4. Array.prototype.forEach(): **배열의 반복**을 위해 사용될 수 있는 메서드입니다. 배열의 처음부터 마지막까지 순회하며 콜백함수를 실행합니다. 새로운 배열을 생성하지 **않습니다**.
  ```javascript
  const values = [1, 2, 3, 4]
  values.forEach(v => v * 2) // [2, 4, 6, 8]
  ```

### Spread 문법
* Spread 문법(Spread Syntax, ...)는 대상을 개별 요소로 분리한 뒤, 새로운 배열을 생성하여 반환합니다. Spread 문법의 대상은 이터러블해야 합니다.
* Spread 문법을 인수로 사용하는 경우, 함수의 인수에 사용할 수 있는 ...rest 문법과 구분하여 사용해야 합니다. 
* ...rest 문법은 함수의 인수 끝 부분에 위치해야하며, 정해지지 않은 크기의 인수를 받을 때 유용합니다. 
```javascript
test(1, 2, 3)
function test(...rest){ // rest 문법
  console.log(Array.isArray(rest)) // true
  console.log(rest) // test 함수의 parameter는 number type의 세 변수지만, array 형태로 받습니다. eg. [1, 2, 3] 
}
```
* 유사한 표현형(...)인 Spread 문법을 parameters에 위치하게 하면, 그 함수는 인수로 parameter 배열의 각 값을 개별적인 인자로 받아 처리합니다. 
```javascript
const parameters = [1, 2, 3]
test(...parameters) // Spread 문법

function test(x, y, z) {
  console.log(x, y, z) // 1, 2, 3
}
```

### 화살표 함수
* 화살표 함수는 ES6 이후 도입된 함수의 간략한 표현형입니다. 보다 직관적으로 함수의 입출력을 표현할 수 있다는 장점이 있습니다.
```javascript
let promise = new Promise((resolve, reject) => { // 인수로 arrow function이 사용된 경우
  console.log(resolve, reject)
})
```
* 화살표 함수는 변수에 함수를 할당하지 않는 한 익명 함수로 사용할 수 있습니다. (일반 function / arrow function -> GC와 상관 XXX!)
* 화살표 함수는 일반 함수와 달리 호이스팅 단계에서 처리되지 않고, 코드 실행 단계에서 함수가 수행 및 할당됩니다. 이러한 특징 때문에 화살표 함수 내부에서 this 표현을 사용하는 경우, 상위 스코프(window 객체)의 this 표현과 같은 내용물을 가리킬 수 있기 때문에 주의해야 합니다. 

### 클로져
#### 실행 컨텍스트 
* 실행 컨텍스트(Execution context)란, **자바스크립트 코드가 실행되고 연산되는 범위**를 나타내는 추상적인 개념입니다. [^출처3]
* 우리가 코드를 작성하고 실행한다면 실행 컨텍스트(Execution Context) 내부에서 실행되고 있는 것입니다. 즉 코드들이 실행되기 위한 환경이자 하나의 박스이자 컨테이너라 볼 수 있습니다.
* 실행 컨택스트 단계에서 JS engine은 변수와 함수의 스코프, "this" keyword가 가리키는 것, 그리고 변수 및 함수의 값 등을 정의(definition)합니다. 우리가 JS code 내부에서 함수를 호출할 때 마다, 새로운 실행 컨텍스트가 생성되고 JS call stack의 최상단에 새로 위치하게 됩니다. 
* 실행 컨텍스트는 지금 실행되는 코드의 **현재 정보(가령 지역 변수나 함수의 인수 등)을 기억**하고 있습니다. call stack 최상단에 위치한 현재의 실행 컨텍스트는, 새로운 함수가 실행될 때 마다 언제든지 교체될 수 있으며, 이전의 실행 컨텍스트는 함수의 결과값이 return될 때 까지 보존(save)되었다가 함수 실행이 끝난 후 다시 call stack으로 돌아옵니다(비동기 처리 by Event loof). 

#### 클로져(closure)
* 클로져는 비공개 변수를 가질 수 있는 환경에 있는 함수로, 1. 함수 스코프 내부 변수, 함수의 현재 주변 정보(lexical context)를 보존하기 위하여, 2. 변수의 은닉성을 보전하기 위하여 사용할 수 있습니다. 다음은 클로져의 한 예입니다.
```javascript
var counter = function() {
  var count = 0;
  function changeCount(number) {
    count += number;
  }
  return {
    // clousures here
    increase: function() {
      changeCount(1);
    },
    decrease: function() {
      changeCount(-1);
    },
    show: function() {
      alert(count);
    }
  }
};

var counterClosure = counter();
counterClosure.increase();
counterClosure.show(); // 1
counterClosure.decrease();
counterClosure.show(); // 0
```
* 단점으로는 잘못 사용했을 시 성능 문제와 메모리 문제가 발생할 수 있습니다. closure의 비공개 변수는 자바스크립트에서 언제 메모리 관리를 해야할 지 모르기 때문에 자칫 메모리 낭비로 이어질 수 있습니다. [^출처4]
* ES6 이후, JS가 (프로토타입 기반이 아닌)class 기능을 제공함으로서, 변수 은닉성을 보전하는 새로운 방법이 제안되었으므로, 메모리 누수 여지가 있는 클로져를 계속 사용해야 하는지에 대하여 다양한 의견이 오가고 있습니다.

### 클래스
#### 객체
* JS에서 객체(object)는 프로퍼티(property)의 집합입니다. 프로퍼티는 고유한 키(key)와 그에 매칭되는 값(value)으로 구성되어 있습니다. 프로퍼티는 객체가 생성('{}' 또는 'new Object()')된 이후 자유롭게 생성, 삭제, 수정될 수 있습니다.
#### 클래스 (after es6)
* class는 객체를 생성하기 위한 청사진을 만드는 문법 표현입니다. JS에서 class는 역시 하나의 객체이며, es6 이전 class 구현을 위해 사용하던 (프로토타입 객체 + 클로져)의 Syntax sugar이자, 호이스팅됩니다(객체니까!).
```javascript
class Person {
  constructor(name, age) { // constuctor 선언
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person = new Person('John Doe', 30); // 인스턴스 생성
person.sayHello();
// Output: "Hello, my name is John Doe and I am 30 years old."
```

* JAVA 등 여타 객체지향 언어의 class와 유사하게, JS의 class도 "extends" keyword를 사용하여 부모 클래스로부터 자식 클래스로의 상속이 가능합니다. 
```javascript
class Animal { 
  constructor(name){
    this.name = name; // this로 class 내부의 변수 name을 가리키고 있습니다.
  }

  speak(){
    console.log(`${this.name} makes a sound`);
  }
}

class Dog extends Animal { // Animal 상속
  speak(){ // 오버라이딩
    console.log(`${this.aname} barks.`)
  }
}

const dog = new Dog("Rufus")
dog.speak() // 오버라이딩된 speak 메소드 실행: "Rufus is barks."
```

* 정적 메소드(또는 정적 변수)는 객체 생성 없이, Class 이름으로 호출하는 메소드(또는 변수)를 말합니다. 주로 인스턴스(객체)와 관련 없는 작업 수행을 위해 사용될 수 있습니다.
* static keyword를 사용함으로써 생성할 수 있습니다. 
```javascript
class MathHelper {
  static square(num) {
    return num * num;
  }
}

const result = MathHelper.square(5);
console.log(result);
// Output: 25
```

* 정적 메소드를 정의하는 것은 객체를 몇개나 더 생성하는지와 상관 없이 고정된 메모리 공간을 차지합니다. 즉 (객체를 생성하지 않아도 사용할 수 있으므로)속도가 빠르고, 메모리를 효율적으로 사용할 수 있다는 장점이 있지만, 그와 동시에 (고정된 메모리를 차지하므로)프로그램이 종료될 때 까지 메모리를 차지하고 있을 수 있습니다. 즉 메모리 누수의 여지가 있을 수 있습니다. 

\[^출처1]: https://poiemaweb.com/js-array
\[^출처2]: https://velog.io/@jakeseo_me/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EA%B0%9C%EB%B0%9C%EC%9E%90%EB%9D%BC%EB%A9%B4-%EC%95%8C%EC%95%84%EC%95%BC-%ED%95%A0-33%EA%B0%80%EC%A7%80-%EA%B0%9C%EB%85%90-22-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EA%B3%A0%EC%B0%A8-%ED%95%A8%EC%88%98Higher-Order-Function-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0
\[^출처3]: https://catsbi.oopy.io/fffa6930-ca30-4f7e-88b6-28011fde5867
\[^출처4]: https://www.zerocho.com/category/JavaScript/post/5741d96d094da4986bc950a0