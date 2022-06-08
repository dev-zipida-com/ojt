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