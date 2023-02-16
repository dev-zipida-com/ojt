

# Git

gloga



git pull upstream master



- commit
    - 컴맨트 작성할때
        - modify
        - fix        
        - add

```

branch


git branch bugFix
git checkout bugFix



----

merge

git branch bugFix
git checkout bugFix
git commit
git checkout main
git commit
git merge bugFix




----


rebase




git rebase bugFix


----

git branch bugFix
git checkout bugFix
git commit
git checkout main
git commit
git checkout bugFix
git rebase main

// head가 main  보다 앞에 감


----

HEAD

HEAD는 현재 체크아웃된 커밋 -- 다시 말하자면 현재 작업중인 커밋입니다.

HEAD는 항상 작업트리의 가장 최근 커밋을 가리킵니다. 
작업트리에 변화를 주는 git 명령어들은 대부분 HEAD를 변경하는것으로 시작합니다.

일반적으로 HEAD는 브랜치의 이름을 가리키고있습니다(bugFix와 같이). 
커밋을 하게 되면, bugFix의 상태가 바뀌고 이 변경은 HEAD를 통해서 확인이 가능합니다.



git checkout HEAD~4


(강제로) main 브랜치를 HEAD에서 세번 뒤로 옮긴다
git branch -f main HEAD~3



git branch -f bugFix HEAD~3
git branch -f main HEAD^1
git branch -f main HEAD


!
head, branch 잘확인해서 진행 필요


----

reset


git reset은 마치 애초에 커밋하지 않은 것처럼 예전 커밋으로 브랜치를 옮기는 것입니다.



git reset HEAD~1

----

revert

변경분을 되돌리고, 이 되돌린 내용을 다른 사람들과 공유하기 위함


git revert HEAD


----

git cherry-pick


현재 위치(HEAD) 아래에 있는 일련의 커밋들에대한 복사본을 만들겠다는 것을 간단히 줄인 말입니다. 개인적으로 저는 cherry-pick을 아주 좋아합니다 왜냐하면 조금의 마법이 첨가되있고 이해하기 쉽기 때문입니다.




git cherry-pick C2 C4

우리는 C2와 C4 커밋을 원했고 git이 우리가 원하는 곳 바로 밑에 톡 떨어뜨려 줬습니다. 아주 간단하죠!



```

