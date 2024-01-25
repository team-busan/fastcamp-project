import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";
import { ARTICLE, RESTAURANTS, REVIEW, BLOGREVIEW, USER } from "./mockData";

const BASE_URL = "https://localhost:8000/api/";

const axiosInstance = axios.create({
  //axios 인스턴스 생성
  baseURL: BASE_URL,
  timeout: 5000,
});

const API_URL = {
  HOME: "home",
  TAGDETAIL: "tagdetail",
  DETAIL: "detail",
  SEARCH: "search",
  SEARCHFILTER: "search/filter",
  MYPAGE: "mypage",
  ARTICLE: "article",
  LOGIN: "login",
  SIGNUP: "signup",
};

const axiosMock = new AxiosMockAdapter(axiosInstance, {
  //axios를 사용할 때 가짜 요청을 발생시키는 라이브러리
  delayResponse: 100, // 0.1초 후 클라이언트 전송
  onNoMatch: "throwException", //예외처리
});

axiosMock
  .onGet(API_URL.TAGDETAIL)
  .reply(200, { restaurantList: RESTAURANTS, reviews: REVIEW, users: USER });

const detail_url = new RegExp(`${API_URL.DETAIL}/*`);
axiosMock.onGet(detail_url).reply(200, {
  restaurant: RESTAURANTS,
  review: REVIEW,
  blogview: BLOGREVIEW,
});

axiosMock
  .onGet(API_URL.SEARCH)
  .reply(200, { restaurantList: RESTAURANTS, reviews: REVIEW, users: USER });

axiosMock.onPost(API_URL.SEARCHFILTER).reply(200, { message: "필터 적용" });

axiosMock.onGet(API_URL.HOME).reply(200, {tagList: RESTAURANTS, articles: ARTICLE});

axiosMock.onGet(API_URL.ARTICLE).reply(200, ARTICLE);

axiosMock.onGet(API_URL.MYPAGE).reply(200, {users: USER, wishlists: RESTAURANTS});

axiosMock
  .onPost(API_URL.SIGNUP)
  .reply(200, { message: "성공적으로 회원가입 되었습니다." });

axiosMock
  .onPost(API_URL.LOGIN)
  .reply(200, { message: "성공적으로 로그인 되었습니다." });

export { axiosInstance, API_URL };
