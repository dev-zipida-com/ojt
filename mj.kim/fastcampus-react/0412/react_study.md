###API 연동 기초

- react에서 보통 리덕스 라이브러리와 리덕스 미들웨어 기능을 사용해 구현하는 경우가 많음
- 하지만 리덕스가 필수적으로 필요한 경우는 아님

<br>

##### Axios

- REST API를 요청할 때 프로미스 기반으로 처리할 수 있게해주는 라이브러리
  > ex 1)
  > import axios from 'axios';
  > axios.get('/users/1');
  > ex 2)
  > axios.post('/users', {
      username: 'blabla',
      name: 'blabla'
  });
- REST API

```
 - 클라이언트와 서버가 소통하는 방식
  - GET : 데이터 조회
  - POST : 데이터 등록
  - PUT : 데이터 수정
  - DELETE : 데이터 제거
```

<br>
##### react-async 라이브러리
- 장점
```
1. 필요할 때 설치하고 바로 사용 가능해서 편함
2. 컴포넌트에서 비동기 작업할 때 필요한 기능들도 대부분 탑재
3. 훅 말고도 컴포넌트 형태로도 사용 가능
```
- 단점
```
1. 옵션이 다양해서 조금 복잡함
```
