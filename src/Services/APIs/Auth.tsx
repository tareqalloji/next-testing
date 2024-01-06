import axios from "axios";
const BASEURL = `${process.env.NEXT_PUBLIC_BASEURL}`;
export default class Api {
  Login(data: any) {
    return axios.post(`https://event-reg.app/flutter_test/api/login`, data, {});
  }
  Register(data: any) {
    return axios.post(`https://event-reg.app/flutter_test/api/register`, data, {});
  }
}

export const APIInstance = new Api();
