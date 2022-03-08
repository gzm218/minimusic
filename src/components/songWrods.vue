<template>
  <div class="songWrods">
    <div
      class="bg"
      :style="{ backgroundImage: `url(${playDetail.al.picUrl})` }"
    ></div>
    <div class="top">
      <div class="left" @click="$emit('back')">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zuojiantou"></use>
        </svg>
      </div>
      <div class="center">
        <div class="title">
          <!-- marquee是文字滚动便签 -->
          <marquee behavior="scroll" diretcion="left">
            {{ playDetail.name }}</marquee
          >
        </div>
        <div class="author">{{ playDetail.ar[0].name }}</div>
      </div>
      <div class="right">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-share"></use>
        </svg>
      </div>
    </div>
    <div class="playContent" v-show="isLyric">
      <img
        class="needle"
        :class="{ active: !paused }"
        src="../assets/img/needle-ab.png"
        alt=""
      />
      <img class="jiaopian" src="../assets/img/jiaopian.png" alt="" />
      <img class="playImg" :src="playDetail.al.picUrl" alt="" />
    </div>
    <div class="playLyric" v-show="!isLyric" ref="playLyric">
      <p
        :class="{
          active:
            currentTime * 1000 >= item.pre && currentTime * 1000 < item.time,
        }"
        v-for="(item, index) in $store.getters.lyricList"
        :key="index"
      >
        {{ item.lyric }}
      </p>
    </div>
    <div class="xiaotubiao">
      <div class="collect">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shoucang"></use>
        </svg>
      </div>
      <div class="download">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-download"></use>
        </svg>
      </div>
      <div class="sing">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-huaban"></use>
        </svg>
      </div>
      <div class="comment">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-comments"></use>
        </svg>
      </div>
      <div class="more">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-gengduo"></use>
        </svg>
      </div>
    </div>
    <div class="progress"></div>
    <div class="footer">
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xunhuan"></use>
        </svg>
      </div>
      <div @click="goPlay(-1)">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shangyishou"></use>
        </svg>
      </div>
      <div @click="play">
        <svg v-if="paused" class="icon bofang" aria-hidden="true">
          <use xlink:href="#icon-bofang1"></use>
        </svg>
        <svg v-else class="icon bofang" aria-hidden="true">
          <use xlink:href="#icon-bofang"></use>
        </svg>
      </div>
      <div @click="goPlay(1)">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-xiayigexiayishou"></use>
        </svg>
      </div>
      <div>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bofangliebiao"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { ref } from 'vue';
export default {
  name: 'songWrods',
  props: ['playDetail', 'paused', 'play'],

  setup() {
    let isLyric = ref(false);
    return {
      isLyric,
    };
  },
  methods: {
    goPlay(num) {
      let index = this.playCurrentIndex + num;
      if (index < 0) {
        index = this.playlist.length - 1;
      } else if (index == this.playlist.length) {
        index = 0;
      }
      this.$store.commit('setPlayIndex', index);
    },
  },
  computed: {
    ...mapState(['lyric', 'currentTime', 'playlist', 'playCurrentIndex']),
  },

  watch: {
    currentTime: function (newValue) {
      let p = document.querySelector('p.active');
      let offsetTop = p.offsetTop;
      this.$refs.playLyric.scrollTop = offsetTop * 0.8;
    },
  },
};
</script>

<style lang="less" scoped>
.songWrods {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  .bg {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-size: auto 100%;
    background-position: center;
    filter: blur(60px);
  }
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 7.5rem;
    height: 1.2rem;
    position: absolute;
    left: 0;
    top: 0;
    padding: 0 0.4em;
    .center {
      .title {
        font-size: 0.3rem;
        color: #fff;
        marquee {
          // 剩余宽度都是它的
          width: 5rem;
          flex: 1;
        }
      }
      .author {
        text-align: center;
        font-size: 0.2rem;
        color: rgba(102, 16, 16, 0.8);
      }
    }
    .icon {
      fill: #fff;
      width: 0.7rem;
      height: 0.7rem;
    }
  }
  .playContent {
    position: absolute;
    width: 7.5rem;
    height: 7.5rem;
    left: 0;
    top: 1.5rem;
    .needle {
      width: 2rem;
      height: auto;
      position: absolute;
      left: 3.5rem;
      z-index: 1;
      transform-origin: 0.3rem top;
      transform: rotate(-20deg);
      transition: all 1s;
    }
    .needle.active {
      width: 2rem;
      height: auto;
      position: absolute;
      left: 3.5rem;
      z-index: 1;
      transform-origin: 0.3rem top;
      transform: rotate(0deg);
      transition: all 1s;
    }
    .jiaopian {
      width: 5rem;
      height: auto;
      position: absolute;
      left: calc(50% - 2.475rem);
      top: 2rem;
    }
    .playImg {
      width: 3.2rem;
      height: 3.2rem;
      border-radius: 50%;
      position: absolute;
      left: calc(50% - 1.6rem);
      top: 2.9rem;
    }
  }
  .playLyric {
    position: absolute;
    width: 7.5rem;
    height: 7rem;
    left: 0;
    top: calc(50% - 4rem);
    font-size: 0.2rem;
    overflow: scroll;
    text-align: center;
    p {
      padding-top: 0.15rem;
      color: #cccc;
    }
    .active {
      color: white;
    }
  }
  .xiaotubiao {
    width: 7.5rem;
    height: 1.5rem;
    position: absolute;
    bottom: 2rem;
    left: 0;
    display: flex;
    justify-content: space-between;
    padding: 0 0.6rem;
    div {
      .icon {
        fill: #cccc;
        width: 0.5rem;
        height: 0.5rem;
      }
    }
  }
  .progress {
    position: absolute;
    bottom: 1.5rem;
    width: 100%;
    border: solid 2px black;
  }
  .footer {
    width: 7.5rem;
    height: 1.5rem;
    position: absolute;
    bottom: 0.2rem;
    left: 0;
    display: flex;
    justify-content: space-between;
    padding: 0 0.6rem;

    .icon {
      fill: white;
      width: 0.4rem;
      height: 0.4rem;
    }
    .bofang {
      width: 0.8rem;
      height: 0.8rem;
      margin-top: 0.4rem;
    }
  }
}
</style>
