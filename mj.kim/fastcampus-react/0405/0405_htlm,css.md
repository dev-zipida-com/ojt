### HTML
+ <b>HTML - block, inline 요소</b>

1. block
  ```
    - div, h1, p ...
    - 사용 가능한 최대 가로 너비 사용
    - 크기를 지정 가능
    - width: 100%, height: 0%로 시작
    - 수직으로 쌓임
    - margin, padding 위, 아래, 좌, 우 사용 가능 
  ```
2. inline
  ```
    - span, img
    - 필요한 만큼의 너비 사용
    - 크기 지정 x
    - width: 0%, height: 0%로 시작
    - 수평으로 쌓임
    - margin, padding 위, 아래는 사용할 수 없다
  ```
<br>

+ <b>script</b>
  + src : 참조할 외부 스크립트 url  (포함된 스크립트 코드는 무시됨)
  ```
    <script src="./app.js">
        console.log("Hello World!"); // 해당 코드는 무시됨
    </script>
  ```
  + type : MIME타입 기본값 'text-javascript'
<br>

+ <b>label</b>
  + 라벨 가능 요소(labelable)의 제목
  + for속성으로 라벨 가능 요소를 참조하거나 콘텐츠로 포함
  + 라벨 가능 요소 : \<button>, \<input>, \<progress>, \<select>, \<textarea>
<br>

+ <b>대화형 콘텐츠</b>
  + 사용자와의 상호작용을 위해 특별하게 설계된 요소를 포함
  + \<a>, \<button>, \<details>, \<embed>, \<iframe>, \<keygan>, \<label>, \<select>, \<textarea>
  + 특정 조건이 충족된 경우에만 이 카테고리에 속하는 몇가지 요소
  ```
    - <audio>, controls 속성을 가진 경우
    - <img>, usemap 속성을 가진 경우
    - <input>, type 속성이 hidden이 아닌 경우
    - <menu>, type 속성이 toolbar에 속한경우
    - <object>, usemap 속성을 가진경우
    - <video>, controls 속성을 가진경우
  ``` 

-----

### CSS


+ <b>상속되는 속성들(properties)</b>
  > 글자를 다루는 기본적인 속성들
  + font
  ```
    > font-size
    > font-weight
    > font-style
    > line-height
    > font-famil
  ```
  + color
  + text-align
  + text-indent
  + text-decoration
  + letter-spacing
  + opacity 등등
<br>

+ <b>강제 상속</b>
  + 상속되지 않는 속성(값)도 inherit 이라는 값을 사용하여 '부모'에서 '자식'으로 강제 상속시킬 수 있음.
  + '자식'을 제외한 '후손'에게는 적용되지 않으며, 모든 속성이 강제 상속을 사용할 수있는건 아님

<br>

+ <b>우선순위 결정</b>
  + 같은 요소가 여러 선언의 대상이 될 경우, 어떤 선언의 CSS속성을 우선 적용할지 결정하는 방법
    ```
    1. 명시도 점수가 높은 선언이 우선 (명시도)
    2. 점수가 같은 경우, 가장 마지막에 해석(늦게 작성한)되는 선언이 우선(선언 순서)
    3. 명시도는 '상속' 규칙보다 우선(중요도)
    4. '!important' 가 적용된 선언 방식이 다른 모든 방식보다 우선(중요도)
        ex) color: red !important; /* 가장 우선 */
    ```
<br>

+ <b>마진 중복(병합, Collapse)</b>
  + 마진의 특정 값들이 '중복'되어 합쳐지는 현상
  ```
    1. 형제 요소들의 margin-top과 margin-bottom이 만났을 때
    2. 부모 요소의 margin-top과 자식 요소의 margin-top이 만났을 때
    3. 부모 요소의 margin-bottom과 자식 요소의 margin-bottom이 만났을 때
  ```
  - 마진 중복은 버그(오류)가 아님. 현상 우회 및 응용 가능

<br>

+ float 해제
  + float속성이 적용된 요소의 주위로 다른 요소들이 흐르게 되는데 이를 방지하기 위해 속성을 '해제'해야 함
  ```
    1. 형제요소에 clear: (left, right, both) 추가하여 해제
    2. 부모요소에 overflow: (hidden, auto) 추가하여 해제
    3. (추천!) 부모요소에 clearfix클래스 추가하여 해제
  ```
<br>

+ position
  + 요소의 위치 지정 방법을 유형(기준)을 설정
  + 속성 값
  <table>
    <tr>
        <th>값</th>
        <th>의미</th>
        <th>기본값</th>
    </tr>
    <tr>
        <td>static</td>
        <td>유형(기준)없음 / 배치 불가능</td>
        <td>static</td>
    </tr>
    <tr>
        <td>relative</td>
        <td>요소 자신을 기준으로 배치</td>
        <td></td>
    </tr>
    <tr>
        <td>absolute</td>
        <td>위치 상 부모 요소를 기준으로 배치</td>
        <td></td>
    </tr>
    <tr>
        <td>fixed</td>
        <td>브라우저(뷰포트)를 기준으로 배치</td>
        <td></td>
    </tr>
    <tr>
        <td>sticky</td>
        <td>스크롤 영역 기준으로 배치</td>
        <td></td>
    </tr>
  </table>

<br>

+ transition
  + CSS속성의 시작과 끝을 지정(전환 효과)하여 중간 값을 애니메이션
  + 속성 값
  <table>
    <tr>
        <th>값</th>
        <th>의미</th>
        <th>기본값</th>
    </tr>
    <tr>
        <td>transition-property</td>
        <td>전환 효과를 사용할 속성 이름</td>
        <td>all</td>
    </tr>
    <tr>
        <td>transition-duration</td>
        <td>전환 효과의 지속시간 설정</td>
        <td>0s</td>
    </tr>
    <tr>
        <td>transition-timing-function</td>
        <td>타이밍 함수 지정</td>
        <td>ease</td>
    </tr>
    <tr>
        <td>transition-delay</td>
        <td>전환 효과의 대기시간 설정</td>
        <td>0s</td>
    </tr>
  </table>
    