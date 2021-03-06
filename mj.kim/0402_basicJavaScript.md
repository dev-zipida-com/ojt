#### 기초 javascript 학습

+ Mark Down이란
  + 일반 텍스트 기반의 경량 마크업 언어
  + 마크업 언어란
  > 태그 등을 이용하여 문서나 데이터의 구조를 명기하는 언어의 한 가지
  + 일반 마크업 언어에 비해 문법이 쉽고 간단한 것이 특징
  + 가장 대표적인 예로 페이스북 태그기능 
  > ex) @이름 과 같이 @가 붙은 문자열을 자동으로 태그로 인식하는 마크다운 언어


+ package.json
  + 프로젝트의 정보를 정의하고, 의존하는 패키지 버전 정보를 명시하는 파일
  + 일반적으로 루트 디렉토리에 위치
  + 사용하는 확장 모듈에 대한 의존성 관리가 가능하기 때문에 편리


+ RDB, NoSQL 비교
  + RDB
  ```
    - 관계형 데이터 모델에 기초를 둔 DB
    - 관계형 데이터 모델이란 데이터를 구성하는데 필요한 방법 중 하나로 모든 데이터를 2차원 테	이블 형태로 표현
    - 이런 RDB를 CRUD(Create, Read, Update, Delete) 관리할 수 있는 소프트웨어를 RDBMS라고 한다.
  ```
  + NoSQL
  ```
    - RDB와 반대되는 방식을 사용하여 데이터간의 관계를 정의하지 않음
    - RDBMS에서는 스키마에 맞추어서 데이터를 관리해야 하지만 NOSQL은 스키마가 없어서 조금 더 자유롭게 데이터 관리 가능
    - RDBMS의 복잡도와 용량 한계를 극복하기 위한 목적으로 등장해 RDBMS에 비해 훨씬 대용량의 데이터 저장 가능
  ```
  + RDBMS는 반드시 스키마의 규격에 맞춰야하고 유연한 데이터 저장이 안되지만 NoSQL은 스키마가 없다보니 유연한 데이터 저장은 가능하나 데이터에 대한 규격화된 결과 값을 얻기 힘듦


+ javascript prototype
  + JS를 프로토타입 기반 객체 지향 언어라고 표현
  ```
    - 클래스 기반 객체지향 언어는 객체 생성 이전에 클래스를 정의하고 이를 통해 객체를 생성
    - 프로토타입 기반 객체지향 언어는 클래스 없이도 객체 생성 가능
  ```
  + JS모든 객체는 자신의 부모 역할을 담당하는 객체와 연결되어 있으며 이것은 마치 객체 지향의 상속개념과 같이 부모 객체의 프로퍼티 or 메소드를 상속받아 사용할 수 있게 함