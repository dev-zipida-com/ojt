## Git Study
- clone <br>
원격에 있는 저장소를 복제해서 로컬 저장소에 가져온다.

~~~bash
    git clone <원격저장소 url>
~~~

- add <br>
변경된 파일을 인덱스에 추가!
    - 인덱스 : 작업을 하고 확정할 준비영역 ? 정도로 이해합니다

 ~~~bash
 git add <파일 이름>
 git add *      //모든 파일 인덱스로!
 ~~~

- commit <br>
실제 변경 내용을 확정하는 명렁 

~~~bash
git commit -m "확정본에 대한 설명"
~~~

- push <br>
변경 내용을 원격저장소에 발행!

~~~bash 
git push origin <branch name>
~~~

- branch & checkout <br>
가지치기! 즉 격리된 상태에서 무언가를 만들떄 사용!
원본이 고장나는 일을 방지하게 다른 곳에서 만들고 후에 완성되면 원본에 합치고 하자! 할떄 중요스~

~~~bash
git checkout -b <branch name>       //가지를 만들고 그 가지로 갑시다! ( -b 옵션 )
git checkout <branch name>          //만들어져 있는 가지로 갑시다!
git branch <branch name>            //이름의 브런치를 만든다
git branch -d <branch name>         //브런치 삭제! ( -d 옵션 )
git push origin <branch name>       //위에만 하면 로컬에만 생성됨 그래서 원격에도 브런치를 전송!
~~~

- merge <br>
병합! 원격 조장소에 맞춰 갱신하려면 
~~~bash
git pull <branch name>      //브런치 이름이 없다면 같은 이름의 원격 브런치를 병합하는듯?
~~~

위 명령어는 fetch 와 merge를 같이 사용한거 같은 효과라고 합니다.

아주 간략하게는 각각의 브런치를 합치는 작업을 한다.

부모가 같다? 면 그대로 최신?  병합되게 되고 다르나면 병합되는 작업을 한 커밋을 하번더 만들어서 병합시키게 된다?.

** 다른 방법?
- rebase <br>
역시 글보단 그림이 짱이다. 멍청한 나도 어느정도 이해 가능한 수준으로 이끌어준다.

아래와 같은 커밋이력과 브런치가 있다고 한다면
<img src="https://git-scm.com/book/en/v2/images/basic-rebase-1.png">


merge를 수행한다 하면 아래와 같이 새로운 커밋을 만들어 병합하게 된다.
<img src="https://git-scm.com/book/en/v2/images/basic-rebase-2.png">


rebase의 경우 master의 커밋이 이전 커밋이라고 가리키기 되면서 부모?로 만든다
<img src="https://git-scm.com/book/en/v2/images/basic-rebase-3.png">

그리고 merge 하면 마치 하나의 브런치로 쭉쭉 나온듯한 모양이 된다.
<img src="https://git-scm.com/book/en/v2/images/basic-rebase-4.png">

이미지 출처 - https://git-scm.com/book/ko/v2/Git-%EB%B8%8C%EB%9E%9C%EC%B9%98-Rebase-%ED%95%98%EA%B8%B0

응용 및 활용 하는 부분관 위험성도 위 출처 링크에 설명을 해주고 있다.



- fork <br>
포크로 찍어와!.... 다른 저장소에 있는걸 내 저장소로 가져오는것! github에 내계정에 저장소에 가져와진다. (로컬 저장소에 있는거랑 다르지암..)

이건 github 홈페이지에서 뚝딱...

변경 작업후 원본에 기여하고 싶다면 Pull Request! 해보자
