import axios from "axios";

const request = axios.create({
  baseURL: 'http://www.iscatseven.top:4900/',
  timeout: 20000
});

export default request;