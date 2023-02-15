

# Git


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











```