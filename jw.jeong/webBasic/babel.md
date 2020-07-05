Babel
===
babel
---
### babel
* 바벨은 크로스브라우징 이슈를 해결하기 위하여 사용됩니다.
* babel은 최신 사양의 스크립트 코드를 떠나 IE나 구형브라우저에서도 동작하는 ES5이하의 코드로 변환할 수 있습니다.
* typescript,coffescript등 javascript로 컴파일 할 수있게 지원해줍니다.
#### Babel환경구축
* npm을 이용하여 bebel cli를 설치해야 합니다.
```
npm install --save-dev @babel/core @babel/cli
```
* 설치 완료후 pakcage.json파일에 'es6-project'라는 이름을 가진 객체가 생성됩니다.
#### .babelrc설정 파일 작성
* @babel/preset-evn를 설치해야합니다. babel플러그인을 모아둔것으로 babel프리셋이라고 부릅니다.
```
npm install --save-dev @babel/preset-env
```
* 설치 완료후 package.json내부 'es-project
이름을 가진 객체 devDependecies내부객체 안에 @babel/preset-env가 추가되어있습니다.
#### 트랜스파일링
* 일정 추상화 수준을 유지한 상태로 코드를 변환합니다.
* package.json 파일에 scripts를 추가합니다.
```
{
  "scripts": {
    "build": "babel src/js -w -d dist/js" 
    //-w 모든 파일들의 변경을 감지하여 자동으로 트랜스파일합니다.
    //-d 트랜스 파일링이 된 결과물이 저장될 폴더를 지정합니다.
  }
}
```
npm script는 src폴더 내부의 js에 있는 ES6+파일들을 트랜스 파일링 한 후 dis/js폴더에 저장합니다.

#### babel-polyfill
* polyfill이란 개발자가 기능이 지원되지 않는 브라우저를 위해 사용하는 코드조각이나 플러그인을 의미합니다.
* babel은 이러한 polyfill을 손쉽게 지원하기 위해 babel-polyfill을 사용하게 되었습니다.
* babel만으로는 최신 함수를 사용할 수 있는것은 아닙니다. 문법을 변환하여 javascript로 변환하는 역활만 하기 때문입니다.
* babel은 컴파일시에 실행이되고, polyfill은 런타임때 실행이됩니다.
* 사용법으로는 3가지 방법이 있습니다.
    * core-js에서 폴리필 가져오기
        * core-js모듈에서 필요한 폴리필만 가져오는 방법입니다.
        * 코드 최상단에 import문만 적어주면 해결할 수 있습니다.
        * 코드 크기가 작지만 폴리필을 모두 작성해야하기 때문에 개발자가 놓칠경우가 있습니다.
    * babel/preset-env 프리셋 이용하기.
        * 지원할 브라우저 정보와 일부 옵션을 지정하면 자동으로 필요한 기능을 주입해줍니다.
        ```
        //1. npm을 이용해 프리셋을 설치합니다
        npm i @babel/preset-env

        //2. 폴리필 테스트를 위한 적당한 코드를 작성합니다.
        const p = Promise.resolve(10)
        const obj={
            a : 5,
            b : 10,
            c : 20
        }
        const arr = Object.values(obj)
        const exist = arr.includes(20);
        
        //3. .babelrc설정 파일을 작성합니다.
        {
            "presets":[
                ["@babel/preset-env",{
                    "targets":">=0.25%,not dead"//시장 점유율이 0.25이상,업데이트가 종료되지 않은 브라우저
                }]
            ]
        }
        ```
        preset속성에 babel/preset-evn를 작성하고 두번째 요소에 옵션을 적었습니다. targets는 대상 브라우저의 버전을 작성합니다.
    

      
__참조: https://babeljs.io/docs/en/babel-polyfill/__
