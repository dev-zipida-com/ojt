Nodejs Introduction 
===

> 목차
[1. nodejs란](#nodejs란)
[2. node package manager](#node-package-manager)
[3. node modules](#node-modules)
[4. 환경변수 설정](#환경변수-설정)


## nodejs란
* nodejs는 오픈소스, 크로스플랫폼 지원이 가능한 V8 엔진 기반 백엔드 자바스크립트 런타임 환경입니다. 
* nodejs 이후, client side language로 브라우저에 국한되었던 Javascript가 Sever side language로 활용 가능하게 되었습니다. 
* nodejs는 Event loof를 통한 이벤트 기반(event-driven) 개발, 논 블로킹 IO를 기반으로 대량의 동시적 이벤트(가령 api request 등)를 빠르게 처리할 수 있습니다. 
* 그 외에도 nodejs는 자바스크립트가 지원하는 multiple programming pattern(객체지향, 함수지향, 이벤트 드라이븐 등의 자유로운 혼용)개발, NPM(Node package manager) 기반 모듈 설치와 버전 관리 및 의존성 개선, 그리고 넓고 다양한 사용자층이라는 강점을 가지고 있습니다.

## NPM(node package manager)
* npm은 JS를 위한 디폴트 패키지(개발을 위한 파일과 디렉토리 집합을 재사용을 위해 묶어놓은 것)관리자입니다. 패키지 버전 및 의존성 관리, 협업을 위한 패키지 관리 및 퍼블리싱을 위해 사용됩니다. 
* npm이 관리하는 패키지 정보는 폴더의 root에 위치하는 package.json에 정의되어 있습니다. npm init 명령어를 통해 default를 생성할 수 있습니다. 예를 들면 다음과 같습니다.
```javascript
{
  "name": "my-awesome-project",
  "version": "1.0.0",
  "description": "This is a sample project to demonstrate the usage of package.json",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
  },
  "dependencies": {
    "express": "^4.17.1",
    "lodash": "^4.17.21",
  },
  "devDependencies": {
    "jest": "^26.0.1",
    "nodemon": "^2.0.4"
  },
  "author": "John Doe",
  "license": "MIT"
}
```
* dependencies와 devDependencies의 차이는 dependencies는 publish 환경에서 사용되며, devDependencies는 개발 환경에서만 사용되고, publish 환경에서는 의존성이 없는 패키지를 가리킨다는 점입니다.
* 예제의 경우 publish 환경에서 express를, 개발 환경에선 테스트코드 작성과 편의를 위한 두 모듈을 사용하고 있다는 것을 확인할 수 있습니다.
* dependencies 및 devdependencies의 버전 정보의 경우 기호를 붙여 업데이트 범위를 지정할 수 있습니다. [^출처1]
| 표기법 | Description |
|:----------:|:----------:|
|version	  |명시된 version과 일치|
|>version	  |명시된 version보다 높은 버전|
|>=version	|명시된 version과 같거나 높은 버전|
|<version	  |명시된 version보다 낮은 버전|
|<=version	|명시된 version과 같거나 낮은 버전|
|~version	  |명시된 version과 근사한 버전|
|^version   |명시된 version과 호환되는 버전|

## node modules
* 패키지가 여러 개의 모듈로 이루어 진 단일 유닛이라면, 모듈은 변수, 객체, 함수등을 export하는 단일 유닛으로써 다른 모듈, 또는 패키지와 (재사용을 위해)독립적인 코드 또는 파일입니다. 
* JS가 실행 컨택스트 내부의 변수. 함수 등이 대하여 스코프를 갖듯이, 모듈 역시 파일 단위의 스코프를 가집니다. 즉, 외부에서 모듈을 참조하기 위해 module.exports(단일 객체 등), 또는 exports(여러 객체 등) 명령어를 사용, 노출될 값을 정의해야 합니다.
* 반대로, 모듈을 가져다 쓰는 경우 require 또는 import 명령어를 사용하여 모듈의 위치 또는 대상 모듈 이름을 정의해야 합니다. 
```javascript
// myModule.js

const addNumbers = (a, b) => {
  return a + b;
};

module.exports = addNumbers;
```

```javascript
// index.js

const addNumbers = require('./myModule');

const result = addNumbers(3, 4);
console.log(result); // Output: 7
```

## 환경변수 설정
* 내 코드를 github와 같은 code repository에 공개하는 경우, 민감 정보는 공유해선 안됩니다. 환경변수는 모듈을 사용하여 민감 정보를 외부에서 참조하도록 하고, git ignore함으로서 노출을 회피할 수 있습니다.
* 전역 객체 process.env를 사용할 수 있습니다. process.env 내부에 저장된 정보는 일회성으로, 프로세스가 종료되면 사라집니다. 
```javascript
// server.js

const express = require('express');
const app = express();

// Accessing the PORT environmental variable
const port = process.env.PORT || 3000; // 환경변수에 저장한 port번호를 불러옵니다. 

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
```

* 보다 효과적인 환경변수 관리를 위하여, dotenv library를 사용할 수 있습니다.
```javascript
// .env file
DB_HOST=localhost
DB_USER=root
DB_PASS=secret

// app.js file
const dotenv = require('dotenv');
dotenv.config();

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;

console.log(dbHost, dbUser, dbPass);
// Output: localhost root secret
```

\[^출처1]: https://poiemaweb.com/nodejs-module