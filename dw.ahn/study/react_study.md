## before

[링크1](https://poiemaweb.com/)

싱글톤패턴

- spring been

```

싱글톤 패턴은 객체 지향 프로그래밍에서 사용되는 디자인 패턴 중 하나로, 어떤 클래스의 인스턴스가 오직 하나만 생성되도록 보장하고 이에 대한 전역적인 접근점을 제공하는 패턴입니다.

일반적으로 클래스를 정의할 때는 new 키워드를 사용하여 객체를 생성합니다. 이 경우에는 클래스의 인스턴스가 생성될 때마다 새로운 객체가 만들어집니다. 하지만 싱글톤 패턴을 사용하면 클래스의 인스턴스가 한 번만 생성되고, 그 이후에는 이전에 생성된 인스턴스를 반환하게 됩니다.

싱글톤 패턴은 일반적으로 다음과 같은 상황에서 사용됩니다.

자원 관리: 예를 들어, 데이터베이스 연결, 파일 시스템 등과 같은 자원을 사용할 때, 한 번에 하나의 연결만 유지하고 싶은 경우에 사용됩니다.

공유 자원: 여러 개의 객체에서 공유할 수 있는 자원을 만들고자 할 때 사용됩니다.

플래그: 특정한 상태를 저장하고자 할 때, 싱글톤 패턴을 사용하여 전역적으로 상태를 저장할 수 있습니다.

싱글톤 패턴을 구현할 때는 클래스 내부에 private 생성자를 만들어서 외부에서 객체를 생성할 수 없도록 합니다. 그리고 클래스 내부에 유일한 인스턴스를 저장할 수 있는 private static 변수를 만들고, 인스턴스를 반환하는 static 메서드를 만들어서 외부에서 인스턴스에 접근할 수 있도록 합니다. 이러한 방식으로 구현하면 싱글톤 클래스의 인스턴스는 오직 한 개만 생성되며, 전역적으로 접근할 수 있게 됩니다.

```

### js

```js





// 01
//

느낌표 두개(!!) 연산자는 확실한 논리결과를 가지기 위해 사용합니다.
예를 들어 정의되지 않은 변수 undefined 값을 가진 내용의 논리 연산 시에도 확실한 true / false를 가지도록 하는게 목적입니다.


var a;
console.log("a    :: " + (a));
console.log("!a   :: " + (!a));
console.log("!!a  :: " + (!!a));


a    :: undefined
!a   :: true
!!a  :: false

```

### ECMAScript6

#### 비구조 할당

React에서는 ES6의 비구조화 할당(destructuring assignment) 문법을 사용하여, 객체나 배열에서 필요한 값만 추출하여 사용할 수 있습니다. 이를 활용하면 코드의 가독성과 유지보수성이 향상됩니다.

예를 들어, 다음과 같이 객체에서 필요한 값만 추출하여 사용할 수 있습니다.

```js
function MyComponent(props) {
  const { name, age } = props;

  return (
    <div>
      <div>Name: {name}</div>
      <div>Age: {age}</div>
    </div>
  );
}
```

위 코드에서 props 객체에서 name과 age 값을 추출하여, 변수에 할당하고 사용합니다.

또한, 다음과 같이 배열에서 필요한 값만 추출하여 사용할 수 있습니다.

```js
function MyComponent() {
  const items = ["Apple", "Banana", "Orange"];
  const [firstItem, secondItem] = items;

  return (
    <div>
      <div>First Item: {firstItem}</div>
      <div>Second Item: {secondItem}</div>
    </div>
  );
}
```

위 코드에서 items 배열에서 첫 번째와 두 번째 요소를 추출하여, 변수에 할당하고 사용합니다.

React에서 비구조화 할당을 사용하면, 코드의 가독성이 좋아지고, 필요한 값만 추출하여 사용하므로 불필요한 데이터를 렌더링하지 않게 되어 성능에도 좋습니다.

```js

// 02.템플릿 리터럴
//

ES6는 템플릿 리터럴(Template literal)이라고 불리는 새로운 문자열 표기법을 도입하였다. 템플릿 리터럴은 일반 문자열과 비슷해 보이지만, ‘ 또는 “ 같은 통상적인 따옴표 문자 대신 백틱(backtick) 문자 `를 사용한다.

`

    const template = `<ul class="nav-items">
    <li><a href="#home">Home</a></li>
    <li><a href="#news">News</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#about">About</a></li>
    </ul>`;

    const first = 'Ung-mo';
    const last = 'Lee';

    // ES5: 문자열 연결
    console.log('My name is ' + first + ' ' + last + '.');
    // "My name is Ung-mo Lee."

    // ES6: String Interpolation
    console.log(`My name is ${first} ${last}.`);
    // "My name is Ung-mo Lee."



    문자열 인터폴레이션은 ${ … }으로 표현식을 감싼다. 문자열 인터폴레이션 내의 표현식은 문자열로 강제 타입 변환된다.

    console.log(`1 + 1 = ${1 + 1}`); // "1 + 1 = 2"





// 01.let, const와 블록 레벨 스코프
//

var와 let, 그리고 const는 다음처럼 사용하는 것을 추천한다.

- ES6를 사용한다면 var 키워드는 사용하지 않는다.
- 재할당이 필요한 경우에 한정해 let 키워드를 사용한다. 이때 변수의 스코프는 최대한 좁게 만든다.
- 변경이 발생하지 않는(재할당이 필요 없는 상수) 원시 값과 객체에는 const 키워드를 사용한다. const 키워드는 재할당을 금지하므로 var, let 보다 안전하다.


변수를 선언하는 시점에는 재할당이 필요할지 잘 모르는 경우가 많다. 그리고 객체는 의외로 재할당을 하는 경우가 드물다. 따라서 변수를 선언할 때에는 일단 const 키워드를 사용하도록 하자. 반드시 재할당이 필요하다면(반드시 재할당이 필요한지 한번 생각해 볼 일이다.) 그때 const를 let 키워드로 변경해도 결코 늦지 않는다.


```

### Node.js

### mongoose

[몽구스 스키마](https://www.zerocho.com/category/MongoDB/post/59a1870210b942001853e250)

몽구스는 사용자가 작성한 스키마를 기준으로 데이터를 DB에 넣기 전에 먼저 검사합니다.

스키마에 어긋나는 데이터가 있으면 에러를 발생시킵니다.
즉, 테이블과 어느 정도 비슷한 역할을 합니다.

또한 스키마를 설정할 때 인덱스까지 같이 걸어둘 수도 있습니다.

기본값도 설정해줄 수 있고요.

구조에 관한 편의 기능들을 하나로 모아두었다고 생각하시면 됩니다.

<br>

테이블과 어느 정도 비슷한 역할을 합니다.

또한 스키마를 설정할 때 인덱스까지 같이 걸어둘 수도 있습니다.

기본값도 설정해줄 수 있고요.

구조에 관한 편의 기능들을 하나로 모아두었다고 생각하시면 됩니다.

```


xcode-select --install

brew tab mongodb/brew

brew update

brew install mongodb-community@4.4

brew --prefix

brew info mongodb-community@4.4

export PATH="/opt/homebrew/opt/mongodb-community@4.4/bin:$PATH"

!!

  실행
  brew services start mongodb-community@4.4

  몽고 connect
  mongod

  위 명령어(mongod) 안될 시
  brew install mongodb-community-shell


-- 계정생성
--


use admin

db.createUser({ user: "mongo", pwd: "password123", roles: ["root"] })
Successfully added user: { "user" : "mongo", "roles" : [ "root" ] }


mongo admin -u mongo -p password123



use db이름

show dbs

현재 사용중인 데이터베이스 확인
  db

권한
  db.createUser({ user: "youruser", pwd: "yourpassword", roles: [{ role: "dbOwner", db: "사용중인 db 이름" }] })

db.createUser({ user: "mongo", pwd: "password123", roles: [{ role: "dbOwner", db: "testmongo" }] })



계정 삭제
  > db.dropUser("username")
현재 데이터베이스의 사용자 출력
  > db.getUsers()


==============



```

#### 몽고db, query

Mongoose - query (CREATE)

- Model.create({...})
- Model.save()

Mongoose - query (READ)

- Model.find({...})
- Model.findOne({...})

Mongoose - query (UPDATE)

- Model.findByIdAndUpdate({...})
  - 해당 id의 documnet를 불러와서 갱신
- Model.updateOne({...})

Mongoose - query (DELETE)

- Model.findByIdAndDelete({...})
  - 삭제한 데이터를 return
- Model.deleteOne({...})
  - 삭제한 데이터를 return x

### typescript

### project

오토에버

- back
  - NestJS
  - typeScript
  - 몽고db

```java


// 02
//

dashboard.service
쿼리 구현


  getMyTicket(query) {
    const { reg_time, userId } = query;
    let sql = this.caseInfo
      .createQueryBuilder('caseInfo')
      .select("coalesce(sum(case when caseInfo.statusCd = 'Open' then 1 else 0 end), 0)", "openCnt")
      .addSelect("coalesce(sum(case when caseInfo.statusCd = 'Close' then 1 else 0 end), 0)", "closeCnt")
      .addSelect((subQuery) => {
        return subQuery
          .select("coalesce(sum(case when ci.statusCd != 'Close' then 1 else 0 end), 0)", "delayCnt")
          .from('case_info', "ci")
          .where("ci.visible = true")
          // .andWhere("ci.ownerId = :userId", {userId: userId})
          .andWhere(new Brackets(qb => {
            qb.where("ci.ownerId = :userId", { userId: userId })
              .orWhere("ci.userId = :userId", { userId: userId })
          }))
          .andWhere("ci.reg_time < now()")
      }, "delayCnt")
      .where("caseInfo.visible = true")
      // .andWhere("caseInfo.ownerId = :userId", {userId: userId})
      .andWhere(new Brackets(qb => {
        qb.where("caseInfo.ownerId = :userId", { userId: userId })
          .orWhere("caseInfo.userId = :userId", { userId: userId })
      }))

      if(reg_time != null) {
        sql = sql.andWhere("caseInfo.regTime between :regTimeSt and :regTimeEn", {
          regTimeSt: reg_time[0],
          regTimeEn: reg_time[1]
        })
      } else {
        sql = sql.andWhere("caseInfo.regTime between now()- INTERVAL '3 DAY' and now()")
      }

      return sql.getRawOne();
  }


// 01
//

/autoever-edr-portal/backend/src/menu-auth/menuAuth.controller.ts
/autoever-edr-portal/backend/src/menu-auth/menuAuth.module.ts
/autoever-edr-portal/backend/src/menu-auth/menuAuth.schema.ts
/autoever-edr-portal/backend/src/menu-auth/menuAuth.service.ts


// menuAuth.service.ts
//

@Injectable()
export class MenuAuthService {
  constructor(
    @InjectModel(MenuAuth.name)
    private readonly menuAuthModel: Model<MenuAuthDocument>,
  ) {}

  async findAll() {
    return this.menuAuthModel.find();
  }

  async findOneByGroupId(groupId: number) {
    return this.menuAuthModel.findOne({ groupId: groupId }).exec();
  }

  async patchOne(groupId: number, body: object) {
    return this.menuAuthModel.findOneAndUpdate({ groupId }, body, {
      upsert: true,
    });
  }

  async delete(groupId: number) {
    return await this.menuAuthModel
      .findByIdAndRemove({ groupId: groupId })
      .exec();
  }



```

## 01

```

npx create-react-app codingapple_first

npm install express

npm install mongoose





```

### dom

React DOM은 React에서 사용되는 가상(DOM)을 실제 DOM에 렌더링하는 라이브러리입니다. React DOM은 React 컴포넌트의 상태에 따라 다양한 상태를 가질 수 있습니다.

- Mounted: React 컴포넌트가 DOM에 마운트(mount)되면, React DOM은 컴포넌트의 상태를 Mounted 상태로 변경합니다. 이 상태에서는 컴포넌트가 화면에 렌더링되고, DOM 트리에 삽입됩니다.

- Updated: React 컴포넌트의 state나 props가 변경되면, React DOM은 컴포넌트의 상태를 Updated 상태로 변경합니다. 이 상태에서는 컴포넌트가 다시 렌더링되고, 변경된 내용이 DOM에 업데이트됩니다.

- Unmounted: React 컴포넌트가 DOM에서 언마운트(unmount)되면, React DOM은 컴포넌트의 상태를 Unmounted 상태로 변경합니다. 이 상태에서는 컴포넌트가 DOM에서 제거되고, 더 이상 렌더링되지 않습니다.

- Error: React 컴포넌트에서 오류가 발생하면, React DOM은 컴포넌트의 상태를 Error 상태로 변경합니다. 이 상태에서는 오류 메시지가 화면에 렌더링되고, 컴포넌트의 자식 컴포넌트도 렌더링되지 않습니다.

- React DOM은 이러한 상태를 기반으로 컴포넌트의 렌더링과 업데이트를 처리합니다. 이를 통해 React는 효율적이고 성능이 우수한 UI를 제공할 수 있습니다.

### state

1. useState Hook 사용하기 React의 기본적인 상태 관리 방법인 useState Hook을 사용할 수 있습니다. Next.js에서는 이를 사용하기 위해 react 패키지를 import해야 합니다. 다음은 예시입니다:

```js
import { useState } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default MyComponent;
```

2. getInitialProps 메서드 사용하기

```js
function MyComponent({ count }) {
  const [currentCount, setCurrentCount] = useState(count);

  const handleClick = () => {
    setCurrentCount(currentCount + 1);
  };

  return (
    <div>
      <p>Count: {currentCount}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

MyComponent.getInitialProps = () => {
  return { count: 0 };
};

export default MyComponent;
```

위의 예제에서 getInitialProps 메서드는 count 프로퍼티를 반환합니다. 이 프로퍼티는 MyComponent의 초기값으로 사용됩니다. 이후에는 useState Hook을 사용하여 클라이언트 측에서 상태를 변경할 수 있습니다.

### 사용자 정의 hook

React에서 사용자 정의 Hook은 컴포넌트에서 중복되는 로직을 추상화하고 재사용 가능한 함수로 분리하는 방법입니다. 사용자 정의 Hook을 작성하면 다른 컴포넌트에서 동일한 로직을 사용할 수 있으며 코드의 재사용성과 가독성을 향상시킬 수 있습니다.

사용자 정의 Hook은 "use" 접두어로 시작해야 하며, 일반적으로 컴포넌트의 상태와 라이프사이클 메서드를 추상화하거나, 비동기 호출을 처리하는 등의 로직을 포함합니다.

예를 들어, useForm이라는 사용자 정의 Hook을 작성해보겠습니다. 이 Hook은 폼을 다루는 컴포넌트에서 상태값과 이벤트 핸들러를 추상화하여 제공합니다.

```js
import { useState } from "react";

function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  function handleChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // 폼 데이터를 처리하는 로직
  }

  return { values, handleChange, handleSubmit };
}

// 사용 예시
function MyForm() {
  const { values, handleChange, handleSubmit } = useForm({
    name: "",
    email: "",
  });

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={values.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

이제 MyForm 컴포넌트에서 useForm Hook을 사용하여 상태와 이벤트 핸들러를 추상화했으므로, 이 Hook을 다른 폼 컴포넌트에서도 사용할 수 있습니다. 이런 식으로 컴포넌트에서 중복되는 로직을 추상화하여 재사용성을 높일 수 있습니다.

### useRef

- 리렌더링 되더라도 값 유지됌
- 언마운트 될떄가지
- state의 변화가 일어나면 렌더링이 일어나지만 useRef로 선언된 값이 변해도 렌더링이 일어나지 않음
- dom요소에 접근

```js
const countRef = useRef(0);

const increaseCOuntRef = () => {
  countRef.current = countRef.current + 1;

  return (
    <div>
      <p>Ref: {countRef.current}</p>
    </div>
  );
};
```

### useMemo

- 성능상의 차이는 아주 미미하겠지만 재계산하는 로직이 복잡하다면 불필요하게 비싼 계산을 하는 것을 막을 수 있음

```javascript

// info component
// colorKor가 실행될 떄  movieGenerKor도 동작 됌 (react 특징)

const colorKor = color => {
  ...
}
const movieGenerKor = movice => {
  ...
}


const Info = ({color, movice}) => {
  const colorKor = getColor(color);
  const movieGenerKor = getMoviceGenKor(movie);

}



// useMemo 사용
//

const Info = ({color, movice}) => {
  const colorKor = useMemo(() => getColor(color),[color]);
  const movieGenerKor = useMemo(() => movieGenerKor(movie),[movie]);

}


```

### useCallback

- useState으로 선언된 값이 한개만 변해도 dom은 다시 생성됌

```js
// dom 생성 될 떄 한번만 선언이 되었으면 좋겠다는 생각이 듦

const onChangeHandler = (e) => {
  if (e.target.id === "color") setColor(e.target.value);
  else setMovie(e.target.value);
};

// useCallback 사용

const onChangeHandler = useCallback((e) => {
  if (e.target.id === "color") setColor(e.target.value);
  else setMovie(e.target.value);
}, []);
```

### props

Props는 부모 컴포넌트에서 자식 컴포넌트로 전달되는 데이터입니다. 부모 컴포넌트에서 자식 컴포넌트에 데이터를 전달할 때, 자식 컴포넌트의 props를 설정하여 전달합니다. 이렇게 전달된 props는 자식 컴포넌트에서 참조하여 사용할 수 있습니다.

Next.js에서도 React와 마찬가지로, 컴포넌트에 props를 전달할 수 있습니다. 이 때, 컴포넌트는 함수 형태로 작성되며, props는 함수의 매개변수로 전달됩니다. 예를 들어, 아래는 MyComponent 컴포넌트에 title이라는 props를 전달하는 예시 코드입니다.

```js
function MyComponent(props) {
  return <h1>{props.title}</h1>;
}

export default function Home() {
  return <MyComponent title="Hello, Next.js!" />;
}
```

위 코드에서 MyComponent 컴포넌트는 props.title을 출력하도록 작성되어 있습니다. Home 컴포넌트에서는 MyComponent 컴포넌트에 title이라는 이름으로 "Hello, Next.js!"라는 값을 전달하고 있습니다. 이렇게 전달된 title props는 MyComponent 컴포넌트에서 참조하여 출력됩니다.

따라서, Next.js에서 props는 React에서 사용되는 개념과 동일하게, 컴포넌트에서 전달되는 데이터를 의미합니다.

### map , 객체

```js

// 05
// 배열

key가 있는게 효율적으로 데이터를 관리 가능




만약 배열 안의 원소가 가지고 있는 고유한 값이 없다면 map() 함수를 사용 할 때 설정하는 콜백함수의 두번째 파라미터 index 를 key 로 사용하시면 됩니다.



import React from 'react';

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
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ];

  return (
    <div>
      {users.map(user => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default UserList;


// 04
// 객체 update할 떄 스프레드 문법으로 복사해줘야함



const [inputs, setInputs] = useState({
  name : '',
  nickname : '',
});

const onChange = (e) => {
  const {name, value} = e.target; // e.target에 있는 name, value를 비구조 할당으로 가져옴

  setInputs({
    ...inputs,
    [name] : value,
  })

}



// 03
// push

function MyComponent() {
  const [items, setItems] = useState([
    { id: 1, name: 'Apple', price: 1000 },
    { id: 2, name: 'Banana', price: 2000 },
  ]);

  const handleClick = () => {
    const newItem = { id: 3, name: 'Orange', price: 3000 };
    const newItems = [...items, newItem]; // 기존의 배열에 새로운 요소를 추가하기 위해 spread 연산자를 사용
    setItems(newItems);
  };

  return (
    <div>
      <button onClick={handleClick}>Add Item</button>
      {items.map((item) => (
        <div key={item.id}>
          <div>{item.name}</div>
          <div>{item.price}</div>
        </div>
      ))}
    </div>
  );
}



// map 출력
// 02

Next.js는 React 기반의 웹 프레임워크이므로, React의 기본적인 map 함수를 사용하여 데이터를 출력할 수 있습니다.

예를 들어, 아래는 Next.js에서 배열 데이터를 출력하는 예시 코드입니다.



function MyComponent({ data }) {
  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  )
}


위 코드에서 data는 배열 형태의 데이터이며, map 함수를 사용하여 배열의 각 요소를 순회하면서 각 요소를 <li> 태그로 출력합니다. 이 때, key prop을 설정하여 각 요소가 유일한 값으로 구분되도록 합니다.

위와 같이 React의 기본적인 map 함수를 사용하여 데이터를 출력할 수 있습니다. 하지만 Next.js는 server-side rendering (SSR) 및 static site generation (SSG) 기능을 제공하므로, getServerSideProps 또는 getStaticProps 함수에서 데이터를 가져와 컴포넌트에 props로 전달하는 방식으로도 데이터를 출력할 수 있습니다. 이 경우, 서버 측에서 데이터를 가져오기 때문에 초기 로딩 속도가 빨라지는 장점이 있습니다.




// map 출력
// 01




function Home() {

  const databalone = [{status: '1', message: 'OK', result: '1234'},{status: '1', message: 'OK', result: '1234'}];
  const datatransone = [{status: '1', message: 'OK', result: [{hash: '4321'}]},{status: '1', message: 'OK', result: [{hash: '54321'}]}];

  return  (
    <ul>
      <h1>Address One</h1>
      {databalone.map((balance) => {
        return (
      <li>{(balance.result * 1e-18).toString()}</li>
      )})}
      <div>
      <h1>Address Two</h1>
      <div>
      {datatransone.map(function(d){
         return (<li>{d.result.map((r) => <span>{r.hash}</span>)}</li>)
       })}
      </div>
      </div>
    </ul>
  );
}

ReactDOM.render(<Home />, document.getElementById('root'));
```

### form data get

```js


import React, { useReducer } from "react";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

const Form = () => {
  const [formData, setFormData] = useReducer(formReducer, {});
  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.keys(formData).length == 0) return console.log("data is empty");
    console.log(formData);
  };


  <form className="grid lg:grid-cols-2 w-4/6 gap-4" onSubmit={handleSubmit}>
    <div className="input-type">
      <input
        type="text"
        name="firstname"
        placeholder="firstname"
        onChange={setFormData}
        className="border w-full px-5 py-3 focus:outline-none rounded-md"
      ></input>
    </div>




```

## nest.js

```js



npx @nestjs/cli new back


설치 안될시 wifi바꿔서 해보기 (폰 핫스팟 잡으니까 설치됌)




```
