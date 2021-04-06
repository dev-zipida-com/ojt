### CSS

+ Flex
  + 수평, 수직 정렬에 관련된 속성
  + Container, items라는 개념으로 나뉨
    > Container : item을 감싸는 부모 요소이며, item을 정렬하기 위해선 Container가 필수
  + display(flex, inline-flex) : Container자체가 인라인으로 쓰일것인지, 블록으로 쓰일것인지를 정의


### JS

+ Promise
  + 비동기적으로 실행하는 작업의 결과를 나타내는 객체
  + 비동기의 결과를 객체화 시킨다는 것이 가장 큰 장점
  + 오브젝트 안에 오브젝트를 포함하는 js 오브젝트의 특별한 형태
  + promise 접근 방법 : .then() 사용
  ```
    fuinction getFirstUser(){
        return getUsers().then(function(users)) {
            return users[0].name;
        }
    }
  ```
  + promise 체인에서 error처리 : .catch() 사용
  ```
    function getFirstUser() {
        return getUsers().then(function(users) {
            return users[0].name;
        }).catch(function(err) {
            return {
                name: 'default user'
            };
        });
    }
  ```

+ async function
  + AsyncFunction객체를 반환하는 하나의 비동기 함수를 정의
  + 비동기 함수는 이벤트 루프를 통해 비동기적으로 작동하는 함수
  + 암시적으로 promise를 사용하여 결과를 반환
  + async로 변경한 위 promise 코드
  ```
  async function getFirstUser() {
    let users = await getUsers();
    return users[0].name;
  }

  - error 처리 : try, catch 사용
  async function getFirstUser() {
    try {
        let users = await getUsers();
        return users[0].name;
    } catch (err) {
        return {
            name: 'default user'
        };
    }
  }
  ```