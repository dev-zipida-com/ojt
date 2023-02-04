Babel Introduction 
===

## Babel과 Webpack
* babel은 크로스 브라우징 이슈(Cross Browsing: 서로 다른 버전의 JS를 지원하는 여러 모던 브라우저 사이의 호환 이슈)에 대응하고자 제안된 트랜스파일러(Transfiler: kinda compiler like Typescript, ...)입니다.
* webpack은 babel과 같이 사용될 수 있는 번들러(bundler: 메인 파일과 연결된 여러 모듈을 정해진 규칙에 따라 모아 하나의 js file로 만드는 작업을 수행)입니다. 
* babel과 webpack을 사용하는 샘플입니다.

```javascript
// 1. install babel
// babel-loader는 webpack & babel을 같이 사용하는데 필요합니다.
$ npm install -- save-dev @babel/core @babel/preset-env @babel/cli webpack webpack-cli babel-loader

// 2. Create a configuration file
// .babelrc 파일을 root directory에 설치하고, 필요한 플러그인과 프리셋을 설치합니다. 
// .babelrc file sample
{
  "presets": [
    "@babel/preset-env"
  ]
  "plugins": [
    // 필요한 플러그인을 로드합니다.
  ]
}

// 3. src directory 내부 index.js에 필요한 코드를 작성합니다.
// ./src/index.js
const sum = (a, b) => a + b;
console.log(sum(1, 2));

// 4. 루트 디렉토리에 webpack.config.js 파일을 만들고 코드를 작성합니다.
// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader' 
        }
      }
    ]
  }
};

// 5. webpack을 컴파일합니다.
$ npx webpack

// 6. index.html 파일을 dist 디렉토리에 생성하고, 코드를 작성합니다.
// ./dist/index.html

<!DOCTYPE html>
<html>
  <head>
    <title>Babel and Webpack Example</title>
  </head>
  <body>
    <script src="main.js"></script>
  </body>
</html>
```
