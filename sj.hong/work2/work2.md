# Work2 과제 정리
<!-- TOC -->

- [Work2 과제 정리](#work2-%EA%B3%BC%EC%A0%9C-%EC%A0%95%EB%A6%AC)
  - [Fetch 를 이용하여 API 호출하기](#fetch-%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-api-%ED%98%B8%EC%B6%9C%ED%95%98%EA%B8%B0)
    - [Fetch 란?](#fetch-%EB%9E%80)
    - [fetch 와 jQuery.ajax 의 차이점](#fetch-%EC%99%80-jqueryajax-%EC%9D%98-%EC%B0%A8%EC%9D%B4%EC%A0%90)
      - [Promise 란?](#promise-%EB%9E%80)
    - [fetch 사용법](#fetch-%EC%82%AC%EC%9A%A9%EB%B2%95)
    - [요청옵션 제공](#%EC%9A%94%EC%B2%AD%EC%98%B5%EC%85%98-%EC%A0%9C%EA%B3%B5)
    - [비동기 호출](#%EB%B9%84%EB%8F%99%EA%B8%B0-%ED%98%B8%EC%B6%9C)

<!-- /TOC -->

<br>

## Fetch 를 이용하여 API 호출하기

<hr>

### Fetch 란?

> Fetch API 는 HTTP 파이프라인을 구성하는 요청과 응답 등의 요소를 JavaScript에서 접근하고 조작할 수 있는 인터페이스를 제공한다. Fetch API 가 제공하는 전역 fetch() 메서드로 네트워크 리소스를 쉽게 비동기적으로 가져올 수도 있다.

<br>

### `fetch()` 와 `jQuery.ajax()` 의 차이점

- `fetch()`가 반환하는 프로미스 객체는 404, 500 과 같은 HTTP 오류상태를 수신해도 거부되지 않는다.
  - `fetch()`의 프로미스는 서버에서 헤더를 포함한 응답을 받는 순간 정상적으로 이행하기 때문
  - 대신 응답의 상태가 200-299를 벗어날 경우 ok 속성이 false 로 설정된다.

- 자격 증명(credentials) 옵션을 제공하지 않은 경우, `fetch()` 는 교차 출처 쿠키를 전송하지 않는다.
  - 2018년 4월 이후, 자격 증명 정책의 기본값이 same-origin으로 변경됐다.

<br>

#### Promise 란?

- Promise 는 자바스크립트 비동기 처리에 사용되는 객체다.
  - 비동기 처리란 `특정 코드의 실행이 완료될 때까지 기다리지 않고 다음 코드를 먼저 수행하는 자바스크립트의 특성`을 의미한다.

<br>

- Promise 는 왜 필요한가?
  - `Promise` 는 주로 서버에서 받아온 데이터를 화면에 표시할 때 사용한다.
  - 데이터를 받아오기도 전에 데이터를 표시하려고 하면 오류가 발생하거나 빈 화면이 뜨기때문에 이 문제를 해결하기 위한 방법 중 하나가 `Promise` 다.

- Promise 에러 처리 방법
  - `then()`의 두번째 인자로 처리하는 방법
  - `catch()`를 이용하는 방법
    - 가급적이면 `catch()`로 에러를 처리하는 게 더 효율적이다.
    
  ```javascript
  // then()의 두 번째 인자로는 감지하지 못하는 오류
  function getData() {
    return new Promise(function(resolve, reject) {
      resolve('hi');
    });
  }

  getData().then(function(result) {
    console.log(result);
    throw new Error("Error in then()"); // Uncaught (in promise) Error: Error in then()
  }, function(err) {
    console.log('then error : ', err);
  });
  ```

<br>

### `fetch()` 사용법

- 다음 코드는 네트워크에서 JSON 파일을 가져와서 콘솔에 출력한다.

```javascript
fetch('http://example.com/movies.json')
  .then((response) => response.json())
  .then((data) => console.log(data));
```

- 가장 단순한 형태의 `fetch()`는 가져오고자 하는 리소스의 경로를 나타내는 하나의 인수만 받습니다.
  - 응답은 Response 객체로 표현되며, 직접 JSON 응답 본문을 받을 수는 없다.
    - `response.json()` 메서드를 사용해서 JSON 본문으로 파싱해야한다.

### 요청옵션 제공

- `fetch()`메서드에는 선택적으로 두 번째 매개변수도 제공할 수 있다.

```javascript
// POST 메서드 구현 예제
async function postData(url = '', data = {}) {
  // 옵션 기본 값은 *로 강조
  const response = await fetch(url, {

    method: 'POST', // *GET, POST, PUT, DELETE 등
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body의 데이터 유형은 반드시 "Content-Type" 헤더와 일치해야 함

  });

  return response.json(); // JSON 응답을 네이티브 JavaScript 객체로 파싱
}

postData('https://example.com/answer', { answer: 42 }).then((data) => {
  console.log(data); // JSON 데이터가 `data.json()` 호출에 의해 파싱됨
});
```

- `fetch()` 속성
  - `method` : HTTP 요청메서드
    - default 는 GET 요청으로 동작
  - `mode`
  - `cache` : 캐싱 여부
  - `credentials`
  - `headers`
    - `Content-Type` 등등
    - HTTP 헤더 정보들이 포함된다.
  - `redirect`
  - `referrerPolicy`
  - `body`

<br>

### 비동기 호출

> `fetch()` 로 리소스를 비동기 요청할 수 있다. => `fetch()` 가 `Promise` 객체를 반환하기 때문이다.

- 비동기 처리 란?
  - 작업이 완료될 때까지 계속 기다리지 않고 다른 동작을 따로 처리한다.
- 비동기 처리방법
  - `jQuery.ajax()`
  - `setTimeout()`
  - `callback`
    - 콜백 지옥(Callback hell)
      - 콜백 지옥은 비동기 처리 로직을 위해 콜백 함수를 연속해서 사용할 때 발생하는 문제
      - 해결 방법
        - `Promise` 나 `Async` 를 사용하는 방법이 있다.
        - 코딩 패턴으로만 콜백 지옥을 해결하려면 각 콜백 함수를 분리하면 된다.
          ```javascript
          function parseValueDone(id) {
          auth(id, authDone);
          }
          function authDone(result) {
            display(result, displayDone);
          }
          function displayDone(text) {
            console.log(text);
          }
          $.get('url', function(response) {
            parseValue(response, parseValueDone);
          });
          ```
    => 코딩 패턴만으로도 콜백 지옥을 해결할 수 있지만, Promise 나 Async를 이용하면 더 편하게 구현할 수 있다.