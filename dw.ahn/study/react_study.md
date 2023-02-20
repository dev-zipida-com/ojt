## before

[링크1](https://poiemaweb.com/)

### js

### ECMAScript6

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

### Expreess

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
