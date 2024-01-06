import axios from "axios";
const BASEURL = `${process.env.NEXT_PUBLIC_BASEURL}`;
export default class Api {
  Login(data: any) {
    return axios.post(`${BASEURL}/login`, data, {});
  }
  Register(data: any) {
    return axios.post(`${BASEURL}/register`, data, {});
  }
}

export const APIInstance = new Api();
