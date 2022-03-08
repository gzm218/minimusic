import { createStore } from 'vuex';
import { getPlayLyric, phoneLogin, getUderDetial } from '../api/index';

export default createStore({
  state: {
    playlist: [],
    playCurrentIndex: 0,
    lyric: '',
    currentTime: 0,
    intervalId: 0,
    user: {
      isLogin: false,
      account: {},
      userDetial: {},
    },
  },
  getters: {
    //歌词裁剪
    lyricList: function (state) {
      let arr = state.lyric.split(/\n/gis).map((item, i) => {
        let min = parseInt(item.slice(1, 3));
        let sec = parseInt(item.slice(4, 6));
        let mill = parseInt(item.slice(7, 10));
        let lyric = '';
        lyric = item.slice(10, item.length);
        return {
          min,
          sec,
          mill,
          lyric,
          content: item,
          time: mill + sec * 1000 + min * 60 * 1000,
        };
      });
      arr.forEach((item, i) => {
        if (i == 0) {
          item.pre = 0;
        } else {
          item.pre = arr[i - 1].time;
        }
      });
      // console.log(arr);
      return arr;
    },
  },
  mutations: {
    setPlayList(state, value) {
      state.playlist = value;
    },
    pushPlayList(state, value) {
      state.playlist.push(value);
    },
    setPlayIndex(state, value) {
      state.playCurrentIndex = value;
    },
    setLyric(state, value) {
      state.lyric = value;
    },
    setCurrentTime(state, value) {
      state.currentTime = value;
    },
    setUser(state, value) {
      state.user = value;
    },
  },
  actions: {
    async reqLyric(content, payload) {
      let res = await getPlayLyric(payload.id);
      content.commit('setLyric', res.data.lrc.lyric);
    },
    async login(content, payload) {
      console.log(payload);
      let res = await phoneLogin(payload.phone, payload.password);
      console.log(res);
      if (res.data.code == 200) {
        content.state.user.isLogin = true;
        content.state.user.account = res.data.account;
        let userDetial = await getUderDetial(res.data.account.id);
        content.state.user.userDetial = userDetial.data;
        localStorage.userDate = JSON.stringify(content.state.user);
        content.commit('setUser', content.state.user);
      }
      return res;
    },
  },
  modules: {},
});
