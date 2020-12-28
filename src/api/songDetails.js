import request from "./request";

// 获取歌单详情
export function getListDetails (id) {
  return request({
    url: `/playlist/detail?id=${id}`,
    method: 'post'
  })
}


// 获取歌曲详情
export function getSong (id) {
  return request({
    url: `/song/detail?ids=${id}`,
    method: "get"
  })
}

// 获取歌单评论

export function getsongSheetComment (id) {
  return request({
    url: `/comment/playlist?id=${id}`,
    method: "get"
  })
}