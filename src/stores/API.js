import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";
import { RESTAURANTS,  ARTICLE, USER} from "./mockData";

const BASE_URL = "https://localhost:8000/api/";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

const API_URL = {
  HOME: "home",
  TAGDETAIL: "tagdetail",
  DETAIL: "detail",
  SEARCHRESULT: "searchresult",
  MYPAGE: "mypage",
  ARTICLE: "article"
};

const axiosMock = new AxiosMockAdapter(axiosInstance, {
  delayResponse: 100,
  onNoMatch: "throwException",
});

axiosMock.onGet(API_URL.TAGDETAIL).reply(200, RESTAURANTS);

axiosMock.onGet(API_URL.SEARCHRESULT).reply(200, RESTAURANTS);

axiosMock.onGet(API_URL.HOME).reply(200, RESTAURANTS);

axiosMock.onGet(API_URL.ARTICLE).reply(200, ARTICLE);

axiosMock.onGet(API_URL.MYPAGE).reply(200, USER);

export { axiosInstance, API_URL };
