import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";
import { RESTAURANTS, REVIEW, USER } from "./mockData";

const BASE_URL = "https://localhost:8000/api/";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

const API_URL = {
  HOME: "home",
  TAGDETAIL: "tagdetail",
  DETAIL: "detail",
  SEARCH: "search",
};

const axiosMock = new AxiosMockAdapter(axiosInstance, {
  delayResponse: 100,
  onNoMatch: "throwException",
});

axiosMock
  .onGet(API_URL.TAGDETAIL)
  .reply(200, { restaurantList: RESTAURANTS, reviews: REVIEW, users: USER });

// axiosMock.onGet(API_URL.DETAIL).reply(200, {});

axiosMock
  .onGet(API_URL.SEARCH)
  .reply(200, { restaurantList: RESTAURANTS, reviews: REVIEW, users: USER });

export { axiosInstance, API_URL };
