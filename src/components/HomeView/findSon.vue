<template>
  <div class="top">
    <div class="topLift">
      <span>推荐歌单</span>
    </div>
    <div class="topRight">
      <span>更多 ></span>
    </div>
  </div>
  <div class="button">
    <van-swipe :show-indicators="false" :loop="false" :width="100">
      <van-swipe-item class="buttonItem" v-for="item in sonList" :key="item.id">
        <router-link :to="{ path: '/listview', query: { id: item.id } }"
          ><img :src="item.picUrl" alt="" />
          <div class="bofang">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-24gl-play"></use>
            </svg>
            <span>{{ changeValue(item.playCount) }}</span>
          </div>
          <span>{{ item.name }}</span>
        </router-link>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vant';
import { reactive } from 'vue';
import { sonRecommend } from '../../api/index';
import changeValue from '../../api/changeValue';
export default {
  name: 'findSon',
  components: { [Swipe.name]: Swipe, [SwipeItem.name]: SwipeItem },
  async setup() {
    let sonList = reactive([]);
    let res = await sonRecommend();
    sonList = res.data.result;

    changeValue();
    return { sonList, changeValue };
  },
};
</script>

<style lang="less" scoped>
.top {
  display: flex;
  justify-content: space-between;
  .topLift {
    font-size: 0.3rem;
    padding-left: 0.3rem;
    padding-top: 0.2rem;
    font-weight: 900;
  }
  .topRight {
    padding-right: 0.5rem;
    padding-top: 0.2rem;
    font-size: 0.3rem;
    span {
      padding: 0.02rem 0.1rem;
      border: #c8c9cc 0.0225rem solid;
      font-size: 0.00625rem;
      border-radius: 0.9375rem;
    }
  }
}
.button {
  display: flex;
  margin-top: 0.04rem;
  .buttonItem:first-child {
    margin-left: 0.2rem;
  }
  .buttonItem {
    display: flex;
    position: relative;
    flex-direction: column;
    width: 0.65rem;
    padding: 0.1rem;
    // height: 1rem;
    .bofang {
      position: absolute;
      top: 0.2rem;
      right: 0.2rem;
      display: flex;
      justify-content: center;
      width: 1rem;
      height: 0.26rem;
      // border: 0.001rem solid #a9a9a9;
      border-radius: 0.9375rem;
      color: white;
      // 盒子半透明
      background-color: rgb(128, 128, 128);
      opacity: 0.9;
      align-items: center;
      .icon {
        width: 20%;
        //图标变色是一个问题
        fill: white;
      }
      span {
        padding-top: 0.18rem;
        //字体缩小
        transform: scale(0.6);
      }
    }
    img {
      width: 100%;
      border-radius: 8%;
    }
    span {
      padding-top: 0rem;
      font-size: 0.2rem;
      height: 0.66rem;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
  }
}
</style>
