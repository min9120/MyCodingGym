# Hash

key-value 형태로 데이터를 다루는 자료구조

- Hash Function : 데이터를 효율적으로 관리하기 위해서 임의의 길이의 데이터를 고정된 길이의 데이터로 mapping 하는 함수.
  - 동일한 input에 대해서 동일한 output을 가짐.
  - 입력 값을 조금만 바꿔도 출력 값이 크게 바뀜
  - 단방향이다. ( 입력 값 ->해시함수 -> 출력 값)
- Key : mapping 전 본래 데이터 값
- value & hash code : mapping 후의 데이터 값
- hashing : key와 value로 mapping 되는 과정 자체

### Hash Table

key와 value 가 하나의 쌍을 이루는 데이터 구조
key와 배열의 index를 이용하여 저장하는 자료구조이다.
= map, dictionary ...
value가 곧 index가 되는 것임
hashing 과정에서 key에 따라 모두 다른 hash code 가 나오는 것이 기본
<br/>

<img src = "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FceKgGz%2FbtqAUvLYrPN%2FDMVl0lwN8tA2hobFxqHcf0%2Fimg.png" width = "500px">
<br/>

원래 데이터 값( key ) -> Hash Function -> Hash code -> Hash code를 배열의 index로 사용 -> 해당하는 index에 데이터 삽입

hash로 암호화 한 데이터는 **복호화가 불가능**하다 (단방향)
빠른 데이터 검색에 집중되어 있기 때문에 hash function이 가벼워야 함.

### Collision

예를 들어 key가 정수일 경우 hash function 이 key%10을 return하게 된다면 1, 11, 21이 key로 주어졌을 때 같은 index 값을 가지게 된다. 이런 현상을 충돌이라고 한다.

- **Separating Chining -Linked List, Tree(Red-Black Tree)**
  Linked List 뿐만 아니라 Tree를 사용하기도 한다. 두 개를 사용하는 기준은 data가 6개 이하면 linked list, 8개 이상이면 tree를 사용한다.
  ( 7개일 때 데이터를 삭제하면 linked list, 추가하면 tree로 바꿔야한다. 이때 바꿀 때 오버헤드가 있기 때문에 기준이 6과 8이다. )
  \*overhead : 어떤 처리를 하기 위해 들어가는 간접적인 처리 시간/메모리 등을 말한다.<br/>
  
  <img src = "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdzUUKL%2FbtqAU5TNqPb%2F57l6XNBJBLFlL1xcXCePq1%2Fimg.png" width = "500px"><br/>
  
  index가 가리키고 있는 linked list에 노드를 추가하여 값을 삽입한다.
  데이터 탐색 : index가 가리키고 있는 linked list를 선형 검색하여 해당 key에 대한 data 반환
  추가할 수 있는 데이터 수의 제약이 적다.

- **Open Addressing -Linear Probing, Quadratic Probing, Double hashing**
  linked list와 같은 추가적인 메모리 공간을 사용하지 않고, hash table array의 빈공간을 사용하는 방법이다.<br/>
  
  <img src = "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FALk2h%2FbtqAWxowTOl%2FoWIIt6DZ7jdYBd3jngUqWk%2Fimg.png" width = "500px"><br/>
  
  충돌이 발생하는 해당 index 뒤에 있는 빈공간을 찾아서 데이터를 넣는다.
  탐색 : sandra 에 대해 검색했을 때 index가 152인데 실제 index는 153이기 때문에 해당 index 뒤로 일치할 때 까지 검색한다.
  삭제 : 더미 노드를 넣어 검색할 때 다음 index까지 검색을 연결해주는 역할을 해야한다 ( 삭제가 어려움 )
- **Resizing**
  Separate chaining의 경우, 버킷이 일정 수준 차면 각 버킷에 연결되어 있는 list의 길이가 늘어나기 때문에 검색 성능이 떨어진다. 이 때문에 버킷의 개수를 늘려줘야 한다.
  또한 Open addressing의 경우에도 고정 크기 배열을 사용하기 때문에 데이터를 더 넣기 위해서는 배열을 확장해야 하는데 이를 resizing이라고 한다.

### 장단점

- **장점**
  1. 적은 리소스로 많은 데이터를 효율적으로 관리할 수 있다.
  2. 배열의 index를 사용해서 검색, 삽입, 삭제가 빠르다. -> 평균 시간복잡도 : O(1)
     삽입, 삭제 과정에도 해당 부분에 다른 데이터로 채울 필요가 없기 때문 ( 데이터 이동 X )
  3. key, hash code 가 연관성이 없어 보안에 사용된다.
  4. Data Caching에 많이 사용된다.
  5. **중복을 제거하는데 유용**하다.
- **단점**
  1. 충돌
  2. 공간 복잡도가 커진다.
  3. 순서가 있는 배열에는 어울리지 않는다.
  4. 해시 함수 의존도가 높아진다.

### 암호화

- **salt**
  비밀번호 암호화 과정에서 비밀번호의 해시코드를 DB에 저장하면 rainbow table을 가지고 비밀번호를 해킹할 수 있다.  
  이때 salt 이용해서 해결이 가능하다.
  salt 아주 랜덤한 텍스트인데 ( 비밀번호 + salt )를 해시 함수에 넣으면 다이제스트를 알아낸다 하더라도 salt를 모르기 때문에 유출 가능성이 확 낮아질 수 있다.
  \*Rainbow Table : 해시 함수를 사용하여 만들어낼 수 있는 값들을 저장한 표

- **key streching**
  해시 함수를 n번 돌림

- JAVA에서의 Hash Table 과 Hash Map 의 차이
  - Hash Table
    병렬 처리를 할 때 : 동기화를 고려해야 하는 상황
    NULL 값 허용하지 않음
  - Hash Map
    병렬 처리를 하지 않을 때 : 동기화 고려 X
    NULL 값 허용

<br/>
<br/>
<br/>
<br/>

[참고 사이트](https://hee96-story.tistory.com/48)
