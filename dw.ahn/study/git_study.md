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

## git add

```

src/ 폴더 내의 모든 파일을 스테이징 하고 싶다면 다음과 같이 입력합니다.


    git add src/*




특정 폴더 내의 모든 파일을 스테이징 하고 싶다면 다음과 같이 입력합니다.


    git add 폴더경로/*


```

## git solution

frequently occur in the git working environment and how to solve them.

Git is a highly reliable tool in most cases, but sometimes unexpected issues can occur in Git working environments. Resolving these issues can be complex, and this is why practical Git experience is important. Here are some common problems that occur in Git working environments and how to solve them.

1. Conflict between the remote and local repositories (원격 저장소와 로컬 저장소 간 충돌)

- Solution:

  - When a conflict occurs, use the git status command to find the files in conflict.
  - Resolve conflicts manually or use a merge tool to resolve them.
  - After resolving the conflicts, use the git add command to add the changes to the staging area.
  - Commit the changes to the local repository.
  - To maintain synchronization between the remote and local repositories after resolving conflicts, use the git pull command to fetch the changes from the remote repository, and use the git push command to push the changes to the remote repository.

2. Committing to the wrong branch (잘못된 브랜치에 커밋)

- Solution:

  - If you have committed to the wrong branch, switch to the correct branch using the git checkout command.
  - To undo the commit on the wrong branch, use the git reset command to undo the last commit on that branch.
  - Go back to the correct branch and use the git cherry-pick command to bring in the desired commit.
  - Commit the changes to the correct branch and synchronize the changes between the remote and local repositories.

3. Reusing a deleted file (삭제한 파일을 재사용하려고 할 때)

- Solution:

  - To restore a deleted file, use the git checkout command to retrieve the file from the commit where it was deleted.
  - After restoring the file, add the changes to the staging area.
  - Commit the changes to the local repository, and then synchronize the changes with the remote repository using the git push command.

## git difficult situation and solution

Git is a powerful version control system used by many software development teams to manage changes to their codebase. While Git is a very useful tool, it can also present challenges when things go wrong. Here are some common Git situations and their solutions:

1. Accidentally committed sensitive information: If you accidentally commit sensitive information, such as passwords or API keys, you can remove the commit using the following command:

```
git reset HEAD~1

```

This will remove the last commit from the Git history. You can then remove the sensitive information from the code and make a new commit.

2. Merge conflicts: Merge conflicts occur when Git is unable to automatically merge changes from two different branches. To resolve a merge conflict, you can use a merge tool to manually merge the changes. Popular merge tools include Git's built-in merge tool and third-party tools like Beyond Compare and KDiff3.

3. Branching issues: Sometimes, Git can have issues with branching, such as accidentally deleting a branch or creating a branch with the wrong name. To fix these issues, you can use Git commands like git branch -d to delete a branch or git branch -m to rename a branch.

4. Repository corruption: In rare cases, a Git repository can become corrupted. If this happens, you can try to repair the repository using the following command:

```
git fsck --full

```

This command will check the repository for any errors and attempt to fix them.

5. Reverting changes: If you need to revert changes to a previous version of your code, you can use the git revert command. This command will create a new commit that undoes the changes introduced by a previous commit.
