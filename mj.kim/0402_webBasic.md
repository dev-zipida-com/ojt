#### Web Basic

+ HTML5
  + HTML의 완전한 5번째 버전으로 WWW의 핵심 마크업 언어
  + HTML4.01, XHTML 1.0, DOM 레벨 2 HTML에 대한 차기 표준 제안
  + 비디오, 오디오 등 다양한 부가기능과 최신 멀티미디어 콘텐츠를 액티브X 없이 브라우저에서 쉽게 볼 수 있게 한느것을 목적으로 함


+ JavaScript(JS)
  + 객체 개반의 스크립트 프로그래밍 언어 (프로토타입 기반 객체지향 언어라고도 표현)
  + HTML, CSS와 같은 정적인 언어를 JS를 통해 동적인 웹페이지로 변경해줌
  + 브라우저 환경에선 웹페이지 조작, 클라이언트와 서버의 상호작용에 관한 모든 일이 가능
  + JS만의 강점 
   ```
   - html/css와 완전히 통합할 수 있음
   - 간단한 일을 간단하게 처리할 수 있게 해줌
   - 모든 주요 브라우저에서 지원 및 기본 언어로 사용
   - 위와 같은 강점을 지원하는 브라우저 연관 기술은 자바스크립트뿐
   ```


+ ECMAScript (ES6, ES2016, ES2017 ... )
  + Ecma International이 ECMA-262 기술 규격에 따라 정의하고 있는 표준화된 스크립트 프로그래밍 언어
  + ES라고 줄여부르며 뒤에 숫자는 버전을 의미
  + ES6 / ES2015
  ```
  - class, template tag, arrow function등과 같은 새로운 개념들이 등장
  - ES5이후 거의 6년만에 나온 버전
  - 거의 모든 현대 브라우저들은 ES6를 지원
  ```
  + ES7 / ES2016
  ```
  - 크게 두가지 특징 소개


  - Array.prototype.includes()

  let numbers[1, 2, 3, 4];

  if(numbers.indexOf(2) !== -1) {
      console.log('contains');
  }

  // ES7 / ES2016
  if(numbers.includes(2)){
      console.log('Contains');
  }

  // NaN 포함여부 확인
  let numbers = [1, 2, 3, 4, NaN];

  console.log(numbers.indexOf(NaN)); // prints -1

  console.log(numbers.includes(NaN)); // prints true


  - Exponentiation oprator
  
  let base = 3;

  let exponent = 4;

  console.log(base ** exponent); // 3^4 = 81
  ```
  + ES8 / ES2017
  ```
  - 2017년 6월 발표
  - 주된 특징 중 가장 많이 사용하는 Async function
  - callback 지옥을 벗어나기 위해 Promise가 나왔지만 Promise의 장황한 코드를 줄인 것이 Async function
  ```
  + ES9 / ES2018
  ```
  - 2018년 6월 발표
  - Object Reest/Spread
  - Promise finally
  - Async iteration
  - 정규표현식
  ```
    
+ Node.js
  1. npm
      + node package module(npm)
      + Node Package Manager의 약자
      + JS 패키지 매니저이고 NodeJs에서 사용할 수 있는 모듈들을 패키지화하여 모아둔 저장소 역할
      + 설치/관리를 수행할 수 있는 CLI(Command Line Interface) 제공
      + package.json파일로 프로젝트의 정보와 패키지들의 의존성 관리
  2. package.json
      + 사용하고 있는 패키지들의 명세가 작성
      + 프로젝트를 다른 사람에게 공유하고 싶다면 package.json을 공유하여 개발 환경을 빠르게 구축 가능
      + JAVA에서 Maven의 pom.xml과 비슷한 역할
  3. module
      + 독립된 기능을 갖는 것(함수, 파일)들의 모임
      + 기능별로 함수를 만들어 함수를 호출하는 방식으로 프로그래밍을 하게 되면 유지보수면에서 훨씬 수월하기 때문에 이러한 모듈개념을 Node.js에서 사용
      + 외장 모듈
        ```
        - 일반 node.js 개발자들이 만들어 놓은 모듈(라이브러리)
        - 외장 모듈 사용을 위해선 npm을 사용
        ```
      + 내장 모듈
        ```
        - node.js를 설치하고 나면 그 안에 이미 제공되어진 모듈을 의미
        - 내장 모듈은 이미 node.js를 설치할 때 존재하기 떄문에 npm이 따로 필요없음
        ```

+ Babel
  + 공식 사이트 소개
    ```
    - Babel is a JavaScript compiler
    - 정확히는 babel은 js로 결과물을 만들어주는 컴파일러
    - 소스 대 소스 컴파일러(transpiler) 라고 불림
    ```
  - 최신 버전의 js 문법은 브라우저가 이해하지 못하기 때문에 babel이 브라우저가 이해할 수 있는 문법으로 변환해 줌
  - babel-polyfill
    ```
    - babel은 문법만 변환시켜줄 뿐 babel을 사용한다고 js 최신 함수를 사용할 수 있는건 아님
    - polifill은 프로그램이 처음에 시작될 때 현재 브라우저에서 지원하지 않는 함수를 검사해 각 object의 prototype에 붙혀주는 역할
    - 즉, babel은 컴파일-타임에 실행. babel-polyfill은 런-타임에 실행
    - babel-polyfill 사용하려면 별도 설정 필요
    ```