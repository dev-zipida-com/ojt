김민준 멘토님 git 설정 관련 메모

1. Dev-zipida 원격 <프로젝트> Fork
2. Clone
3. Git remote add upstream url.. (1. git remote -v , 2. git remote add upstream https://github.com/dev-zipida-com/ojt.git 등…)
    1. Git remote -v (remote 확인 명령어)
    2. Origin : add, commit, push, pull
    3. Upstream : Only pull, fetch (원본 직접 변경 XXX)
4. git checkout -b <branch name>git branch -agit log --oneline --graph
5. 작업이 끝나면 origin으로 push하고 준영님 원격 레포지토리에서 PR요청	•	자신이 사용하는 코드 편집 툴을 활용하여 수정 작업을 진행한다.
        * 작업이 완료되면, add, commit, push를 통해서 자신의 github repository (origin)에 수정사항을 반영한다.
        * 주의사항 push 진행시에 branch 이름을 명시해주어야 한다.
			# develop 브랜치의 수정 내역을 origin 으로 푸시한다.
			$ git push origin develop
        * push 완료 후 본인 계정의 github 저장소에 들어오면 Compare & pull reqeust 버튼이 활성화 되어 있다.
        * 해당 버튼을 선택하여 메시지를 작성하고 PR을 생성한다.
        * PR을 받은 원본 저장소 관리자는 코드 변경내역을 확인하고 Merge 여부를 결정한다.
        * 원본 저장소에 Merge가 완료되면 로컬 코드와 원본 저장소의 코드를 동기화 한다.
        * 작업하던 로컬의 branch를 삭제한다.
			# 코드 동기화
			$ git pull real-blog(remote 별명)
			# 브랜치 삭제
			$ git branch -d develop(브랜치 별명)

# Sample: commit form
Add Markdown file

- Html, javascript
