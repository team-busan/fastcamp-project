# FastCampDining

---

## 프로젝트 소개

---
Fast Dining은 위치기반으로 맛집을 추천, 소개해주는 서비스입니다.
위치를 현재or수동으로 지정 할 수 있고 설정한 위치 주변의 인기있는 식당, 특정태그에 부합하는 식당을 추천 해줍니다
가게를 등록 할 수 있고 등록된가게의 상세 정보 영업정보 블로그 후기등을 제공합니다.<br>

## 기술 스택

---
| JavaScript | React | Tailwind | GitHub |
| --- | --- | --- | --- |
| <img src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567008394/noticon/ohybolu4ensol1gzqas1.png" alt="JavaScript Logo" width="50" style="display: block; margin: auto;"/>|<img src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566557331/noticon/d5hqar2idkoefh6fjtpu.png" alt="React Logo" width="50" style="display: block; margin: auto;"/>|<img src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1657314490/noticon/ur8spzfcq4acw7ijp68v.png" alt="Tailwind Logo" width="50" style="display: block; margin: auto;"/>|<img src="https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566899596/noticon/slhw4nu8hybreryigopq.png" alt="GitHub Logo" width="50" style="display: block; margin: auto;"/>|


## 주요 기능
---
|                                                              |                                                              |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
|     **홈화면 검색**    |    **홈화면 칼럼** |
| ![홈화면 검색](https://github.com/team-busan/fastcamp-project/blob/main/assets/homesearch.gif) | ![홈화면 칼럼](https://github.com/team-busan/fastcamp-project/blob/main/assets/homeslide.gif) |
|     **홈화면 바텀시트 UI**     |   **태그별 자세히보기** |
| ![홈화면 바텀시트 UI](https://github.com/team-busan/fastcamp-project/blob/main/assets/bottomsheet.gif) | ![태그별 자세히보기](https://github.com/team-busan/fastcamp-project/blob/main/assets/tag.gif) |
|  **가게상세페이지** | **가게상세페이지 슬라이더** |
| ![가게상세페이지](https://github.com/team-busan/fastcamp-project/blob/main/assets/detail.gif) | ![가게상세페이지 슬라이더](https://github.com/team-busan/fastcamp-project/blob/main/assets/detailslide.gif) |

---

## 이용 방법 및 주의사항
---

- 내부 프록시를 사용하는 경우(CORS):
- - vite.config.js 파일에서 target 을 해당 백엔드 주소로 설정합니다.

- 프록시 없이 api 주소를 바로 사용하는 경우:
- - src/stores/API.js 파일에서 BASE_URL 을 백엔드 주소로 설정합니다.
- - 현재는 vite.config.js 에서 설정한 내부 프록시를 사용하여 /api 주소로 API 통신하도록 설정되어 있습니다.

- 백엔드 설정 필요 - .env파일 - VWORLD_API_URL, DATA_GO_KR_API_KEY

- 프론트엔드 설정 필요 - index.html - 지도 기능 사용을 위해서 naver cloud map api key 필요함

- 검색 필터 -필터에 해당하는 정보가 없을 때 빈 배열이 오는게 정상적인 피드백인데, 전체 목록이 온다.

- 식당 별 리뷰 필터링 param 없음

- 식당 별 블로그 필터링 param 없음

- src/component/SignForm.jsx
- - /signup 엔드포인트가 "Content-Type"을 "application/x-www-form-urlencoded" 로 받는지 "application/json" 으로 받는지 확인하세요.

---

## 팀

---
[정홍천 (Front-End)](https://github.com/gugonggu), 
[송은우 (Front-End)](https://github.com/Eunoos), 
[이재형 (Front-End)](https://github.com/jaehyeong21), 
[이기환](https://github.com/kifhan)
