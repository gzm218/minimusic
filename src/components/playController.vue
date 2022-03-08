<template>
  <div class="palyController" v-if="playlist[playCurrentIndex]?.al.picUrl">
    <div class="left" @click="isShow = !isShow">
      <img :src="playlist[playCurrentIndex]?.al.picUrl" alt="" />
      <span
        >{{ playlist[playCurrentIndex]?.ar[0].name }}-{{
          playlist[playCurrentIndex]?.al.name
        }}</span
      >
    </div>
    <div class="right">
      <div v-if="paused" class="bofang" @click="play">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bofang1"></use>
        </svg>
      </div>
      <div v-else class="bofang" @click="play">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bofang"></use>
        </svg>
      </div>
      <div class="list">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-liebiao"></use>
        </svg>
      </div>
    </div>
    <song-wrods
      :play="play"
      :paused="paused"
      @back="isShow = !isShow"
      v-show="isShow"
      :playDetail="playlist[playCurrentIndex]"
      :lyric="lyric"
    ></song-wrods>

    <audio
      ref="audio"
      :src="`https://music.163.com/song/media/outer/url?id=${playlist[playCurrentIndex]?.id}.mp3`"
    ></audio>
  </div>
</template>

<script>
// 以后尝试改成vue3

import { mapState } from 'vuex';
import songWrods from './songWrods.vue';
export default {
  components: { songWrods, songWrods },
  name: 'palyController',
  setup() {
    // let audio = ref();
    // onMounted(() => {
    //   audio = getCurrentInstance();
    // });
    // const show = () => {
    //   audio.ctx.$refs.audio.alertMessage();
    // };
    // function play() {
    //   if (this.$refs.audio.pause) {
    //     this.$refs.audio.play();
    //   } else {
    //     this.$refs.audio.pause();
    //   }
    // }
    // return { audio, show, play };
  },
  //这一步可以转成vue3的计算属性去试一下
  data() {
    return {
      paused: true,
      isShow: false,
    };
  },
  computed: {
    ...mapState(['playlist', 'playCurrentIndex', 'lyric']),
  },
  updated() {
    this.$store.dispatch('reqLyric', {
      id: this.playlist[this.playCurrentIndex]?.id,
    });

    // console.log(this.playlist[this.playCurrentIndex].id);
  },
  mounted() {},
  methods: {
    play() {
      // console.log(this.$refs.audio.currentTime);
      if (this.$refs.audio.paused) {
        this.$refs.audio.play();
        this.paused = false;
        this.UpdataTime();
      } else {
        this.$refs.audio.pause();
        this.paused = true;
        clearInterval(this.$store.state.id);
      }
    },
    UpdataTime() {
      this.$store.state.id = setInterval(() => {
        this.$store.commit('setCurrentTime', this.$refs.audio.currentTime);
        // console.log(this.$refs.audio.currentTime);
      }, 1000);
    },
  },
};
</script>

<style lang="less" scoped>
.palyController {
  width: 7.5em;
  height: 0.8rem;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #ccc;
  background-color: #fff;
  .left {
    display: flex;
    padding-left: 0.2rem;
    img {
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      border: 8px solid black;
    }
    span {
      padding-left: 0.2rem;
      font-size: 0.05rem;
      line-height: 1rem;
      color: #999;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
    }
  }
  .right {
    display: flex;
    .icon {
      width: 0.4rem;
      height: 0.4rem;
      margin: 0.2rem;
    }
  }
}
</style>
