import request from "./request";

// 获取歌曲Url
export function getSongUrl (id) {
  return request({
    url: `/song/url?id=${id}`,
    method: "get"
  })
}