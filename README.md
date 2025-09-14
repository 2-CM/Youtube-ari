# Youtube-ari
<img src="https://blog.kakaocdn.net/dna/mnjXF/btrZiWkRV4T/AAAAAAAAAAAAAAAAAAAAALlzOTIoDgeNqGJv63IQdolvT2rryi_30_0hbT-4bV_V/img.png?credential=yqXZFxpELC7KVnFOS48ylbz2pIh7yKj8&expires=1759244399&allow_ip=&allow_referer=&signature=UXWFww045KrHofHfro93VDLFHqo%3D" width=100% height=400 />  

### 유튜브(Youtube) 사이트를 클론코딩한 개인 프로젝트.

> 프로젝트 기간 : 2025.05.29 ~ 2025.08.28
> 
> URL : https://youtube-ari.netlify.app/

## 🎯 구현 목표
- **React**를 활용한 반응형 웹 제작
- **공공 API 활용 능력 향상**
    - YouTube Data API
    - Google 로그인 API
- **Tailwind CSS**를 이용한 UI 스타일링
- **무한 스크롤 기능 구현**

## ⚒️ 기술 스택
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"> <img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"> <img src="https://img.shields.io/badge/tailwind css-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">

<img src="https://img.shields.io/badge/youtube data api-FF0000?style=for-the-badge&logo=youtube&logoColor=white"> <img src="https://img.shields.io/badge/firebase-DD2C00?style=for-the-badge&logo=firebase&logoColor=white">

<img src="https://img.shields.io/badge/react router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white"> <img src="https://img.shields.io/badge/react--loading--skeleton-61DAFB?style=for-the-badge&logo=React&logoColor=white" /> <img src="https://img.shields.io/badge/react--intersection--observer-61DAFB?style=for-the-badge&logo=React&logoColor=white" />

## 🗂️ 파일 구조
<img width="244" height="793" alt="스크린샷 2025-09-15 002815" src="https://github.com/user-attachments/assets/1d124e25-a0dd-4981-bfcb-a2c3699b1ee6" />

## 📋구현 기능 & 화면
### 홈 화면 & 검색 결과 화면

<table>
  <tr>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/5a7bb8ed-57d6-4f00-8327-651c0dbb9233" alt="홈 화면" width="95%" /><br/>
      <sub>인기 영상 목록 표시 (<b>YouTube Data API</b>)</sub>
    </td>
    <td align="center">
      <img src="https://github.com/user-attachments/assets/ab0215f6-dcfd-4909-9ebc-f47f373b3969" alt="검색 결과 화면" width="95%" /><br/>
      <sub>키워드 검색 결과 표시 (<b>YouTube Data API</b>)</sub>
    </td>
  </tr>
</table>

### 공통 기능 & 동영상 상세 페이지

  <table>
  <tr>
    <td align="center" width="50%" style="vertical-align: top;">
      <img src="https://github.com/user-attachments/assets/c6355fce-69e1-4dfe-9d34-240035984fba" alt="공통 기능" width="100%" /><br/>
      <div align="left">
        <ul>
          <li>로딩 스켈레톤 UI (<b>react-loading-skeleton</b>)</li>
          <li>무한 스크롤 (<b>react-intersection-observer</b>)</li>
          <li>다크/라이트 모드</li>
          <li>반응형 레이아웃</li>
        </ul>
      </div>
    </td>

   <td align="center" width="50%" style="vertical-align: top;">
      <img src="https://github.com/user-attachments/assets/f8aab2c9-a4c3-4c25-ac06-5b30be513cd6" alt="동영상 상세 페이지" width="100%" /><br/>
      <div align="left">
        <ul>
          <li>Video Player 재생</li>
          <li>영상 데이터 표시</li>
          <li>영상 설명 영역 + 더보기 / 접기 토글</li>
          <li>추천 영상 사이드바</li>
        </ul>
      </div>
    </td>
  </tr>
</table>

### 로그인 & 마이페이지 

<table>
  <tr>
    <td align="center" width="50%" style="vertical-align: top;">
      <img src="https://github.com/user-attachments/assets/c0a31736-8892-41cf-b7a0-2bc6562af0de" alt="구글 로그인/로그아웃" width="100%" /><br/>
      <div align="left">
        <ul>
          <li>구글 로그인 / 로그아웃 (<b>Firebase</b>)</li>
          <li>로그인 상태 전역 관리 (<b>React Context API</b>)</li>
        </ul>
      </div>
    </td>

   <td align="center" width="50%" style="vertical-align: top;">
      <img src="https://github.com/user-attachments/assets/54b4bcb8-1987-4c04-bd80-32ef60e76927" alt="마이페이지 최근 본 영상" width="100%" /><br/>
      <div align="left">
        <ul>
          <li>로그인 버튼 (미로그인 상태일 때 노출)</li>
          <li>최근 본 영상 기록 (<code>localStorage</code> 기반)</li>
          <li>영상 클릭 시 상세 페이지 이동</li>
        </ul>
      </div>
    </td>
  </tr>
</table>

## 📌 개선 사항
- 음성 검색 기능
- 홈 화면의 카테고리 필터 기능
- 채널 이미지 미제공 시, 채널명 기반의 이미지 자동 생성 기능
