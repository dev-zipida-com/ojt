## 0703 Web Basic Study
------
### HTML5
##### 1.개요
> HTML5는 HTML의 완전한 5번째 버전으로 월드 와이드 웹 (World Wide Web)의 핵심 마크업 언어이다.
>
> ==하위 호환성== : 기존의 모든 문서 타입을 래핑한다(HTML4와 XHTML1.0 양쪽의 모든 유효한 요소들을 포함하고 있다.)
>
> ==간단한 문법== : 시멘틱 마크업을 위한 의미적으로 요소들이 강화되었으며, 생산성이 향상된 코딩을 지원하며, 문서의 크기가 작아졌다.

#### HTML5 시작하기
##### HTML5의 DOCTYPE(문서타입)
기존의 DOCTYPE은 SGML[^1] 기반이었기 때문에 DTD[^2]를 명시해야 했으나, HTML5에서는 브라우저가 표준모드로 작동되게 하는 역할만 하면 되기 때문에 아주 간소화해 졌다.

[^1] : SGML(Standard Generalized Markup Language)은 문서용 마크업 언어를 정의하기 위한 메타 언어이다.
[^2] : Document Type Definition

```
<!DOCTYPE html>
#DOCTYPE 정의는 유효성 검증을 위해 고안된 것이다.
#정확한 DOCTYPE 이 선언되어 있다면 표준모드(standards mode)로 작동할 것이고 DOCTYPE이 없다면 비표준모드(quirks mode)로 작동하게 된다.
```

---
##### 휴먼 랭귀지
W3C 규격에 따르면 lang속성은 요소의 콘텐츠와 텍스트를 포함하고 있는 요소의 속성에 대한 기본 언어를 지정한다. 만약 영어로 페이지를 작성하는 게 아니라면, 정확하게 언어 코드를 지정하는 편이 좋다.

[전체언어목록](http://www.iana.org/assignments/language-subtag-registry)

```
<meta lang="ko">
```

##### 문자 인코딩
마크업 문서의 문자 인코딩을 명시할때 사용한다.
```
<meta charset="UTF-8">
```

##### 단순화
Javascript와 CSS 파일 링크에 type을 생략할 수 있다.
```
<script src="test.js"></script>
#javascript [type="text/javascript] 생략

<link rel="stylesheet" href="file.css">
#CSS [type="text/css"] 생략
```

##### 위의 내용을 종합한 기본 HTML5 구조
```
<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta charset="UTF-8">
        <title>홈페이지 제목</title>
        <link rel="stylesheet" href="file.css"> #css 파일
    </head>
    <body>
        본문 내용
        <script src="test.js"><script>
    </body>
</html>
```

##### 브라우저 동작 방식에 따른 `<script>` 태그 위치
보통 `<body>` 태그 최하단에 위치하는게 가장 좋다.

###### 브라우저의 동작 방식
> 1. HTML을 읽기 시작한다.
> 2. HTML을 파싱한다.
> 3. DOM 트리를 생성한다.
> 4. Render 트리 (DOM tree + CSS의 CSSOM 트리 결합 ) 가 생성된다.
> 5. Display에 표시된다.

+ HTML을 파싱하고 DOM 트리를 생성하는 과정에서 브라우저는 HTML 태그들을 읽어나가게 된다.
+ 여기서 `<script>` 태그를 만나게 되면 파싱을 중단하고 javascript 파일을 로드한 후 javascript 코드를 파싱한다.
+ javascript 코드 파싱이 완료 된 후 HTML 파싱을 재개한다.

###### 결론
이로인해 HTML태그들 사이에 script 태그가 위치하면 두가지 문제가 발생한다.

1. HTML을 읽는 과정에 스크립트를 만나면 중단 시점이 생기고 그만큼 Display에 표시되는 것이 지연된다.
2. DOM 트리가 생성되기전에 자바스크립트가 생성되지도 않은 DOM의 조작을 시도할 수 있다.

위와 같은 상황을 막기 위해 script 태그는 body 태그 최하단에 위치하는 게 가장 좋다.

------
##### HTML5의 새로운 요소
1. 오디오/비디오 사용하기
    * Firefox 3.5이상에서 HTML5의 `<audio>` 요소와 `<video>` 요소의 기술 지원이 추가되었다.

2. HTML5 웹 폼양식
    * HTML5에서는 웹 폼양식이 개선되었다. `<input>` 요소의 `type` 속성에 새로운 값이나 새 요소인 `<output>`요소 등이 새롭게 추가되었다.

3. HTML5 섹션과 아웃라인
    * HTML5 에서는 아웃라인과 섹션에 관한 요소가 추가되었다.
    `<section>`, `<articel>`, `<nav>`, `<header>`, `<footer>`, `<aside>`, `<hgroup>`
    <br/>
    `<mark>` 요소
    mark 요소는 텍스트중에서의 특별한 ==관련성==을 강조시키기 위해서 이용한다.
    <br/>
    `<figure>` 및 `<figcaption>` 요소
    주로 사용된 문장과 느슨하게 연결된, 최종 캡션을 수반한 도식이나 그림을 추가할 수 있다.
    <br/>
4. Canvas 기술 지원
    * 새로운 요소인 `<canvas>`요소가 HTML5 text API를 기술 지원한다.

5. 로컬 파일 사용하기
    * `tpye` 속성의 값에 `file`을 지정한 `<input>` 요소에 새롭게 추가된 `multiple` 속성을 이용하는 것으로 복수 파일을 선택할 수 있게 되는 기술 지원이 포함되었다.

6. getElementsByClassName
    * Document 및 Element 노드에 있어서의 `getElementsByClassName` 메소드가 지원되어 있다. 이러한 메소드를 이용하는 것으로 지정한 클래스 또는 지정한 클래스의 목록을 가지는 요소를 찾아낼 수 있다.

------
### HTML5의 주요기능
1. 3D GRAPHICS & EFFECTS
    * HTML5의 Canvas와 자바스크립트를 활용하면 다양한 2차원 및 3차원 그래픽 기능 등을 구현할 수 있다. 이 기능은 기존 정적인 HTML을 동적으로 표현할 수 있는 HTML5의 대표적인 기능 중 하나이다.
<br/>
2. CSS3
    * 글씨체, 색상, 배경 등 다양한 스타일 및 효과 기능 제공이 가능하다.
<br/>
3. MULTIMEDIA
    * HTML5를 활용하면 비디오, 오디오 등의 미디어 재생 기능을 별도의 플러그인 설치가 없어도 재생이 가능하다.
<br/>
4. PERFORMANCE & INTEGRATION
    * 웹에서 작동하는 프로그램이라면 모든 디바이스에서 사용이 가능하며 웹 페이지 자체가 하나의 응용프로그램으로 인식될 정도로 성능이 향상되었다.
<br/>
5. CONNECTIVITY
    * 웹 서버와 브라우저 간 실시간 데이터 통신이 가능하도록 지원하는 기능이다. 주식차트, 채팅 등과 같은 응용 프로그램의 개발에 한층 효과적으로 사용될 수 있다.
<br/>
6. DEVICE ACCESS
    * GPS, 카메라, 동작센서, 배터리 등 하드웨어를 웹 브라우저에서 직접 제어할 수 있는 기능으로, W3C에서는 다양한 디바이스 API 표준화를 진행 하고 있다.
<br/>
7. OFFLINE & STORAGE
    * 네트워크 미지원 환경에서도 로컬영역에 저장된 데이터를 활용해 정상적인 웹 서비스 이용이 가능하다. (HTML5에서 웹 브라우저가 공통으로 활용 가능한 로컬 저장공간을 DB화 및 표준화 하였다.)
<br/>
8. SEMANTICS
    * 웹 자료에 의미를 부여하여 사용자 의도에 맞는 맞춤형 검색 제공이 가능하다.


출처 : [HTML5 특징](https://webdir.tistory.com/85)
출처 : [MDN web docs](https://developer.mozilla.org/ko/docs/Web/HTML/HTML5)
출처 : [HTML5 주요기능](https://www.koreahtml5.kr/front/info/intro.do)

-----
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
개발 속도가 빠르고 문법이 간단하지만, 복잡한 프로그램을 만들기는 어렵다는 특징이 있다.

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

