#### 리덕스 미들웨어

- 리덕스가 지니고 있는 핵심기능
- ContextAPI or Mobx를 사용하는것과 비교했을 때 차별화가 될 수 있는 강력한 기능
- 리덕스를 사용하는데 리덕스 미들웨어를 사용하지 않는다면 차라리 ContextAPI와 useReducer를 사용하는게 더 나을 수 있음

  > 액션 -> 미들웨어 -> 리듀서 -> 스토어
  >
  > - 액션이 디스패치될 때 미들웨어에서 액션의 특수한 조건에 따라 액션 무시 가능(리듀서에서 액션을 처리하지 않음)
  > - 미들웨어를 사용하면 액션이 리듀서한테 전달하기 전에 특정 코드를 실행할 수 있음

- 주로 비동기 작업을 처리할 때 사용 (ex. API 요청)

- 리덕스 미들웨어는 하나의 함수

```js
  const middleware = store => next => action => {
    // 하고싶은 작업..
  }

  // function 키워드로 번역
  function middleware(store) {
    return function(next) {
      return function(action) {
        // 하고싶은 작업..
      }
    }
  }

  - action 함수 : action객체 가지고 하고싶은 작업을 하면 됨
  - next 함수 : 미들웨어에서 액션을 받아왔을 때 다음 미들웨어에게 전달하는 함수
  - 미들웨어를 사용할 때는 미들웨어를 1개 이상 사용 가능
```

<br>
#### 대표적으로 많이 사용되는 미들웨어 라이브러리

- #### `redux-thunk`

  - 액션 객체가 아닌 함수를 디스패치 할 수 있음

  ```js
  const thunk = (store) => (next) => (action) =>
    typeof action === "function"
      ? action(store.dispatch, store.getState)
      : next(action);
  ```

- #### `redux-saga`

  - redux-thunk 다음으로 가장 많이 사용되는 비동기 작업 관련 미들웨어
  - 액션을 모니터링하고 있다가 특정 액션이 발생하면 이에 따라 특정 작업을 하는 방식을 사용
    > 특정 작업의 예 : 특정 자바스크립트 실행, 다른 액션 디스패치, 현재 상태 조회 등
  - react thunk로 처리하기 까다로운 걸 saga로 가능
    - 비동기 작업을 진행할 때 기존 요청을 취소 할 수 있음 ex) 기존에 진행하던 작업을 특정 액션을 디스패치 함으로써 중지, 동일한 비동기 작업을 할 때 맨 먼저 시작된 것만 처리하게 하거나 맨 마지막에 시작된 것만 처리하게 하는 기능이 탑재 되있음
    - 특정 액션이 발생 했을 때 이에 따라 다른 액션을 디스패치 하거나 JS코드 실행 가능
    - 웹소켓을 사용하는경우 Channel이라는 기능을 사용하여 더욱 효울적으로 코드 관리 가능
    - 비동기 작업이 실패했을 때 재시도 하는 기능 구현 가능

- #### `redux-observable`

- #### `redux-promise-middleware`
