<br>

<div align="center">

![donut_logo3 1](https://github.com/user-attachments/assets/46b777fe-4998-4ff2-aed7-e54ab6a2f9a6)

</div>

<br>

**깜찍한 도넛 캐릭터와 함께하는 협업 일정 관리 사이트** <br>
개인 또는 팀원들과 함께 투두리스트를 체크하고 일정을 공유하는 프로그램입니다.

---

> <p>코드잇 스프린트 프론트엔드 8기 part4 6팀 <br> 2024.10.07 ∼ 2024.11.11</p>

<div align="right">
<h3>배포 사이트</h3>
https://main-donut-seven.vercel.app/ 🔗
</div>

<br>
<br>

## ![타이틀 아이콘](https://github.com/user-attachments/assets/cfce5fa2-f2be-4b56-92ee-41563e64c22a) <span>기술 스택</span>

![html5](https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=black)
![css3](https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=black)
![next](https://img.shields.io/badge/Next.js-ffffff?style=for-the-badge&logo=next.js&logoColor=black)
![ts](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![js](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javaScript&logoColor=black)
![jira](https://img.shields.io/badge/Jira-0052CC?style=for-the-badge&logo=jira&logoColor=white)
![framer](https://img.shields.io/badge/Framer-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![zustand](https://img.shields.io/badge/zustand-20232A?style=for-the-badge&logo=zustand&logoColor=white)
![tanstackquery](https://img.shields.io/badge/tanstackquery-20232A?style=for-the-badge&logo=tanstackquery&logoColor=white)
![eslint](https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)
![tailwindCss](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![figma](https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=black)

<br>
<br>

## ![타이틀 아이콘](https://github.com/user-attachments/assets/cfce5fa2-f2be-4b56-92ee-41563e64c22a) 프로젝트 소개

<br>

<div align="center">
  
![project-2](https://github.com/user-attachments/assets/3f1be51f-bbb1-487b-920f-f53a543ba545)

<table align="center">
<tr>

<td  align="center">팀원을 초대하고 오늘 하루 업무량을 공유할 수 있습니다. <br>오늘 하루 달성한 업무를 도식화 하여 보여주고 각 카테고리별 업무현황을 확인할수 있습니다.</td>
</tr>
</table>

<br>
<br>
<br>

<div align="center">
  
![project-1](https://github.com/user-attachments/assets/42d090d6-74eb-4b22-84c9-4510a6ba32d4)

<table align="center">
<tr>
<td  align="center">매월, 매주, 매일의 업무를 설정해 오늘 하루 해야할 업무를 정리할수 있습니다.
</tr>
</table>

<br>
<br>
<br>

<div align='left'>

## ![타이틀 아이콘](https://github.com/user-attachments/assets/cfce5fa2-f2be-4b56-92ee-41563e64c22a) 담당 페이지

### 계정설정 페이지

![mysetting](https://github.com/user-attachments/assets/9590372d-b70c-4f7e-917b-7f0f7bb2dbc0)

이름과 비밀번호 변경, 회원 탈퇴기능을 가지고 있으며 프로필 사진 변경이 가능합니다.
<br>
프로필은 회원가입시 지정된 사진들을 랜덤으로 지정해주며
Axios와 React Query의 useMutation을 통해 변경과 삭제 리퀘스트를 보냅니다.
<br>

### 마이 히스토리 페이지

![myhistory](https://github.com/user-attachments/assets/62132de3-af49-4179-b995-7e9e38d99b86)

할일 체크 TodoList 페이지에서 완료한 목록을 한번에 확인할수 있습니다.
<br>
TodoList의 하루동안의 Complete수를 가져와 dayjs 라이브러리를 사용해 해당 그래프에 필요한 날짜와 Complete수를 매칭하였습니다.

### 커뮤니티 페이지

![community](https://github.com/user-attachments/assets/74573932-194e-4b90-b0fb-339e2cffa45f)

팀원과는 별개로 프로그램을 이용하는 모두가 사용할수 있는 게시판 페이지입니다.
<br>
검색과 최신/인기순 정렬이 가능하고 게시글 생성/삭제/수정이 가능합니다.
<br>
메인 게시판은 React Query의 infinity Query를 통해 무한스크롤을 구현하였습니다.

<br>
<br>

## ![타이틀 아이콘](https://github.com/user-attachments/assets/cfce5fa2-f2be-4b56-92ee-41563e64c22a) 트러블 슈팅

### 문제

깃 허브 스타일 contribution 그래프 기능을 구현하기 위해서 1년 365일을 기준으로 블록을 만들고, 완료한 task가 있는 날에는 색을 넣어 완료 현황을 보여주려고함. 하지만 12월 31일까지만 존재하는 것을 확인

![image](https://github.com/user-attachments/assets/f48f657c-3c2f-4824-a09e-5e2644c2cdfd)

<br>
<br>

### 원인

2024년은 윤년으로 2월 29일이 존재하는데 1년을 365일로 생각하고 task 블록을 생성함. 따라서 3월 이후부터 하루 씩 날짜가 밀리며 한개의 task가 부족한 부분을 확인

### 해결

dayjs라이브러리의 isLeapYear이라는 플러그인을 통해 해결
<dr>
isLeapYear은 윤년일 때 true 값을 아닐 때는 false값을 반환함 따라서 true값을 전달받을 시 366일을 false값을 전달받을시 365일을 기준으로 블록을 생성해 3월부터 하루씩 밀리는 현상을 방지함

![image](https://github.com/user-attachments/assets/b440c511-2785-4143-a3ed-13a13827a08f)

![image](https://github.com/user-attachments/assets/b9815e4e-fae4-44fa-b578-bb788213924e)
![image](https://github.com/user-attachments/assets/cc1463e0-4a25-4459-8a6c-3d49e1b4bfde)

<div align='left'>

<br>
<br>


## ![타이틀 아이콘](https://github.com/user-attachments/assets/cfce5fa2-f2be-4b56-92ee-41563e64c22a) 개발팀 소개

<table align="center">
    <tr align="center">
        <td> <img src="https://avatars.githubusercontent.com/u/169638454?v=4" alt="프로필" width="100" /></td>
        <td><img src="https://avatars.githubusercontent.com/u/127027889?v=4" alt="프로필" width="100" /></td>
        <td><img src="https://avatars.githubusercontent.com/u/169438556?v=4" alt="프로필" width="100" /></td>
        <td><img src="https://github.com/user-attachments/assets/361ebb81-b0d1-4483-918e-82beff58bbad" alt="프로필" width="100" /></td>
    </tr>
    <tr align="center">
        <td><a href="https://github.com/jangyonghan">👑 장용한</a></td>
        <td><a href="https://github.com/hyeoksuJ">장혁수</a></td>
        <td><a href="https://github.com/choi-youngsun">최영선</a></td>
        <td><a href="https://github.com/purplenib">김영주</a></td>
    </tr>
      <tr align="center" >
        <td>마이 히스토리 페이지<br>계정설정 페이지<br>커뮤니티 페이지</td>
        <td>로그인 및 회원가입 페이지<br>비밀번호 재설정 페이지<br>Oauth</td>
        <td>팀 페이지<br>팀 리스트 페이지<br>팀 생성하기 페이지</td>
        <td>랜딩 페이지<br>투두리스트 페이지</td>
    </tr>
</table>

<br>
