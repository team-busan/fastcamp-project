import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";
import { RESTAURANTS, REVIEW, BLOGREVIEW } from "./mockData";


const BASE_URL = "https://localhost:8000/api/";

const axiosInstance = axios.create({ //axios 인스턴스 생성
  baseURL: BASE_URL,
  timeout: 5000,
});

const API_URL = {
  HOME: "home",
  TAGDETAIL: "tagdetail",
  DETAIL: "detail",
  SEARCHRESULT: "searchresult",
};

const axiosMock = new AxiosMockAdapter(axiosInstance, { //axios를 사용할 때 가짜 요청을 발생시키는 라이브러리
  delayResponse: 100, // 0.1초 후 클라이언트 전송
  onNoMatch: "throwException", //예외처리
});

axiosMock.onGet(API_URL.TAGDETAIL).reply(200, RESTAURANTS);

const detail_url = new RegExp(`${API_URL.DETAIL}/*`);
axiosMock.onGet(detail_url).reply(200, {restaurant : RESTAURANTS, review : REVIEW, blogview : BLOGREVIEW});

axiosMock.onGet(API_URL.SEARCHRESULT).reply(200, RESTAURANTS);

export { axiosInstance, API_URL };
