import request from "./request";

// 主页请求

// 请求轮播图
export function getBanner () {
  return request({
    url: "/banner?type=0",
    method: "get"
  })
}

// 请求推荐歌单
export function getRecommendSongSheet () {
  return request({
    url: "/personalized?limit=10",
    method: "get"
  })
}

// 请求独家放送
export function getBroadcast () {
  return request({
    url: "/personalized/privatecontent",
    method: 'get'
  })
}

// 请求最新音乐
export function getNewSongs () {
  return request({
    url: "/personalized/newsong?limit=12",
    method: 'get'
  })
}

// 请求推荐MV
export function getRecommendMV () {
  return request({
    url: "/personalized/mv",
    method: "get"
  })
}

// 歌单请求

// 热门歌单分类请求
export function getHotSongSheet () {
  return request({
    url: "/playlist/hot",
    method: "get"
  })
}

// 排行榜请求

// 获取所有榜单
export function getRanking () {
  return request({
    url: "/toplist",
    method: "get"
  })
}

// 获取所有榜单详情
export function getRankingDetails () {
  return request({
    url: "/toplist/detail",
    method: "get"
  })
}

// 获取歌手排行榜
export function getsingerzRanking () {
  return request({
    url: "/toplist/artist",
    method: "get"
  })
}