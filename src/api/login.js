import request from "./request";

// 登录
export function postLogin (phone, password) {
  return request({
    url: `/login/cellphone?phone=${phone}&password=${password}`,
    method: "post"
  })
}