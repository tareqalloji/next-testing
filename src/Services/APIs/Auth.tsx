import axios from "axios";
const BASEURL = `https://event-reg.app/flutter_test/api`;
export default class Api {
  Login(data: any) {
    return axios.post(`${BASEURL}/login`, data, {});
  }
  Register(data: any) {
    return axios.post(`${BASEURL}/register`, data, {});
  }
}

export const APIInstance = new Api();
