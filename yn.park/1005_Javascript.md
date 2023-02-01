
# Javascript

모든 브라우저의 표준 프로그래밍 언어.  
이름을 Java에서 차용해왔지만, 홍보 목적의 이유일 뿐 Java와 아무 상관이 없는 독자적인 언어이다. 

**명령형(imperative), 함수형(functional), 프로토타입 기반(prototype-based) 객체지향 프로그래밍을 지원하는 멀티 패러다임 프로그래밍 언어다.**

브라우저에도 자바스크립트 엔진이 내장되어 있다.  
엔진의 종류는 브라우저마다 다르다.

<br>

<엔진-브라우저>  
V8 – Chrome, Opera  
SpiderMonkey – Firefox  
ChakraCore - Microsoft Edge   
SquirrelFish - Safari  

<br>

모던 자바스크립트는 메모리나 CPU 같은 저수준 영역의 조작을 허용하지 않는 안전한 언어이다. 애초에 이러한 접근이 필요치 않은 브라우저를 대상으로 만든 언어이기 때문이다.

자바스크립트는 실행 환경에 따라 제약이 다르다. 

Node.js 환경 - 임의의 파일을 읽거나 쓰고, 네트워크 요청을 수행하는 함수를 지원  
브라우저 환경 - 웹페이지 조작, 클라이언트와 서버의 상호작용에 관한 모든 일 지원


<br>

브라우저는 보안을 위해 자바스크립트의 기능에 제약을 걸어놓았다. 

- 웹페이지 내 스크립트는 디스크에 저장된 임의의 파일을 읽거나 쓰고, 복사하거나 실행할 때 제약을 받는다. 운영체제가 지원하는 기능을 브라우저가 직접 쓰지 못하게 막았기 때문. 파일을 사용하려면 사용자가 파일을 끌어다 놓거나 input 같은 기능을 사용해야하고, 카메라나 마이크 같은 디바이스와 상호 작용하려면 사용자의 명시적인 허가가 있어야 한다.

- 브라우저 내 탭과 창은 대개 서로의 정보를 알 수 없다. 다만 자바스크립트를 사용해 한 창에서 다른 창을 열 때는 예외가 적용된다. 하지만 이 경우에도 도메인이나 프로토콜, 포트가 다르다면 페이지에 접근할 수 없습니다. (브라우저는 보안을 위해 동일 출처 정책을 지키기 때문)

<br>

근래에는 브라우저에서 실행 되기 전에 자바스크립트로 트랜스파일(transpile, 변환) 할 수 있는 새로운 언어들이 많이 등장했다.  
자바스크립트 이외의 언어로 작성한 코드를 실행할 때 자바스크립트로 자동 변환해준다.

- CoffeeScript : 자바스크립트를 위한 syntactic sugar. 짧은 문법을 도입하여 명료하고 이해하기 쉬운 코드를 작성할 수 있다. Ruby 개발자들이 많이 사용.
- TypeScript : 자료형의 명시화에 집중해 만든 언어. Microsoft가 개발하.
- Flow : TypeScript와는 다른 방식으로 자료형을 강제. Facebook이 개발.
- Dart : 모바일 앱과 같이 브라우저가 아닌 환경에서 동작하는 고유의 엔진을 가진 독자적 언어. Google이 개발.

<br>

# Prototype 기반 객체지향

자바스크립트의 모든 객체는 자신의 부모 역할을 담당하는 객체와 연결되어 있다. 그리고 이것은 마치 객체 지향의 상속 개념과 같이 부모 객체의 프로퍼티 또는 메소드를 상속받아 사용할 수 있게 한다. 이러한 부모 객체를 Prototype(프로토타입) 객체 또는 줄여서 Prototype(프로토타입)이라 한다.

Prototype 객체는 생성자 함수에 의해 생성된 각각의 객체에 공유 프로퍼티를 제공하기 위해 사용한다.
