<template>
  <div class="iconList">
    <van-swipe
      :show-indicators="false"
      :loop="false"
      :width="75"
      show-indicators="false"
    >
      <van-swipe-item v-for="item in ballIcon" :key="item.id" class="iconItem">
        <img class="iconImg" :src="item.iconUrl" alt="" />
        <span class="iconText">{{ item.name }}</span>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vant';
import { reactive } from '@vue/reactivity';
import { getball } from '../../api/index';

export default {
  name: 'functionNav',
  components: { [Swipe.name]: Swipe, [SwipeItem.name]: SwipeItem },
  async setup() {
    let ballIcon = reactive([]);
    let res = await getball();
    ballIcon = res.data.data;
    return { ballIcon };
  },
};
</script>

<style lang="less" scoped>
.iconList {
  display: flex;
  border-bottom: 1px solid #dcdee0;
  padding: 0 0.2rem;
  .iconItem {
    display: flex;
    flex-direction: column;
    padding: 0 0.2rem;
    height: 1.8rem;
    .iconImg {
      width: 100%;
      background-color: pink;
      border-radius: 50%;
      text-align: center;
    }
    .iconText {
      text-align: center;
      font-size: 0.0625rem;
    }
  }
}
</style>
