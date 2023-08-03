## GIT 용어 정리

### 1. Fork
> 브랜치 따듯이 레포를 따버리기

내가 작업할 프로젝트의 Repository를 내 Repository에 복제해오는 기능입니다.  
작업자는 원본 Repository를 건들지 않기 때문에 더 안전합니다.  
원본 Repository에 Merge 할 때는 반드시 Pull Request를 거쳐야만 합니다.

### 2. Clone
> 작업할 프로젝트 연결된 채로 받아오기

원격 서버에 있는 같이 일하는 팀 Repository를 내 컴퓨터에서 이어서 개발하기 위해 받아오는 기능입니다.  
포크 후 클론받는 순서로 생각하면 됩니다.

### 3. Branch
> 각각 개발 업무에 따라 영역 분리

프로젝트의 새로운 기능을 추가하거나 수정할 때 원본을 그대로 두고 따로 영역을 만들어서 개발 후 나중에 합칩니다.  
기능별, 요청별, 담당자별 등 Branch를 나누는 규칙은 여러가지가 있으며, 팀 내에서 규칙을 정하고 따르면 됩니다.

### 4. Checkout
> 작업 브랜치로 들어가기

여러 Branch 중에 선택해서 들어가는 기능입니다.  
내가 맡은 작업을 진행할 때는 반드시 해당 Branch로 들어가 있는지 확인해야 합니다.

### 5. Commit
> 내 컴퓨터에'만' 저장하기

내가 개발한 것을 로컬에 기록해두는 기능입니다.  
여러개의 Commit을 쌓아놓을 수 있기 때문에 자잘한 기능을 개발할 때마다 Commit을 남겨 히스토리를 정리하는 습관을 가져야 합니다.
### 6. Push
> 저장된 내역 올리기

지금까지 저장해놓은 Commit 기록들을 원격 Repository에 올리는 기능입니다.  
Commit을 굳이 쌓지 않고 그때그때 Push해도 괜찮기 때문에 보통 Commit > Push 사이클을 자주 사용합니다.

### 7. Pull Request
> 바로 반영은 위험! 검토 후 반영하기

작업 브랜치에서 메인 브랜치 쪽으로 작업본을 merge 하고자 할 때, 다른 개발자(사수 or 팀장)에게 승인을 요청합니다.  
다른 개발자들은 해당 Pull Request에 리뷰를 할 수도 있습니다.

### 8. fetch
> 내 Repository 최신화하기 

다른 컴퓨터에서 푸시한 히스토리가 있을 경우 내 컴퓨터에서 히스토리를 최신화하는 기능입니다.  
최신화만 했기 때문에 새로 추가된 Commit내역이 '존재'만 하고, 이 내역을 브랜치에 반영시키는 것은 아닙니다.
### 9. Pull
> 최신 Commit내역 가져오기

fetch를 통해 추가된 새 Commit내역을 내 브랜치 작업내역에 붙입니다.  
내가 작업하는 브랜치에서 pull 받을 내역이 있다면 반드시 받아서 최신 상태를 유지해줘야 코드가 날아가는 불상사를 방지할 수 있습니다.

### 12. Merge
> 완성된 기능 가져와 붙이기

대상 브랜치 내용을 현재 브랜치에 갖다 붙입니다.  
주로 하나의 기능을 구현하는 브랜치가 완료되었을 때 Pull Request를 통해 병합을 요청하고, 승인하여 붙입니다.
다른 브랜치에서 작업한 코드가 내가 작업한 코드와 겹칠 경우 충돌이 일어나며, 어떤 코드를 선택할지 고르고 정리하는 작업을 할 수도 있습니다.

### 11. Rebase
> 브랜치 내용 냅다 붙이고 사라지기

현재 브랜치를 대상 브랜치의 최신 Commit 위로 이동시키는 기능입니다.
merge와 비슷하지만 rebase는 내가 속한 브랜치가 제거되기 때문에 Commit 히스토리가 깔끔해지는 장점이 있습니다.
