// 发送请求的api

import axios from 'axios';

let baseUrl = 'http://localhost:3000';

// 获取录播图的api
// 0:pc 1: android 2: iphone 3: ipad
export function banner(type) {
  return axios.get(`${baseUrl}/banner?type=${type}`);
}

// 调用此接口 , 可获取 APP 首页圆形图标入口列表
export function getball() {
  return axios.get(`${baseUrl}/homepage/dragon/ball`);
}

//取推荐歌单 可以传参现在先限制10
export function sonRecommend() {
  return axios.get(`${baseUrl}/personalized?limit=10`);
}

//获取歌单详情 传入id
export function getMusicDetail(id) {
  return axios.get(`${baseUrl}/playlist/detail?id=${id}`);
}

//获取歌单所有歌曲
export function trackall(id) {
  return axios.get(`${baseUrl}/playlist/track/all?id=${id}`);
}

//获取歌词
export function getPlayLyric(id) {
  return axios.get(`${baseUrl}/lyric?id=${id}`);
}

// 搜索
export function cloudsearch(keywrod) {
  return axios.get(`${baseUrl}/search?keywords=${keywrod}`);
}

// 手机登录
export function phoneLogin(phone, password) {
  return axios.get(
    `${baseUrl}/login/cellphone?phone=${phone}&password=${password}`
  );
}

//获取用户详情
export function getUderDetial(userId) {
  return axios.get(`${baseUrl}/user/detail?uid=${userId}`);
}
export default {
  banner,
  getball,
  sonRecommend,
  getMusicDetail,
  trackall,
  getPlayLyric,
  cloudsearch,
  phoneLogin,
  getUderDetial,
};
