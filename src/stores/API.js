import axios from "axios";
import AxiosMockAdapter from "axios-mock-adapter";
import { RESTAURANTS } from "./mockData";

const BASE_URL = "https://localhost:8000/api/";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

const API_URL = {
  TAGDETAIL: "tagdetail",
  SEARCHRESULT: "searchresult",
};

const axiosMock = new AxiosMockAdapter(axiosInstance, {
  delayResponse: 100,
  onNoMatch: "throwException",
});

axiosMock.onGet(API_URL.TAGDETAIL).reply(200, RESTAURANTS);

axiosMock.onGet(API_URL.SEARCHRESULT).reply(200, RESTAURANTS);

export { axiosInstance, API_URL };
