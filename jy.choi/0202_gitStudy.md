Github 사용법 정리
===============

# Github Synchronization Sequences

### 1. Fork
* Fork는 **다른** Github Repository에서 어떤 부분을 수정하기 위하여 해당 Repository를 **나의** Github Repository로 그대로 **복제**하는 기능입니다.
* 내가 Forking한 Original Repository에 나의 변경 사항을 적용하고 싶다면, 해당 저장소에 pull request를 요청해야 합니다. 
* pull request가 original repository의 관리자로 부터 승인되는 경우, 나의 변경 사항이 commit, merge되어 Original Repository에 반영됩니다. pull request 요청이 승인되기 전까지는, 내 github에 있는 forked repository에만 내 변경 사항이 적용됩니다.

### 2. Clone
* Clone은 외부 Repository의 **local copy를 내 컴퓨터에 만드는 기능**입니다.
* 이 local copy를 통해, Github의 외부 Repository에 Push하기 전 지역적으로 코드를 수정하거나 수정된 것을 tracking할 수 있습니다.
  - eg.) 미리 정한 local 위치에서 $ git clone (url.git)

### 3. Set Remote configuration
* Cloning이 수행된 뒤에, **local 저장소에 remote 저장소 경로를 추가**해야합니다. 이를 통해 내 변경 사항을 외부 Repository를 향해 Pull request 할 수 있습니다.
  - eg.) $ git remote add real-blog(별명) https://github.com/원본계정/blog.github.io.git
  - eg2.) $ git remote -v 

### 4. Create a new Branch and Checkout
* Github Repository는 기본적으로 여러 개의 Commits로 이루어져 있습니다. 각 Commit은 원본 코드 데이터의 특정 시점에서의 변경 사항(kinda snapshots)을 저장하고 있습니다(때문에 가벼워요).
* Branch는 여러 개발자가 하나의 repository에서 동시에 작업할 수 있도록, 다른 개발자의 코드 변경 사항을 침범하지 않고도 내 코드를 반영할 수 있도록 합니다.
* Branch가 Commit될 때, 그 Branch의 타임라인에서의 변경사항은 저장되며, 이것은 **Main 브랜치 혹은 다른 브랜치들을 변경시키지 않습니다**.
  - eg.) git checkout -b develop(브랜치 이름)
  - eg2.) git branch -a 또는 git log --oneline --graph

### 5. Add / Commit / and Push
* 코드를 수정한 뒤, 작업이 완료되면 수정사항을 나의 Origin Repository에 반영해야 합니다. 
* Add는 현재까지 작업중이던 파일들을 모두 추가해 깃허브에 올리기 위한 staging area에 올립니다. staging area는 Commit하기 전, Working directory 전부가 아닌 기존의 코드에서 **변경된 부분**만을 저장합니다. 이를 통해 Atomic한 Commit이 가능해지며, Commit --amend시에도 유용하게 사용되는 공간입니다.
  - eg.) git add . / git commit (-m "new message") / git push origin develop(브랜치 별명)

### 6. Create a Pull request / Code review & Merge(or Reject)
* 나의 코드 수정 내역을 내가 Fork해 온 원본 저장소에 update하기 위하여, Pull request를 요청할 수 있습니다(Create pull request). 원본 저장소의 owner는 내 변경 사항을 review하고, contributers와 discuss할 수 있고, 최종적으로 요청을 수락(Accept)하거나 거부(Reject)할 수 있습니다. 

### 8. Delete a old Branch 
* 원본 저장소에 Merge가 완료되면, 로컬 코드와 원본 저장소의 코드는 동기화합니다. 이후 작업하던 local branch을 완료합니다.
  - eg.) git pull real-blog(remote 별명) / git branch -d develop(브랜치 별명)

### 추가. Reset / Revert / Amend
* git reset --hard를 사용하면 현재 작업 위치인 **HEAD의 포인터를 특정 위치로 변경**해버릴 수 있습니다. 
```
eg.) $ git log --oneline
12741e5 (HEAD -> main) Add ThisIsaFile
d678197 Add .gitignore
97f1e31 Readme.md

$ git reset --hard d678197
```
* git reset은 HEAD 위치를 바꿔버려서, 로컬 저장소의 상태를 커밋 이전 상태로 강제 변경해버립니다. 
* 하지만 커밋을 협업중인 원격 저장소에 push해버린 경우, 로컬 저장소에서 커밋을 취소해버리면 원격 저장소와 상태가 틀어져버립니다. 특히 원격 저장소에서 force push를 금지하는 경우, 로컬 저장소의 변경사항을 push할 수 없게 되어버립니다. 
* 이런 경우에는 git revert로 **특정 커밋의 내용을 되돌리는 커밋을 새로 만듭니다**.
```
$ git log --oneline
12741e5 (HEAD -> main) Add ThisIsaFile
d678197 Add .gitignore
97f1e31 Readme.md

git revert 12741e5
```
* 커밋의 내용을 덮어쓸 때는 git commit의 amend 옵션을 사용합니다. 수정할 내용을 스테이징에 반영하고 다음 명령어를 실행해줍니다.
```
$ git commit --amend
```
----------------------------------------------------------------------------------------------------