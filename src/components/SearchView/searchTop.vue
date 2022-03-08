<template>
  <div class="searchTop">
    <div class="searchTopNav">
      <div class="back" @click="$router.back()">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-zuojiantou"></use>
        </svg>
      </div>
      <div class="right">
        <input
          type="text"
          v-model="search.searchWrods"
          :placeholder="search.placeholder"
          @keydown.enter="saveKeyWrod()"
        />
      </div>
    </div>
    <div class="history">
      <div class="left">历史</div>
      <div class="right">
        <van-swipe class="my-swipe" :show-indicators="false" :autoplay="false">
          <van-swipe-item
            @click="historySearch(item)"
            class="keywordItem"
            v-for="(item, i) in search.keywordList"
            :key="i"
          >
            {{ item }}
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
  </div>
  <div class="list">
    <div
      class="musiclist"
      v-for="(item, index) in search.searchSongs"
      :key="index"
      @click="setPlay(item, index)"
    >
      <div class="detial">
        <span class="name">{{ item?.name }}</span>
        <span class="singer"
          >{{ item.artists[0]?.name }}/{{ item.artists[1]?.name }}-{{
            item.album?.name
          }}</span
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
</template>

<script>
import { reactive, onBeforeMount } from 'vue';
import { Swipe, SwipeItem } from 'vant';
import { cloudsearch } from '../../api/index';
export default {
  name: 'searchTop',
  //组件间通信
  props: ['placeholder'],
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  },
  setup() {
    let search = reactive({
      placeholder: '陈奕迅',
      keywordList: [],
      searchWrods: '',
      searchSongs: [],
    });

    const saveKeyWrod = async () => {
      search.keywordList.push(search.searchWrods);
      search.keywordList = Array.from(new Set(search.keywordList));
      localStorage.keywordList = JSON.stringify(search.keywordList);
      let res = await cloudsearch(search.searchWrods);
      search.searchSongs = res.data.result.songs;
      search.searchWrods = '';
    };
    const historySearch = (keyword) => {
      search.searchWrods = keyword;
      saveKeyWrod(search.searchWrods);
    };

    onBeforeMount(() => {
      search.keywordList = localStorage.keywordList
        ? JSON.parse(localStorage.keywordList)
        : [];
    });

    return {
      search,
      saveKeyWrod,
      historySearch,
    };
  },
  methods: {
    setPlay(item, i) {
      console.log(item);
      this.$store.commit('setPlayList', item.id);
      this.$store.commit('setPlayIndex', this.$store.state.playlist.length - 1);
    },
  },
};
</script>

<style lang="less" scoped>
.searchTop {
  width: 7.5rem;
  height: 100vh -1.2rem;
  overflow: scroll;
  padding: 0 0.4rem;
  height: 3rem;
  .searchTopNav {
    display: flex;
    justify-content: start;
    height: 1.2rem;
    width: 100%;
    align-items: center;
    font-size: 0.35rem;
    .icon {
      width: 0.5rem;
      height: 0.5rem;
      fill: red;
    }
    .right {
      padding: 0 0 0 0.4rem;
      flex: 1;
      input {
        border: none;
        outline: none;
        border-bottom: 1.8px solid #666;
        width: 100%;
      }
    }
    .back,
    .right {
      color: black;
    }
  }
  .history {
    display: flex;
    height: 0.8rem;
    align-items: center;
    .left {
      width: 1.8rem;
      font-size: 0.3rem;
      font-weight: 900;
    }
    .right {
      display: flex;
      // flex-wrap: wrap;
      color: #666;
      margin-left: 0.3rem;
      .keywordItem {
        width: 2rem !important;
        border-radius: 15px;
        background-color: #f3f3f3;
        font-size: 0.3rem;
        height: 0.8rem;
        padding: 0 0.4rem;
        line-height: 0.8rem;
      }
    }
  }
}
.list {
  background: #ffffff;
  .musiclist {
    display: flex;
    justify-content: space-between;
    font-size: 0.4rem;
    height: 1.2rem;
    align-items: center;
    margin: 0 0 0 0.4rem;
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
</style>
