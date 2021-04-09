### React Basic

- 컴포넌트(Component)

  - 기능을 단위별로 캡슐화하는 리액트의 기본 단위
  - 사용자가 보는 뷰는 이러한 컴포넌트들의 조합
  - 이때 입력받는 데이터는 props, state등이 있음(react 공식문서)
  - Welcome 컴포넌트

  ```
    function Welcome(props) {
        return <h1>Hello, {props.name}</h1>
    }

    :for ES6
    class Welcome extends React.Component {
        render() {
            return <h1>Hello, {this.props.name}</h1>;
        }
    }

    - 위의 두 코드는 props를 받고 React의 Element를 반환한다는 점에서 동일한 기능을 하는 컴포넌트임
  ```

- useState

  - react의 Hook 하나
  - 동적 상태 관리할 때 사용
  - 버튼 누를때마다 +1, -1 동적으로 변화하는 코드(useState)

  ```
    const [number, setNumber] = useState(0); // - useState호출 시 배열을 반환 첫번째 원소 number, 두번째 원소 setNumber
    setNumber(10); // number을 동적으로 10으로 바꿔줌
  ```

- useEffect

  - react의 Hook중 하나
  - 컴포넌트를 화면에 나타나게 될 때, 사라질 때, 상태가 업데이트 되거나 되기전에도 어떤 작업을 등록 가능

  ```
    useEffect(() => { // dependences 배열에 있는 props 관련 처음에 호출
        console.log('user값이 설정됨');
        console.log(user);
        return () => { // useEffect의 dependences 배열에 해당 값이 바뀔때마다 호출

        }
    }, [user]); // [] -> deps(dependences) 해당 배열 안에 들어있는 props가 이벤트 발생할 때 마다 작업 가능
  ```

- useMemo

  - react의 Hook중 하나
  - 주로 성능을 최적화해야 하는 상황에서 사용

  ```
    useMemo(() => test(), [users]);
    // deps에 들은 users가 바뀔때마다 test() 호출
  ```

- useCallback

  - react의 Hook중 하나
  - 이전에 만든 함수를 새로 만들지 않고 재사용할 때 사용
  - useMemo와 비슷하지만 함수를 위한 Hook

- React.memo

  - 컴포넌트에서 리렌더링이 불필요할 때 이전에 렌더링 한 값을 사용할 수 있게 해줌
  - 컴포넌트의 리렌더링 성능을 최적화 가능

- useReducer

  - react의 Hook중 하나
  - useState와 같은 상태 업데이트 hook
  - ussState는 설정하고 싶은 다음 상태를 직접 지정하는 반면에 useReducer은 action객체를 기반으로 상태를 업데이트
  - 컴포넌트 상태 업데이트 로직을 컴포넌트에서 분리 가능
  - reducer : 상태를 업데이트 하는 함수

  ```
    function reducer(state, action) {
        switch(action.type) {
            case 'INCREMENT: return state + 1;
            case 'DECREMENT': return state - 1;
            default: return state;
        }
    }
  ```

  - useReducer

  ```
    const [number, dispatch] = useReducer(reducer, 0);
  ```

- SASS(Syntactically awesome stylesheet)
  - css를 효율적으로 작성할 수 있도록 도와주는 프로그램
  - css의 단점을 보완하기 위한 기술로, sass자체를 그대로 사용은 불가능하고, SASS문법에 맞게 SASS파일을 만들면 컨버터를 이용해 css를 생성한다.
  - 장점
  ```
    1. 코드 중복을 줄일 수 있다
    2. 변수를 사용할 수 있기 때문에 유지보수가 쉬워진다
    3. 그 외에도 함수와 연산자를 사용할 수 있으며, 다양한 문법이 존재
  ```
