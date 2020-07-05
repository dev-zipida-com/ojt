Node.Js
===
node.js
---
### 특징
* node.js는 서버사이드 어플리 케이션 개발에 사용됩니다.
* HTTP,Bulit-in API를 제공합니다.
* non-blocking I/O와 단일 스레드 이벤트 루프를 통해 높은 Request 처리 성능을 가지고 있습니다.
* I/O가 빈번히 발생하는 SPA에 적합합니다.
* CPU사용율이 높은 어플리케이션에는 적합하지 않습니다.
* Socket.io라는 실시간 통신을 할 수 있는 라이브러리를 사용할 수 있어서 대량의 데이터 처리와 실시간 통신을 구현할 수 있습니다.
---
### npm(node package manager)
* npm은 모듈을 패키지로 만들어서 npm을 통하여 관리하고 배포합니다.
* 타인이 만들어 놓은 모듈을 npm을 이용하여 사용이 가능해집니다.
* 지역설치 : 프로젝트 루트 디렉토리에 node_modules 디렉토리가 생성되고 내부에 패키지가 설치됩니다.
    * 옵션을 별도로 지정하지 않으면 지역설치가 됩니다.
* 전역설치 : 모든 프로젝트가 공통 사용하는 패키지입니다.
    * -g 옵션을 선택하면 전역 설치가 됩니다.
#### package.json
* node.js 프로젝트에서는 많은 패키지를 사용하고 버전이 빈번하게 업데이트 됩니다. 이때 패키지를 일괄 관리하기 위하여 사용됩니다.
#### Semantic versioning
* npm install로 패키지를 설치할때 버전을 임의적으로 지정하여 설치할 수 있습니다.
---
### HTTP Server
* Node.js는 별도의 웹서버 설치할 필요가 없습니다.
1. http모듈을 로딩하면 http에 할당합니다.
2. 모듈 단위로 각 기능을 분할할 수 있습니다.
3. 모듈은 파일과 1대1 대응을 가집니다.
4. 모듈만의 독자적인 스코프를 가집니다.
5. 클라이언트 사이드 스크립트와 달리 전역변수의 중복 문제가 발생하지 않습니다.
6. createServer 메소드를 이용하면 http 서버 객체를 생성합니다.
7. 서버객체는 request이벤트가 발생하면 requset르 처리하여 response로 반환 합니다.
---
### Node.js 모듈
* Node.js는 CommonJS를 채택하였고 현재 독자적인 진화를 거쳐 100%동일하지 않습니다.
* Node.js 모듈 단위로 각 기능을 분할할 수 있습니다.
#### exports
* 모듈은 독립적인 파일 스코프를 갖습니다.
* 해당 모듈 내부에서만 참조가능합니다. 만약 모든 모듈 안에 선언한 항목을 외부에 공개하여 다른 모듈이 exports 객체를 사용해야 합니다.
* require 함수의 호출시 exports 객체에 추가한 프로퍼티와 메소드가 담긴 객체가 전달됩니다.
* module.exports
    * exports객체는 프로퍼티 또는 메소드를 여러개 정의할 수 있었지만 module.exports에는 하나의 값을 할당할 수 있습니다.
    * module.exports객체에 할당한 값이 전달됩니다.
---
### 비밀 설정 정보 관리
* 외부에 알려지면 안되는 정보는 세션키,데이터베이스 접속을 위한 정보가 있습니다.
* 코드내에 포함시켜야 하는 정보이기 때문에 여러 방법을 이용하여 사용됩니다.
#### 코드내 하드 코딩하기
```
var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'username',
    password : 'secret',
    database : 'db_name'
});

connection.connect();

connection.query('select * as solution',function(err,rows,fields){
    if(!err){
        console.log('the solution is',rows[0].solution);
    }
});
connetion.end();
```
* 실무에서 코드내에 설정 정보를 그대로 하드코딩해서는 안됩니다.
    * 설정 정보가 변경되면 코드를 수정해야 하며, 재배포도 이루어져야 합니다.
    * 관심사의 분리 원칙을 적용하여 설정 정보와 코드는 분리되어야 합니다.
    * github와 같은 SCM를 사용하는 경우 정보가 노출될 가능성이 있습니다.
#### 설정파일 사용하기
```
var mysql = require('mysql');
var db_config = require('./db-config.json');

var connetion = mysql.createConnection({
    host : db_config.host,
    user : db_config.user,
    password : db_config.password,
    database : db_config.database
});
```
```
{
    host : 'localhost',
    user : 'username',
    password : 'secret',
    database : 'db_name'
}
```
* 실행 코드에서 분리만 되었을뿐 SCM을 이용한 배포시 주의해야 합니다.
    * gitignore file에 설정파일을 추가하여 scm에 저장하지 않습니다.
    * db-config.json 파일의 샘플을 추가하여 사용방법을 제시합니다.
#### command-line에서 argument요구하기
```
var nopt = require('nopt');

var optsLong = { 
    "sessionSecret" : string
}
var optShorts ={
    "s" : ['--sessionSecret']
}

var parse = nopt(optLong,optShorts,process.argv,2)

console.log('parsed.sessionSecret)
```
* 비밀 정보를 보호하는 가장 좋은 방법은 설정파일에 저장하는 것입니다.
* nopt package를 사용하여 command-line에서 설정 정보를 인자값으로 요구하면 정보 파일은 존재하지 않아도 됩니다.
#### 환경변수 사용하기
* export SESSION_SECRET ='keyboard cat' 를 이용하여 간편하게 설정할 수 있습니다.