### fetch API

장점
+ 사용이 쉽고 간단하다.
+ Promise 객체로 값을 Return 받음
+ Response 타입별로 쉽게 적용 가능(JSON, Blob 등)

```js
// Fetch API 코드 형태
fetch(url)
.then((response) => {
//Code 
}).catch((error) => {
    console.log("error");
});
```

통신에 성공할 경우 `then()`을 사용하여 콜백함수를 실행합니다.
통신에 실패할 경우 `catch()`를 사용하여 어떻게 처리할 것인지를 수행합니다.



