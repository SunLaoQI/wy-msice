import request from "./request";

// 搜索
export function getSearchData (value) {
  return request({
    url: `/cloudsearch?keywords=${value}&limit=100`,
    method: "get"
  })
}