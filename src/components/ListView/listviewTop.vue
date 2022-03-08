<template>
  <div class="listViewTop">
    <div class="listViewTopNav">
      <img class="bgi" :src="playlist.coverImgUrl" alt="" />
      <div class="back" @click="$router.back()">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zuojiantou"></use>
        </svg>
        <span class="title">歌单</span>
      </div>
      <div class="right">
        <svg class="icon sousuo" aria-hidden="true">
          <use xlink:href="#icon-sousuo"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-sangedian-type-1"></use>
        </svg>
      </div>
    </div>
    <div class="content">
      <div class="contentTop">
        <div class="contentTopLeft">
          <img :src="playlist.coverImgUrl" alt="" />
          <div class="playCount">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-24gl-play"></use>
            </svg>
            <span>{{ changeValue(playlist.playCount) }}</span>
          </div>
        </div>
        <div class="contentTopRight">
          <h3>{{ playlist.name }}</h3>
          <div class="author">
            <img :src="playlist.creator?.avatarUrl" alt="" />
            <span>{{ playlist.creator?.nickname }}</span>
          </div>
          <div class="description">
            {{ playlist.description }}
          </div>
        </div>
      </div>
      <div class="contentButton">
        <div class="iconItem">
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-comments"></use>
            </svg>
          </div>
          <span> {{ playlist.commentCount }}</span>
        </div>
        <div class="iconItem">
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-share"></use>
            </svg>
          </div>
          <span> {{ playlist.shareCount }}</span>
        </div>
        <div class="iconItem">
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-xiazai"></use>
            </svg>
          </div>
          <span>下载</span>
        </div>
        <div class="iconItem">
          <div>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-select"></use>
            </svg>
          </div>
          <span>多选</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import changeValue from '../../api/changeValue';
export default {
  name: 'listviewTop',
  //组件间通信
  props: ['playlist'],
  setup() {
    changeValue();
    return { changeValue };
  },
};
</script>

<style lang="less" scoped>
.listViewTop {
  width: 7.5rem;
  padding: 0 0.4rem;
  height: 6rem;
  .bgi {
    position: fixed;
    left: 0;
    top: 0;
    width: 7.5rem;
    height: auto;
    //层级
    z-index: -1;
    //
    filter: blur(35px);
  }
  .listViewTopNav {
    display: flex;
    justify-content: space-between;
    height: 1.2rem;
    align-items: center;
    font-size: 0.35rem;
    .icon {
      width: 0.5rem;
      height: 0.5rem;
      fill: white;
    }
    .title {
      margin-left: 0.4rem;
    }
    .sousuo {
      margin-right: 0.5rem;
    }
  }
  .back,
  .right {
    display: flex;
    // justify-content:space-around
    color: white;
  }
}
.content {
  .contentTop {
    display: flex;
    justify-content: space-between;
    padding: 0.2rem 0;
    height: 3.125rem;
    .contentTopLeft {
      position: relative;
      img {
        width: 2.7rem;
        height: 2.7rem;
        border-radius: 4%;
      }
      .playCount {
        position: absolute;
        // height: 0.05rem;
        top: 0.1rem;
        right: 0.1rem;
        font-size: 0.24rem;
        color: white;
        display: flex;
        align-items: center;
        font-weight: 900;
        //icon还是不能变色
        .icon {
          fill: white;
        }
      }
      span {
        font-size: 0.0625rem;
      }
    }
    .contentTopRight {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 3.6rem;
      margin-left: 0.5rem;
      h3 {
        font-size: 0.3rem;
        color: white;
      }
      .author {
        display: flex;
        // margin: 0.2rem 0;
        font-size: 0.05rem;
        width: 3.5rem;
        align-items: center;
        img {
          width: 0.6rem;
          height: 0.6rem;
          border-radius: 50%;
          margin-right: 0.2rem;
        }
        span {
          width: 2rem;
          color: #ccc;
        }
      }
      .description {
        font-size: 0.00625rem;
        color: #ccc;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
    }
  }
  .contentButton {
    display: flex;
    justify-content: space-around;
    text-align: center;
    .iconItem {
      display: flex;
      flex-direction: column;
      div {
        height: 1.08rem;
      }
      .icon {
        width: 0.6rem;
        height: 0.6rem;
        fill: white;
      }
      span {
        font-size: 0.25rem;
        color: white;
      }
    }
  }
}
</style>
