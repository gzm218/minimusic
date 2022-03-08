<template>
  <div class="musiclist">
    <div class="vip">
      <div class="left">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-vip"></use>
        </svg>
        <span>
          包含{{ musicDetail.playlist.creator?.vipType }}首VIP专享歌曲
        </span>
      </div>
      <div class="right">
        <span>首开VIP仅售5元</span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-right-1-copy"></use>
        </svg>
      </div>
    </div>
    <div class="list">
      <div class="listTop">
        <div class="left">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-bofang1"></use>
          </svg>
          <span class="text1"> 播放全部 </span>
          <span class="text2">(共{{ musicDetail.playlist.trackCount }}首)</span>
        </div>
        <div class="right">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-tianjia"></use>
          </svg>
          <span
            >收藏({{ changeValue(musicDetail.playlist.subscribedCount) }})</span
          >
        </div>
      </div>
      <div
        class="musiclist"
        v-for="(item, index) in musicDetail.musiclist"
        :key="item.al.id"
        @click="setPlayIndex(index)"
      >
        <div class="index">{{ index + 1 }}</div>
        <div class="detial">
          <span class="name" :title="item.name">{{ item.name }}</span>
          <span class="singer" :title="item.ar[0].name - item.al.name"
            >{{ item.ar[0].name }}-{{ item.al.name }}</span
          >
        </div>
        <div class="bofang">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-tuya-"></use>
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-sangedian-type-1"></use>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import changeValue from '../../api/changeValue';

export default {
  name: 'musiclist',
  props: ['musicDetail'],
  setup() {
    function playmusic() {}
    return {
      changeValue,
      playmusic,
    };
  },
  methods: {
    ...mapMutations(['setPlayIndex']),
  },
};
</script>

<style lang="less" scoped>
.musiclist {
  .vip {
    display: flex;
    justify-content: space-between;
    height: 1.4rem;
    background: linear-gradient(
      to right,
      #ede5df,
      #e4e3e2,
      #e3e2e1,
      #e0dfdf,
      #e2e1e5
    );
    align-items: center;
    border-radius: 0.3rem 0.3rem 0 0;
    .left {
      font-size: 0.3rem;
      margin-left: 0.2rem;
      display: flex;
      vertical-align: middle;
      align-items: center;
      .icon {
        width: 0.5rem;
        height: 0.5rem;
        fill: red;
      }
      span {
        padding-left: 0.3rem;
      }
    }
    .right {
      display: flex;
      vertical-align: middle;
      align-items: center;
      font-size: 0.25rem;
      color: #9f9e9f;
      .icon {
        width: 0.3rem;
        height: 0.3rem;
        fill: #9f9e9f;
      }
      span {
        padding-right: 0.1rem;
      }
    }
  }
  .list {
    margin-top: -0.15rem;
    background: #ffffff;
    border-radius: 0.3rem 0.3rem 0 0;
    .listTop {
      display: flex;
      justify-content: space-between;
      height: 1.2rem;
      .left {
        display: flex;
        align-items: center;
        margin-left: 0.25rem;
        .icon {
          margin: auto;
          width: 0.45rem;
          height: 0.45rem;
        }
        .text1 {
          padding-left: 0.3rem;
          font-size: 0.3rem;
        }
        .text2 {
          font-size: 0.2rem;
          color: #bfbdbf;
        }
      }
      .right {
        display: flex;
        justify-content: space-around;
        width: 2rem;
        height: 0.8rem;
        margin-top: 0.2rem;
        margin-right: 0.1rem;
        background-color: #ff4e49;
        border-radius: 40px;
        align-items: center;
        span {
          padding-right: 0.04rem;
          font-size: 0.25rem;
          color: white;
        }
        .icon {
          width: 0.4em;
          height: 0.4rem;
          fill: white;
        }
      }
    }
    .musiclist {
      display: flex;
      justify-content: space-between;
      font-size: 0.4rem;
      height: 1.2rem;
      align-items: center;
      .index {
        padding-left: 0.3rem;
        font-size: 0.3rem;
        color: #acabac;
        width: 0.05rem;
      }
      .detial {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-left: 0.08rem;
        width: 5rem;
        .name {
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
        }
        .singer {
          padding-top: 0.04rem;
          font-size: 0.02rem;
          color: #acabac;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
        }
      }
      .bofang {
        width: 1rem;
        .icon {
          fill: #acabac;
        }
      }
    }
  }
}
</style>
