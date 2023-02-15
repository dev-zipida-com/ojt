# Git-Basic

<!-- TOC -->

- [Git-Basic](#git-basic)
  - [Git basic](#git-basic)
  - [Branch, Commit 관리](#branch-commit-%EA%B4%80%EB%A6%AC)
  - [Commit 되돌리기](#commit-%EB%90%98%EB%8F%8C%EB%A6%AC%EA%B8%B0)
  - [참고자료](#%EC%B0%B8%EA%B3%A0%EC%9E%90%EB%A3%8C)

<!-- /TOC -->

<br>

## Git basic

- git init : git 저장소로 등록하기
- git status : file 들의 tracking 상태 보기
- git log : commit 히스토리 보기
- git clone : 원격repository 를 로컬로 복사
- git add : 지정한 파일을 Staging Area 로 이동
- git commit : Staging 상태의 파일을 commit 하기
- git push : 원격 저장소에 commit 반영하기
- git pull : 원격 저장소에서 commit 가져오기
- git diff : stage 되지 않은 변경을 비교하기

<br>

## Branch, Commit 관리

- git remote : 현재 프로젝트에 등록된 원격 저장소 확인
- git branch [브랜치명] : 브랜치 생성하기
  - git branch -d [브랜치명] : 브랜치 삭제하기
  - git branch : 현재 브랜치 조회
  - git branch -a : 로컬 브랜치 목록보기
  - git branch -r : 원격 브랜치 목록보기
  - git branch -m [브랜치명] [변경할 브랜치명] : 브랜치 이름 바꾸기

<br>

- git fetch : 로컬 저장소에 있는 코드를 제외한 remote 저장소의 모든 파일을 가져온다.
  - git fetch --prune : remote 저장소에 지워진 브랜치를 local 반영하여 local의 불필요한 branch를 삭제한다.
- git merge : 지정한 Branch 를 현재 Checkout된 Branch에 병합한다.

<br>

- git stash : 현재 작업을 임시 저장한다.
  - git stash list : stashed 조회
  - git stash pop : stash 내역 working directory로 추가
  - git stash drop : stash file 제거

## Commit 되돌리기

- git reset : 로그를 지우고 커밋 취소
  - git reset --hard HEAD^ : commit 한 이전 코드 취소하기
  - git reset --soft HEAD^ : 코드는 유지하고 commit 만 취소하기
  - git reset --merge : merge 취소

<br>

- git revert : 로그를 유지하고 커밋 취소

## 참고자료

- https://git-scm.com/book/ko/v2
- https://www.atlassian.com/ko/git/tutorials/learn-git-with-bitbucket-cloud