-----

#### Git 스터디 및 실습
> Git이란 : 소스관리를 위한 분산 버전 관리 시스템
+ fork
  + 특정 repository를 수정 및 추가 기능을 넣고 싶을 때 해당 repository를 자신의 원격저장소에 그대로 복제하는 기능
  + fork한 저장소는 원본과 연결되어 있어서 새로운 commit이 생기면 그대로 repository에 반영 가능 (이 때 fetch나 rebase 과정 필요) 
  + git의 기능이 아니라 git의 기능을 추상화해서 제공하는 github의 기능 (따라서 git의 명령어 존재X)
+ clone
  + 특정 repository를 자신의 local에 복사하여 새로운 저장소를 만듦
  + clone한 원본 repository를 remote 저장소 origin으로 가지고 있으며 권한이 없는 경우 해당 저장소로 push 불가능
  ```
  git clone <repository 주소> 
  ``` 
+ branch, checkout
  + 독립적으로 어떤 작업을 진행하기 위한 개념
  + 각각의 브랜치는 다른 브랜치의 영향을 받지 않기 때문에 여러 작업을 동시에 진행 가능
  + 브랜치는 또 다른 브랜치와 병합(Merge)함으로써, 각각 작업한 내용을 합치기 가능
  ```
  git branch <이름>
  -> <이름> 브랜치 생성

  git checkout <이름>
  -> <이름>의 브랜치를 HEAD로 지정 ('*'표시로 확인가능)

  git checkout -b <이름>
  -> <이름> 브랜치 생성과 HEAD지정 동시에 실행
  ```

+ commit, push
  + commit은 작업한 모든 파일과 파일의 데이터를 사진 찍듯이 복사해서 저장소에 보관하는 개념
  + 보관해놓은 commit들을 연동해놓은 repository에 push를 통해 올리기
  + commit, push 과정
  ```
     1. git add .
       -> 변경한 모든 작업을 올린다
     2. git commit
       -> vi 이용해서 commit (한문장으로 정리하기힘든 commit 넣기 유용함)
     2-1. git commit -m "내용"
       -> 간단한 커밋내용을 추가하여 commit
     3. git push origin <브랜치이름>
       -> origin <브랜치이름>에 커밋되어 있는 내용들을 원격 repository에 올리기
  ```

+ pull request(PR)
  + 코드 충돌을 최소화 할 수 있고 push 권한이 없는 오픈 소스 프로젝트에 기여할 때 많이 사용
  + pull request 과정
  ```
     1. fork
       -> 타겟 프로젝트의 repository를 자신의 원격 repository에 fork
     2. clone, remote 설정
       -> fork한 repository를 clone
     3. branch 생성
       -> 자신의 로컬컴퓨터에서 코드 추가하는 작업은 branch를 따서 진행
     4. 수정, 작업 후 commit, push 진행
       -> 작업완료 후 자신의 원격 repository(origin)에 commit, push진행
     5. pull request 생성
       -> push 후 본인 원격 repository에 접속해 pull request진행
     6. merge pull request
       -> PR을 받은 원본 repository관리자가 내용 확인 후 merge여부 결정 
  ```

+ fetch, pull
  + fetch는 원격 저장소의 최신 이력 확인 후 최신 commit 이력을 가져오면서 나의 로컬 저장소는 로컬의 최신 commit을 가르킴
  + pull도 똑같이 원격 저장소의 최신 이력 확인 후 최신 commit 이력을 가져오지만 나의 로컬 저장소 또한 원격 저장소의 최신 commit을 가르킴

+ rebase, merge
  + master에 다른 branch를 병합할 때 쓰이는 merge, rebase 두 가지 방법이 존재
  + merge를 사용한 병합은 commit한 모든 게 master의 commit으로 기록됨
  + rebase를 사용한 병합은 merge commit을 남기지 않으므로 다른 브랜치는 없었던 것처럼 프로젝트의 작업 내용이 하나의 흐름으로 유지됨