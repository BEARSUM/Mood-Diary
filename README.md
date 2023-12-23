# mood diary : *나만의 작은 감정 일기장*

- **목적** : 사용자가 일상에서 느끼는 감정을 표현하고 기록하고, 이를 통해 감정의 변화나 추이를 파악할 수 있습니다.
- **목표** :
  - **사용자 친화적인 인터페이스 :**  사용자가 쉽게 감정을 기록하고 조회할 수 있는 간결하고 직관적인 사용자 인터페이스를 제공
  - **감정 통계 제공 :** 월별 감정 통계 데이터를 차트로 시각화하여 감정 추이를 이해하기 쉽게 표현
  - **반응형 디자인 :** 반응형 디자인을 채택하여 다양한 디바이스에서 일관된 사용 경험을 제공

<br/>

## 기능 구현 리스트

<details><summary>공통 헤더</summary>
<img width="138" alt="image" src="https://github.com/BEARSUM/Mood-Diary/assets/125293472/2a2db78e-b09b-47a1-a0b6-69136e091e53">  
<img width="450" alt="image" src="https://github.com/BEARSUM/Mood-Diary/assets/125293472/c9241898-4e46-49b9-b276-fab7aadbe0ee">  

  * 반응형 디자인
  * 로고를 클릭하여 **메인 페이지**로 이동합니다.
  * 마이페이지 버튼을 클릭하여 **메인 페이지**로 이동합니다.

</details>

<details><summary>메인 페이지</summary>
<img width="109" alt="image" src="https://github.com/BEARSUM/Mood-Diary/assets/125293472/5cffaba7-558f-44c8-8f72-b4a01f2e1312">
<img width="500" alt="image" src="https://github.com/BEARSUM/Mood-Diary/assets/125293472/eb1c7e19-4360-4045-aaf8-67bf89b3c19b">  
  
  * 반응형 디자인 
  * 선택된 날짜에 작성된 일기가 없는 경우, 버튼 클릭하여 **새 일기 작성 페이지**로 이동합니다.

<br/>
<img width="108" alt="image" src="https://github.com/BEARSUM/Mood-Diary/assets/125293472/0535f3c7-e04e-4ca0-9d66-ce7c07de8ed2">
<img width="500" alt="image" src="https://github.com/BEARSUM/Mood-Diary/assets/125293472/d888000b-dadb-4a6b-8dda-3cc422abb537">

  * 선택된 날짜에 작성된 일기가 있는 경우, **상세 일기 내용**을 보여줍니다.

</details>

<details><summary>마이 페이지(통계)</summary>
  <img width="118" alt="image" src="https://github.com/BEARSUM/Mood-Diary/assets/125293472/5e44455c-e8ba-439f-8441-26b156509f4a">
  <img width="450" alt="image" src="https://github.com/BEARSUM/Mood-Diary/assets/125293472/c05bf92f-81a8-409d-b68a-c3076b70f0ec">  
  
  * 반응형 디자인
  * 월별 작성된 일기의 감정 통계를 차트로 보여줍니다.
  * 월별 일기 목록을 보여줍니다.
  * 일기 아이템의 수정 버튼을 클릭하면 일기 수정 페이지로 이동합니다.
  * 일기 아이템의 삭제 버튼을 클릭하면 일기가 삭제됩니다.
  * 최신순, 오래된순을 클릭하면 일기가 날짜 기준으로 정렬됩니다.

</details>

</details>

<details><summary>글 작성(수정) 페이지</summary>
  <img width="126" alt="image" src="https://github.com/BEARSUM/Mood-Diary/assets/125293472/ee795e0f-a9ee-4d57-a71c-aff347a527b2">
  <img width="400" alt="image" src="https://github.com/BEARSUM/Mood-Diary/assets/125293472/21134842-23df-4529-ac87-ee2a54a70a9b">  

  * 제목과 내용을 입력할 수 있습니다.
  * 제목과 내용을 입력하지 않고 저장하기 버튼을 누르면 **빈 항목으로 포커스** 됩니다.
  * 감정을 선택할 수 있습니다.
  * **취소 버튼**을 누르면 뒤로가기 됩니다.
  * **저장하기 버튼**을 누르면 메인 페이지로 이동됩니다.

</details>
<br />

## 데모 사이트

[https://bearsum-mooddiary.web.app](https://bearsum-mooddiary.web.app)
<div>

<img src="https://github.com/BEARSUM/Mood-Diary/blob/main/public/thumbnail.png?raw=true" alt="썸네일" width="500" />
 </div>
 
<br />

## Tech Stack

- FrontEnd : styled-components, ApexCharts, JavaScript, React, Recoil  

<br />  


## Tools

- Figma : Design
- GitHub : Code Repository
<br />

## 코드 컨벤션

- 변수 : 카멜 케이스(camelCase)
- 함수 : 카멜 케이스(camelCase)
- 파일 : 파스칼 케이스(PascalCase)
<br />

## 커밋 컨벤션

- feat : 새로운 기능 추가
- fix : 오류 수정
- design: css 수정
- refactor : 코드 로직 수정 (리팩토링)
- docs : 문서 수정
<br />

## 실행 방법
1. 레포지토리를 클론하신 뒤 아래 명령어를 입력하여 dependencies를 설치해 주세요.
```
npm i
```
2. 모든 dependencies의 설치를 확인하신 뒤 다음 명령어를 입력하여 React Application을 실행하세요.

```
npm run start
```

