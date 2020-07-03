Github 이용 방법
================
### fork
* folk는 원본 파일에서 자신의 github에 복사하여 독립적인 공간을 제공해주는 작업입니다.
* folk를 한 후 원본 파일이 변경이 되어도 복사해오지 않으면 변화가 없습니다.
* 원격 저장소에 저장되어진 코드를 로컬 저장소에 이동할때 사용합니다.

### remote
* remote는 단축하여 긴 주소를 간편하게 한 줄로 처리하여 작업할 수 있게 해줍니다.
* git remote -v : remote 적용중인 목록을 출력시켜줍니다.
* git remote add [이명] [해당주소] : 해당주소를 이명으로 저장시켜줍니다.

### branch
* branch는 특정 commit에 대한 참조입니다.
* branch를 만들고 commit을 합니다.
* git branch 존재하는 branch 목록을 보여줍니다.
* git branch [브랜치명] : 브랜치명으로 브랜치를 생성합니다.

### checkout 
* HEAD를 해당 branch,commit으로 이동시켜줍니다.
* git checkout [브랜치명] : 해당 브랜치 명으로 이동시켜줍니다.

### commit
* git add [파일이름] 을 하면 해당 파일을 추적하여 업로드 commit을 할 수 있게 저장해줍니다.
* commit을 업로드할때 v + 영어로 제목을 설정한 후 -내용을 작성하여 내용을 작성해줍니다.
* 로컬 저장소에 작성되어진 파일을 깃허브에 복사하여 github에 복사하여 넣어줍니다.
* git commit : 작업한 브랜치를 해줍니다.

### push
* git push 를 로컬에 저장되어진 코드를 원격 저장소에 저장시켜줍니다.
* git push orign master : oring은 원격 저장소 이름 ,master은 현재 사용하는 컴퓨터 브랜치 명입니다.


### code review
* Pull request : commit 되어진 내용을 Pull request에 업로드 할 수 있습니다. 올려지면 내용을 이외의 사람이 보면 코드마다 코드 오류확인, 코드 리뷰 , 라벨링등을 이용하여 코드리뷰를 할 수 있습니다
* 리뷰 확인 한 후 view에 체크하여 리뷰유무를 확인할 수 있습니다.
* Pull request 이후에 문제가 문제가 확인되어질 경우 issue에 업로드를 할 수 있습니다. 태그를 하여 Pull request 목록에 있는 파일에 접근할 수 있습니다.
* requeset 를 완료한 후 3가지를 선택하여 할 수 있습니다 .merge squash rebase 3가지가 존재합니다.
    * merge : merge는 통합하여 하나로 생성해줍니다. 이 경우에는 history가 남아 있습니다.
    * squash : merge와 달리 통합하면 histroy없이 하나로 통합하여 제출됩니다.
    * rebase : rebase는 아래에 연결하여 해당 내용을 추가시켜 줍니다.
* Pull request는 원본에 추가 시켜주는 작업입니다. 해당 작업을 진행 해야지 원본에 적용되어 진행됩니다.
### fetch
* 원격 저장소에서 데이터를 가져오는 작업입니다.
* fetch를 하면 데이터를 가져와서 현재 코드와 합치지 않고 새로운 갈래로 생성이되어서 나누어집니다.
*  merge 혹은 rebase로 기존의 소스코드와 통합을 시켜주어야 합니다.
### rebase
* Rebase는 commit을 아래에 이동시켜주는 역활과 비슷합니다.
* Head는 자동으로 이동합니다.
* 리베이스의 장점은 한줄로 정렬이 되어 로그 볼때 흐름을 깔끔하게 정리해줍니다.
### merge
* 작업한 목록을 commit되어진 작업을 합쳐줍니다.
* merge는 통합되어집니다. merge를 하면 해당 브랜치는 남아있습니다.
* Head는 자동으로 이동되어집니다.
### pull
* merge와 fetch를 동시에 진행합니다.