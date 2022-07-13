# NodeJS

### 개요

> Node.js는 Chrome V8 자바스크립트 엔진으로 빌드된 자바스크립트 런타임 환경으로 주로 서버 사이드 애플리케이션 개발에 사용되는 소프트웨어 플랫폼입니다.  
> Node.js는 브라우저 외부 환경에서 자바스크립트 애플리케이션 개발에 사용됩니다.

Node.js는 Non-blocking I/O 와 단일 스레드 이벤트 루프를 통한 높은 Request 처리 성능을 가지고 있습니다.

#

### Node.js 설치

- Node.js 웹사이트에 접속하면 두 개의 다운로드 버튼이 보입니다.
- LTS(Long Term Supported) 버전은 장기적으로 안정된 지원이 보장됩니다.
- Current 버전은 최신 기능을 제공하지만 업데이트가 발생하고 있는 버전으로 안정적이지 않을 수 있습니다.

설치가 완료되면 터미널에서 Node.js와 npm 버전을 확인할 수 있습니다.

```
$ node -v
v10.15.1
$ npm -v
6.4.1
```

#

### npm

- npm(node package manager)은 자바스크립트 패기지 매니저입니다.
- Node.js에서 사용할 수 있는 모듈들을 패키지화하여 모아둔 저장소 역할과 패키지 설치 및 관리를 위한 CLI(Command Line Interface)를 제공합니다.

### 패키지 설치

Node.js에서 사용할 수 있는 모듈 패키지를 설치할 때 npm install 명령어를 사용합니다.

```
$ npm install <패키지 이름>
```

#

### package.json

- Node.js 에서는 많은 패키지를 사용하고 패키지 버전도 빈번하게 업데이트 되기 때문에 패키지를 일괄 관리할 필요가 있습니다.
- npm은 package.json 파일을 통해 프로젝트 정보와 패키지의 의존성(dependency)을 관리합니다.

package.json파일을 생성하려면 프로젝트 루트에서 npm init 명령어를 실행합니다.

```
$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (emoji)
```

- npm init 명령어를 사용하면 프로젝트에 대한 여러 정보를 입력하도록 요구합니다.
- 이때 일단 기본 설정값으로 package.json파일을 생성하고 수정하는 방법이 더 편리할 수 있습니다.

#### 자주 사용하는 npm 명령어

```
$ npm init

# 로컬 설치
$ npm install <패키지 이름>
# 전역 설치
$ npm install -g <패키지 이름>
# 패키지 제거
$ npm uninstall <패키지 이름>
# 패키지 업데이트
$ npm update <패키지 이름>
```

#

### What is SERVER?

서버는 네트워크를 통해 클라이언트에게 정보나 서비스를 전달하는 컴퓨터 프로그램, 장치입니다.
클라이언트의 요청을 받으면 서비스, 데이터를 제공하는 컴퓨터 혹은 프로그램을 말합니다.

#### 서버에 요청할 수 있는 4가지 방법

웹서버에 유저가 정식으로 할 수 있는 요청은 4종류가 있습니다.

1. 읽기(GET)요청
2. 쓰기 혹은 생성(POST) 요청
3. 수정 요청(PUT)
4. 삭제(DELETE) 요청

#

### Node.js

Node.js는 자바스크립트를 브라우저가 아닌 로컬 PC에서도 실생히켜줄 수 있는 실행창(런타임)입니다.
Node.js의 등장으로 브라우저에서만 작동하던 자바스크립트를 일반 프로그래밍 언어처럼 다룰 수 있게 되었고, 자바스크립트를 사용해 웹서버를 만들 수 있게 되었습니다.

Node.js는 Non-blocking 방식을 따릅니다.
Non-blocking은 모든 요청을 받고 빨리 완료된 요청부터 처리해줍니다.
그래서 여러 요청이 들어왔을때, 중간에 시간이 오래 걸리는 요청이 있어도 결과가 빨리 나온 요청부터 응답해줍니다.  
Node.js가 강점을 보이는 분야가 SNS, 채팅서비스 웹서버입니다.  
반면에 Node.js의 단점은 처리속도가 떨어질 수 있고, 수학연산이나 이미지처리 같은 라이브러리가 부족할 수도 있습니다.

#

### Node.js 설치

Node.js는 [Node.js홈페이지](https://nodejs.org/ko/)로 접속하면 설치할 수 있습니다.
보통 LTS 버전을 설치합니다.

그리고 작업할 폴더를 만들고 서버를 만들어줍니다. vscode로 폴더를 열고 터미널에

```
npm init
```

다음 명령어를 입력하면 이제 node.js로 서버를 작성할 수 있습니다.

#

### Express

Express 는 서버를 조금 더 효율적으로 만들기 위해 사용하는 node.js 라이브러리 입니다.

```
npm install express
```

다음 명령어를 터미널에 입력해서 express 라이브러리를 설치할 수 있습니다.

#

### 서버 실행

express를 이용해 서버를 작성하는 방법은 [express홈페이지](https://expressjs.com/ko/)에 정리되어 있습니다.

```javascript
const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`listenning on port ${port}`);
});
```

첫 두줄은 express 라이브러리를 첨부하고 사용하는 것입니다. 밑에 `app.listen()`은 원하는 포트에 서버를 오픈하는 문법입니다.

listen() 함수 안에는 두개의 파라미터가 필요합니다.
첫 번째 파라미터는 서버를 오픈할 포트번호, 두 번째 파라미터는 서버를 오픈하고 실행할 콜백함수를 넣습니다.
위의 코드는 서버가 실행되면 `listenning on port 8080`이라는 글자를 화면에 표시합니다.

#### 포트

컴퓨터는 항상 외부 컴퓨터와 통신할 수 있게 설계되어 있습니다. 랜선을 꽃거나 와이파이를 켜면 다른 사람의 컴퓨터로 접속을 요청할 수 있습니다.
컴퓨터는 외부와 통신할 수 있는 통로가 60000개 정도 있는데 이것을 '포트'라고 부릅니다.
만약 외부에서 방금 작성한 서버에 접속하려면 '내 컴퓨터의 아이피주소:8080' 으로 접속할 수 있습니다.

#

### nodemon

서버 코드를 실행할 때마다 서버를 껐다가 다시 켜야합니다.
하지만 nodemon을 이용하면 코드를 수정하고 저장하면 자동으로 서버를 재실행 시켜줍니다.
지금은 어떤 오류인지 모르겠지만 강의 영상대로 해서 작동하지 않아서 package.json파일 script 부분에 직접 start 부분을 작성해서 사용하고 있습니다.

```
$npm install -g nodemon
```

일단 nodemon을 글로벌 설정으로 받아줍니다.
그리도 다시 시작할 때 nodemon을 이용해서 서버를 실행하려면

```
$nodemon server.js
```

위의 명령어로 실행을 해야하는데 실행이 되지 않아서 package.json파일을 수정했습니다.

```javascript
// package.json
"scripts": {
    "start": "nodemon server.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

script 부분에 start를 추가해서 start 명령으로 nodemon을 실행했습니다.

```
$npm start
```

위의 명령어로 실행을 하면 nodemon으로 서버를 실행한 것과 같이 사용할 수 있습니다.

#

### 요청 처리하기

서버는 클라이언트의 요청을 처리하는 역할을 합니다. 4가지의 요청을 할 수 있다고 했는데, 읽기(GET)요청을 예로 들어보겠습니다.

```javascript
const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`listenning on port ${port}`);
});
```

위의 코드는 간단한 서버 실행 코드입니다. listen() 함수는 위에서 서버를 실행시키는 함수라고 했습니다.
요청을 처리하는 코드는 listen()함수 위에 있습니다.

```javascript
app.get("/", (req, res) => {
  res.send("Hello World!");
});
```

위의 코드가 `/`경로로 들어오는 `get`요청을 처리하는 함수입니다. 요청 처리 함수도 두개의 파라미터가 필요합니다. (필요에 따라서 파라미터가 추가될 수 있습니다. => 미들웨어 사용시)

첫번째 파라미터는 경로입니다. 클라이언트는 요청을 어디로 할 것인지 경로를 정해서 요청을 하는데 서버에서는 작성된 경로와 요청이 맞다면 다음 파라미터인 함수를 실행합니다.
두번째 파라미터는 콜백함수로 요청을 받았을 때 어떤 동작을 할 지 정의해두는 함수입니다.

같은 구조로 읽기 요청 뿐만 아니라 나머지 다른 요청도 처리할 수 있습니다.

```javascript
app.post('경로', function());
app.delete('경로', function());
app.put('경로', function());
```

#

### API

API는 Application Programming Interface 의 줄임말입니다.
쉽게 이야기하면 서로 다른 프로그램 간의 소통을 도와주는 통신 규약을 의미합니다.
이것을 웹에서 사용하면 '서버와 클라이언트간의 통신 규약'을 뜻합니다.
다시 말해 서버에게 어떻게 요청을 해야 데이터를 받아올 수 있는지에 대한 방법이 바로 API입니다.

#### REST API

#

### 회원 인증 방법

#### 세션(Session) 방식

사용자의 세션정보를 저장해서 로그인을 구현하는 방법입니다.

- 고객이 로그인 했었다는 정보를 서버의 메모리에 기록합니다. (세션을 저장합니다.)
- 고객이 로그인이 필요한 페이지를 요청하면
- 세션을 확인하고 로그인 했다는 정보가 있으면 통과됩니다.

로그인시 제출한 아이디, 비밀번호가 DB에 저장된 회원정보와 맞다면 서버는 세션스토어에 세션을 하나 만들어서 저장합니다.
세션은 고객이 언제, 어디서 로그인 했는지 정도의 정보를 담은 자료입니다.

그리고 로그인한 유저마다 각각 유니크한 세션아이디를 발급합니다.
당연히 로그인한 사람이 여러명일 수 있기 때문에 세션아이디를 발급해서 구분을 지어줍니다.

발급한 세션아이디는 고객과 서버 둘다 보관을 하게 됩니다.
쿠키에 담아서 고객의 브라우저에 보내줍니다.

고객이 로그인이 필요한 서비스에 접근하면 브라우저의 쿠키에 세션아이디가 포함되었는지 확인하고
세션아이디를 서버 세션스토어에 있는 세션아이디와 비교해서 있으면 통과시켜줍니다.

#

#### JSON Web Token (JWT)

토큰 방식은 세션데이터를 서버에 저장하지 않고 사용자에게 토큰을 건내주고 토큰을 열쇠로 사용하는 방식입니다.
그래서 토큰에는 세션방식보다 약간 더 많은 정보들이 들어갑니다.

로그인시 제출한 아이디, 비밀번호가 맞다면 서버는 토큰을 만들어 브라우저로 보냅니다.
토큰은 암호화된 문장열로 사용자의 로그인 여부와 아이디 등 몇가지 정보를 가지고 있습니다.
위조가 불가능하도록 특별한 서명이 추가되고, 쿠키나 로컬스토리지에 저장합니다.

사용자가 로그인이 필요한 페이지를 요청하면 서버는 먼저 토큰을 검사합니다.
사용자가 페이지 요청시 함께 보낸 토큰을 검사해서 유통기한, 서명 등의 검사를 거친 후 이상이 없으면 통과시켜줍니다.

토큰은 보안상 취약점이 존재할 수 있습니다. 로그인 정보를 서버가 가지고있지 않고 사용자가 가지고 있게 하는 것이 보안상 좋지 못한 방법입니다.
토큰을 중간에 가로챌 수 있기 때문에 서버에도 토큰을 하나 저장해두는 방식이 있는데 그 중 하나가 refresh Token 입니다.
그러면 세션방식과 다를바가 없습니다.

#

#### Open Authentication(OAuth)

이 방법은 페이스북, 구글 로그인을 말합니다.
만약 서비스에 페이스북으로 로그인 버튼을 클릭하면 페이스북에서 현재 서비스에 본인의 페이스북 아이디, 이름 등을 제공하는것에 승인을 받습니다.
그럼 페이스북은 현재 서비스에 사용자의 아이디, 이름 등의 정보를 보내줍니다.
서버에서는 페이스북의 데이터를 바탕으로 DB에 회원 정보를 저장하고 세션데이터 또는 토큰을 만들어줍니다.

이 방법은 비밀번호를 취급하지 않아도 된다는 장점 때문에 관리도 편하고 사용자도 편리함을 느낍니다.
또한 페이스북, 구글 등에서 제공하는 공식 개발문서가 많기 때문에 따라하기만 하면 개발하는데 큰 어려움은 없습니다.
하지만 페이스북, 구글 등이 OAuth를 중단하거나, 방법을 수정하거나, 서버에 문제로 접속이 불가능해지면 우리가 만든 서버에도 로그인이 불가능합니다.

#

### .env 파일에서 민감한 환경변수들 관리하기

서버에서 DB를 연결할 때 다음과 같은 코드를 작성했습니다.

```javascript
var db;
MongoClient.connect(
  "mongodb+srv://codingapple1:어쩌구@저쩌구",
  function (err, client) {
    if (err) return console.log(err);
    db = client.db("Example1");
    app.listen(8080, function () {
      console.log("listening on 8080");
    });
  }
);
```

여기엔 포트번호, mongodb+srv라고 시작하는 DB접속 문자열이 존재합니다.
이런 값들은 다른 개발환경이나 다른 컴퓨터로 코드를 옮긴다면 수정이 필요할 수 있습니다.
다른 컴퓨터에서 포드를 다른 번호로 연다든지, 나중에 DB접속 문자열이 바뀌면 그때마다 코드를 수정해야 합니다.
따라서 환경변수를 한곳에 모아 관리하게 되는데 .env파일에서 중요 환경변수들을 관리합니다.

.env 파일을 사용하기 위해서는 환경변수 사용을 위한 라이브러리를 설치합니다.

```
$npm install dotenv
```

그리고 환경변수를 사용할 파일에 설치한 라이브러리를 등록합니다.
서버 파일 상단에 등록하고 자유롭게 사용할 수 있습니다.

```javascript
require("dotenv").config();
```

서버파일(server.js)와 같은 경로에 .env파일을 만들어줍니다.
그리고 내부에 변경이 될 것 같은 환경변수들을 전부 다 적고 저장하면 됩니다.

```
(.env)
PORT=8080
DB_URL="mongodb+srv://codingapple1@blabla"
```

왼쪽에 변수명을 오른쪽엔 값을 적어줍니다. 변수 이름은 보통 대문자로 표기합니다.
환경변수를 모아두면 나중에 파일만 수정하면 되기 때문에 관리도 편해지고 작업환경이 바뀌거나 클라우들에 올릴 때도 이 파일만 수정해주면 쉽게 세팅이 가능해집니다.

환경변수를 서버파일에 불러와 사용할 땐 `process.env.변수이름` 으로 불러올 수 있습니다.

```javascript
var db;
MongoClient.connect(process.env.DB_URL, function (err, client) {
  if (err) return console.log(err);
  db = client.db("Example1");
  app.listen(process.env.PORT, function () {
    console.log("listening on 8080");
  });
});
```

#

### socket.io

서버와 유저간 Web Socket을 연다면 양방향으로 실시간 응답이 가능합니다.

```
$npm install socket.io
```

터미널에 위의 명령어를 입력하면 socket.io 설치는 완료됩니다.

서버 코드에서 socket.io 를 사용하려면 세팅을 해야합니다.

```javascript
const http = require("http").createServer(app);
const { Server } = reqiore("socket.io");
const io = new Server(http);

http.listen(port, () => {
  console.log(`listening on port ${port}`);
});
```

express를 이용해 서버를 실행시키던 것을 http라는 nodejs 라이브러리와 socket.io를 이용해 실행시켰습니다.

이제 클라이언트가 보낸 데이터를 서버가 수신하는 방법입니다.

```javascript
io.on("connection", function (socket) {
  console.log("연결되었어요");

  socket.on("user-send", function (data) {
    console.log(data);
  });
});
```

이벤트리스너와 비슷한 문법을 사용합니다.
'user-send'라는 이벤트가 발생하면 콜백함수를 실행시킵니다.
data라는 파라미터 안에 클라이언트에서 보낸 데이터가 들어있습니다.

#

### 쇼핑몰 카드결제

카드결제는 카드결제모듈 이용 (PG사와 계약필요)
PG사 계약시 결제 모듈 호출하는 JS코드 제공해줌
아임포트 서비스로 쉽게 구현 가능

#

### 채팅기능 = 댓글기능 + 실시간

채팅방 선택 -> 메세지 남기기
글 선택 -> 댓글 남기기

채팅방 게시물 발행 -> 댓글(메세지) 남길 수 있게 하면 끝!

실시간으로 DB데이터 계속 가져오는 법

1. GET요청 계속 하기 -> 서버부담 (DDos공격)
2. 서버와 유저간 실시간 소통 채널 열기
