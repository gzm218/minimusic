<template>
  <div class="swiper">
    <van-swipe
      indicator-color="orangered"
      class="my-swipe"
      :autoplay="5000"
      lazy-render
    >
      <van-swipe-item v-for="image in images" :key="image">
        <img :src="image.imageUrl" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import { reactive } from 'vue';
import { Swipe, SwipeItem } from 'vant';
import { banner } from '../../api/index';
export default {
  name: 'swiperCom',
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  },
  async setup() {
    let images = reactive([]);
    let res = await banner();
    images = res.data.banners;
    return { images };
  },
};
</script>

<style lang="less" scoped>
.swiper {
  margin: 0.2rem;
}
.van-swipe-item {
  padding: 0.1125rem;
  height: 2.8rem;
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  img {
    width: 100%;
    border-radius: 0.1rem;
  }
}
</style>
