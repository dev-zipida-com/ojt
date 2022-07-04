# React

### React 시작하기

```
$ npx create-react-app begin-react
```

터미널에 명령어를 입력하면 `begin-react`폴더가 생성되고

```
$ cd begin-react
$ npm start
```

생성된 폴더로 이동후 `npm start`를 입력하면 리액트를 실행할 수 있습니다.

#

### JSX

JSX는 React에서 컴포넌트의 생김새를 정의할 때 사용하는 문법입니다. html과 비슷하게 생겼지만 javascript입니다. babel을 사용해서 JSX를 javascript로 변환을 합니다.

JSX의 규칙

- 태그는 반드시 닫혀있어야 합니다.
- self-closing 태그로 태그를 닫을 수 있습니다.
- 두 개 이상의 태그는 반드시 하나의 태그로 감싸저야 합니다.
- 여러 태그를 감싸기 위해서 빈 태그(fragment)를 사용할 수 있습니다.

### JSX 내부에서 javascript 사용하기

```javascript
import React from "react";

function App() {
  const name = "react";
  return (
    <>
      <div>{name}</div>
    </>
  );
}
```

중괄호를 사용해서 JSX 내부에서 javascript 값을 사용할 수 있습니다.

### JSX에서 style 적용하기

```javascript
import React from 'react';

function App() {
    const name = 'react';
    const style = {
        backgroundColor: 'black',
        color: 'white',
        fontSize: 24px
    }
    return (
        <>
            <div style={style}>{name}</div>
        </>
    )
}
```

JSX 내부에서 스타일을 적용하기 위해서는 스타일을 정의한 객체를 생성하고 JSX 태그에 `style` 속성에 객체를 적용합니다. 스타일 객체를 생성하고 내용을 정의할 때 camelCase를 사용해야 합니다.  
다른 방법으로는 `style.css`파일을 생성하고 그 안에 css 내용을 정의한 다음 해당 컴포넌트에서 `import './style.css'(파일 위치)`를 사용해 스타일을 적용할 수 있습니다.

JSX에서 주석을 사용할 때 일반 자바스크립트와 다르게 사용합니다. 자바스크립트에서 사용했던 '//' , '/\* _/'를 사용하게 되면 화면에 출력하게 됩니다. JSX에서는 중괄호({})를 사용해 주석을 사용할 수 있습니다.  
`{/_ 주석 내용 \*/}` 으로 주석 처리를 할 수 있습니다.

#

### props

props는 부모 컴포넌트에서 자식 컴포넌트로 내려줄 수 있는 데이터 입니다. props는 JSX 태그 내에서 자식 컴포넌트에 넘겨줄 수 있고 객체 형태로 전달됩니다. 자식 컴포넌트에서는 객체 형태의 props를 받고 사용할 수 있습니다. 구조분해할당으로 props를 보다 쉽게 받고 사용할 수 있습니다.

만약 props를 전달받지 못했을 때는 `defaultProps`를 설정해 props의 기본값을 설정할 수 있습니다.

#

### 조건부 렌더링

조건부 렌더링이란 특정 조건이 참이지 거짓인지를 판단해서 렌더링을 하는 것을 말합니다. React에서 조건부 렌더링을 위해서는 보통 삼항 연산자를 사용합니다. 조건에 따라 보여줘야할 내용이 다르다면 삼항 연산자를 사용하지만 내용을 추가한다거나 간단한 변화가 필요할 땐 && 연산자를 사용하기도 합니다.

#

### useState 를 통한 동적 상태 관리

React 에서는 useState를 사용해 데이터를 동적으로 관리할 수 있습니다. 하나의 상태를 만들어서 컴포넌트에서 관리할 수 있습니다. useState의 선언은 `const [상태이름, set상태이름] = useState(초기값)` 형식으로 선언합니다.  
예를들어 number라는 초기값이 0인 상태를 선언한다면

```javascript
const [number, setNumber] = useState(0);
```

이렇게 선언하고 컴포넌트 안에서 number를 관리할 수 있습니다. 만약 number의 값을 수정하기 위해서는 number에 바로 접근해서 `number += 1`과 같이 수정하는 것이 아닌
setNumber을 사용해야 합니다.  
number을 1 증가시키는 함수를 작성한다면

```javascript
const increase = () => {
  setNumber(number + 1);
};
// 또는
const increase = () => {
  setNumber((prevNumber) => prevNumber + 1);
};
```

위와 같은 방식으로 setNumber을 사용해 number의 상태를 업데이트 할 수 있습니다.

#

### useRef로 특정 DOM 선택하기

React에서도 특정 DOM을 선택해야 하는 상황이 생길 수 있습니다. DOM을 선택할 때 사용하는 것이 React Hook 함수 중의 하나인 useRef입니다. 함수형 컴포넌트에서 사용하는데, 클래스형 컴포넌트 에서는 다른 형태로 사용합니다.

#### InputSample.js

```javascript
import React, { useState, useRef } from "react";

function InputSample() {
  const [inputs, setInputs] = useState({
    name: "",
    nickname: "",
  });
  const nameInput = useRef();

  const { name, nickname } = inputs; // 비구조화 할당을 통해 값 추출

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value, // name 키를 가진 값을 value 로 설정
    });
  };

  const onReset = () => {
    setInputs({
      name: "",
      nickname: "",
    });
    nameInput.current.focus();
  };

  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
        ref={nameInput}
      />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;
```

#

### 배열 렌더링하기

React에서 배열을 렌더링 하기 위해서 배열의 크기만큼 태그를 생성해서 화면에 보여줄 수 있습니다. 하지만 이보다 더 효율적인 방법이 있습니다. javascript 배열 내장함수인 map을 사용하면 효율적으로 배열을 렌더링할 수 있습니다.

#### UserList.js

```javascript
import React from "react";

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b> <span>({user.email})</span>
    </div>
  );
}

function UserList() {
  const users = [
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
    },
  ];

  return (
    <div>
      {/* map을 이용해 User컴포넌트에 배열의 원소 하나하나를 넘겨준다 */}
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default UserList;
```

#

### useEffect Hook

useEffect를 사용해서 컴포넌트가 마운트될 때(생성될 때), 언마운트될 때(사라질 때), 업데이트될 때(특정 props가 바뀔 때) 특정 작업을 실행할 수 있습니다.

```javascript
useEffect(() => {
  console.log("컴포넌트가 생성됨");

  return () => {
    console.log("컴포넌트가 제거됨");
  };
}, []);
```

useEffect의 첫 번째 파라미터는 특정 작업을 수행할 함수가 들어가고, 두 번째 파라미터로는 의존성 배열(deps)이 들어갑니다. 의존성 배열을 빈배열로 설정하면 컴포넌트가 처음 생성될 때만 useEffect 함수가 호출됩니다.  
useEffect는 함수를 반환할 수 있는데, 반환되는 함수를 clean up함수라고 합니다. deps가 비어있을 때, 컴포넌트를 제거하면 clean up 함수가 호출됩니다.

컴포넌트 마운트 시 주로 하는 작업

- props로 받은 값을 컴포넌트 로컬 상태로 설정
- 외부 API요청 (REST API 등)
- 라이브러리 사용 (D3, Video.js 등)
- setInterval, setTimeout 등

컴포넌트 언마운트 시 주로 하는 작업

- 라이브러리 인스턴스 제거
- setInterval, setTimeout 제거 (clearInterval, clearTimeout 등)

deps에 특정 값을 넣게 되면 컴포넌트가 생성될 때, 특정 값이 바뀔 때 useEffect가 호출됩니다. 그리고 언마운트 시에도 호출이 되면서 값이 바뀌기 전에도 호출이 됩니다.

```javascript
useEffect(() => {
    console.log("값이 바뀜")
    console.log(data)

    return () => [
        console.log("값이 바뀌기 전")
        console.log(data)
    ]
}, [data])
```

useEffect안에서 사용하는 상태나 props가 있다면 deps에 넣어주어야 합니다.

#

### useMemo Hook

useMemo는 성능 최적화를 위해서 이전의 계산한 값을 기억하고 재사용할 수 있습니다. useMemo도 파라미터를 받는데 첫 번째 파라미터는 특정 작업을 수행할 함수를 넣고, 두 번째 파라미터는 의존성 배열(deps)를 넣어줍니다.  
useEffect와 마찬가지로 deps 내용이 바뀌면 특정 작업을 수행하고 내용이 바뀌지 않았다면 이전의 연산한 값을 재사용하게 됩니다.

#

### useCallback Hook

useCallback은 함수를 재사용할 수 있는 Hook입니다. useMemo는 연산한 값을 재사용하고 useCallback는 함수를 재사용할 수 있습니다.

#

### React.memo를 사용한 컴포넌트 리렌더링 방지

React.memo함수를 사용하면 컴포넌트의 리랜더링을 방지할 수 있습니다.

```javascript
export default React.memo(componentName);
```

위와 같은 방식으로 사용할 수 있습니다.

#

### useReducer

useState로 상태를 업데이트 할 수 있습니다. useReducer도 상태를 업데이트할 때 사용됩니다. useReducer를 사용하면 상태 업데이트 로직을 컴포넌트에서 분리시킬 수 있습니다. 그리고 파일을 분리해 작성하고 컴포넌트에서 불러와 사용할 수 있습니다.

#### Counter.js

```javascript
import React, { useReducer } from "react";

function reducer(state, action) {
  // reducer함수 선언
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      throw new Error("Unhandled action");
  }
}

function Counter() {
  const [number, dispatch] = useReducer(reducer, 0); // reducer 선언

  const onIncrease = () => {
    dispatch({
      // dispatch를 이용해 type을 보내준다
      type: "INCREMENT",
    });
  };

  const onDecrease = () => {
    dispatch({
      type: "DECREMENT",
    });
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;
```

#

### Context를 사용한 전역값 관리

props를 내려주는 컴포넌트를 관리할 때, 여러 컴포넌트를 거쳐가는 props를 Context Hook을 이용해서 전역값으로 사용하게 할 수 있습니다.

#### ContextSample.js

```javascript
import React, { createContext, useContext, useState } from "react";

const MyContext = createContext("defaultValue"); // Context 생성 및 기본값 설정

function Child() {
  const text = useContext(MyContext); // Context값을 받아옵니다.
  return <div>Hello {text}</div>;
}

function Parent() {
  return <Child />;
}

function GrandParent() {
  return <Parent />;
}

function ContextSample() {
  const [value, setValue] = useState(true);
  return (
    <>
      {/* Provider를 이용해 value값 설정 */}
      <MyContext.Provider value={value ? "GOOD" : "BAD"}>
        <GrandParent />
        <button onClick={() => setValue(!value)}>Click Me</button>
      </MyContext.Provider>
    </>
  );
}

export default ContextSample;
```

useContext와 Provider를 이용해서 각 컴포넌트를 거치는 props를 내려주는 것이 아닌 전역에서 관리할 수 있는 MyContext를 선언하고 사용할 수 있습니다.

#

### class 형 컴포넌트

컴포넌트를 선언하는 방법은 두가지가 있습니다. 이제까지 사용했던 함수형 컴포넌트와 클래스형 컴포넌트가 있습니다. 보통 함수형 컴포넌트를 많이 사용하지만 클래스형 컴포넌트에 대해서도 알아둬야 합니다.

#### Hello.js

```javascript
import React from "react";

function Hello({ color, name, isSpecial }) {
  return (
    <div style={{ color }}>
      {isSpecial && <b>*</b>}
      안녕하세요 {name}
    </div>
  );
}

Hello.defaultProps = {
  name: "이름없음",
};

export default Hello;
```

함수형 컴포넌트로 만들어진 Hello.js 컴포넌트를 클래스형으로 바꿔보겠습니다.

#### Hello.js

```javascript
import React, { Component } from "react";

class Hello extends Component {
  render() {
    const { color, name, isSpecial } = this.props;
    return (
      <div style={{ color }}>
        {isSpecial && <b>*</b>}
        안녕하세요 {name}
      </div>
    );
  }
}

Hello.defaultProps = {
  name: "이름없음",
};

export default Hello;
```

React Hook이나 상태관리 기능이 나오기 이전에는 클래스형 컴포넌트를 많이 사용했지만, 기능들이 나오고 난 후부터는 함수형 컴포넌트를 많이 사용합니다.

#

### Sass

Sass (Syntactically Awesome Style Sheets)는 CSS pre-processor 로서, 복잡한 작업을 쉽게 할 수 있게 해주고, 코드의 재활용성을 높여줄 뿐 만 아니라, 코드의 가독성을 높여주어 유지보수를 쉽게해줍니다.  
Sass는 두가지 확장자를 제공합니다. Sass가 처음 나왔을 땐 .sass 확장자만 지원했지만 .scss 확장자도 지원하게 됐습니다.

#### Sass 시작하기

Sass를 사용하기 위해서는 node-sass라는 라이브러리를 설치해야합니다.

```
$ npm install node-sass
$ yarn add node-sass
```

라이브러리를 설치하고 컴포넌트를 생성하면 .scss 확장자로 파일을 만들어 스타일링을 적용할 수 있습니다.

```scss
$blue: #228be6; // $를 사용해서 변수 선언 가능

.Button {
  display: inline-flex;
  color: white;
  font-weight: bold;
  outline: none;
  border-radius: 4px;
  border: none;
  cursor: pointer;

  height: 2.25rem;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 1rem;

  background: $blue;
  &:hover {
    background: lighten($blue, 10%); // 색상 10% 밝게
  }

  &:active {
    background: darken($blue, 10%); // 색상 10% 어둡게
  }
}
```

$ 문자를 이용해서 변수를 선언해 사용이 가능합니다. 대부분 문법은 보통 css문법과 비슷하게 사용할 수 있습니다.

#

### API 연동하기

API를 연동하기 위해서는 우선 axios라는 라이브러리를 설치해야합니다.

```
$ npm install axios
$ yarn add axios
```

axios를 이용해서 GET, POST, PUT, DELETE 등의 메서드로 API요청을 할 수 있습니다.

- GET: 데이터 조회
- POST: 데이터 등록
- PUT: 데이터 수정
- DELETE: 데이터 삭제

axios 사용법은 다음과 같습니다.

```javascript
import axios from "axios";

axios.get("/users/1");
```

axios. 뒤에 메서드 이름을 소문자로 넣고, 파라미터로 API 주소를 넣습니다.  
POST로 데이터를 등록할 때는

```javascript
axios.post("/users", {
  username: "kim",
  name: "blabla",
});
```

두 번째 파라미터로 등록하려는 데이터를 넣을 수 있습니다.

#

## Redux

### Redux

리덕스는 리액트 생태계에서 가장 사용률이 높은 상태관리 라이브러리입니다. 리덕스를 사용하면 컴포넌트들의 상태 관련 로직들을 다른 파일로 분리시켜 더욱 효율적으로 관리할 수 있고 글로벌 상태 관리도 손쉽게 할 수 있습니다.

### 미들웨어

리덕스에는 미들웨어라는 개념이 존재합니다. 리덕스로 상태 관리를 할 때는 리듀서 함수를 사용합니다. 리덕스의 미들웨어를 사용하면 액션객체가 리듀서에서 처리되기 전에 원하는 작업을 할 수 있습니다.

- 특정 조건에 따라 액션이 무시되게 할 수 있습니다.
- 액션을 콘솔에 출력하거나, 서버쪽에 로깅할 수 있습니다.
- 액션이 디스패치 됐을 때 이를 수정해서 리듀서에게 전달되도록 할 수 있습니다.
- 특정 액션이 발생했을 때 이에 기반하여 다른 액션이 발생되도록 할 수 있습니다.
- 특정 액션이 발생했을 때 특정 자바스크립트 함수를 실행시킬 수 있습니다.

리덕스 미들웨어는 주로 비동기 작업을 처리할 때 사용합니다. 리액트 앱에서 백엔드 API를 연동해야 한다면 리덕스 미들웨어 라이브러리를 설치하여 사용합니다. 비동기 작업에 관련된 미들웨어 라이브러리는
redux-thunk, redux-saga, redux-observable, redux-promise-middleware 등이 있습니다.

### 리덕스에서 사용되는 키워드

#### 액션 (Action)

상태에 어떠한 변화가 필요할 때, 액션을 발생시킵니다. 액션은 하나의 객체로 표현됩니다.  
액션 객체는 type 필드를 필수적으로 가지고 있어야하고 그 외의 값들은 개발자 마음대로 넣어줄 수 있습니다.

```javascript
{
  type: "TOOGLE_VALUE"
}

{
  type: "ADD_TODO"
  data: {
    id: 0,
    text: "리덕스 배우기"
  }
}
```

#### 액션 생성함수

액션 생성함수는 액션을 만드는 함수입니다. 단순히 파라미터를 받아와서 액션 객체로 형태를 만들어줍니다.

```javascript
export function addTodo(data) {
  return {
    type: "ADD_TODO",
    data,
  };
}

// 화살표 함수로도 만들 수 있습니다.
export const changeInput = (text) => ({
  type: "CHANGE_INPUT",
  text,
});
```

액션 생성함수를 만들어서 사용하는 이유는 컴포넌트에서 더욱 쉽게 액션을 발생시키기 위함입니다. 그래서 보통 함수 앞에 export 키워드를 붙여서 다른 파일에서 불러와서 사용합니다.  
리덕스를 사용할 때 액션 생성함수를 사용하는것이 필수적이진 않습니다. 액션을 발생 시킬 때마다 직접 액션 객체를 작성할 수 있습니다.

#### 리듀서(Reducer)

리듀서는 현재의 상태와 전달받은 액션을 참고하여 새로운 상태를 만들어서 반환합니다.  
카운터를 위한 리듀서를 작성한다면 다음과 같이 작성할 수 있습니다.

```javascript
function counter(state, action) {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    default:
      return state;
  }
}
```

useReducer에선 일반적으로 default: 부분에 throw new Error("unhandled Action")과 같이 에러를 발생시키도록 처리하는게 일반적인 반면 리듀서에서는 기존 state를 그대로 반환되도록 작성해야합니다.

#### 스토어(Store)

리덕스에서는 한 애플리케이션당 하나의 스토어를 만들게 됩니다. 스토어 안에는 현재의 앱 상태와 리듀서가 들어가있고, 추가적으로 몇가지 내장 함수들이 있습니다.

#### 디스패치(Dispatch)

디스패치는 스토어의 내장 함수 중 하나입니다. 디스패치는 액션을 발생시키는 것 으로 이해하면 됩니다. dispatch라는 함수에는 액션을 파라미터로 전달합니다.  
호출을 하면, 스토어는 리듀서 함수를 실행시켜 해당 액션을 처리하는 로직이 있다면 액션을 참고하여 새로운 상태를 만들어줍니다.

### 리덕스의 3가지 규칙

1. 하나의 애플리케이션엔 하나의 스토어가 있습니다.  
   하나의 애플리케이션에선 한개의 스토어만 만들어서 사용합니다. 여러개의 스토어를 사용할 수 있지만 권장되지 않습니다. 특정 업데이트가 너무 빈번하게 일어나거나, 애플리케이션의 특정 부분을 완전히 분리시키게 될 때 여러개의 스토어를 만들 수 있습니다.
2. 상태는 읽기 전용 입니다.  
   리덕스에서도 리액트와 마찬가지로 기존의 상태는 건드리지 않고 새로운 상태를 생성하여 업데이트 해주는 방식으로 상태를 업데이트 해야합니다.
3. 변화를 일으키는 함수 리듀서는 순수한 함수여야 합니다.
   - 리듀서 함수는 이전 상태와 액션 객체를 파라미터로 받습니다.
   - 이전의 상태는 건드리지 않고 변화를 일으킨 새로운 상태 객체를 만들어서 반환합니다.
   - 똑같은 파라미터로 호출된 리듀서 함수는 언제나 같은 결과값을 반환해야합니다.

동일한 인풋이라면 언제나 동일한 아웃풋이 있어야 합니다.

#

### CORS와 Webpack DevServer Proxy

브라우저에서 API를 요청할 때는 브라우저의 현재 주소와 API의 주소의 도메인이 일치해야만 데이터를 접근할 수 있습니다.
만약 다른 도메인에서 API 요청을 할 수 있게 하기 위해서는 CORS 설정이 필요합니다.
json-server로 만든 서버의 경우엔 모든 도메인을 허용해주는 CORS 규칙이 적용되어 있습니다.
실제 서비스에서는 서버의 API를 요청해야할 때, 기본적으로 localhost:3000 에서 들어오는 것이 차단되기 때문에 서버 쪽에 해당 도메인을 허용하도록 구현을 해야합니다.
하지만 proxy 기능을 사용하면 백엔드 서버에서 도메인을 허용하지 않고 요청을 할 수 있습니다.  
웹팩 개발서버의 프록시를 사용하면 브라우저 API를 요청할 때 백엔드 서버에 직접적으로 요청을 하지 않고 현재 개발 서버의 주소로 요청을 하게 됩니다.  
프록시 설정 방법

#### package.json

```javascript
"proxy": "http://exampledomain.com"

"proxy": "http://localhost:4000"
```

#
