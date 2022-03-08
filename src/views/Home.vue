<template>
  <div class="home">
    <top-nav></top-nav>
    <suspense><swiper-com></swiper-com></suspense>
    <suspense><function-nav></function-nav></suspense>
    <suspense><find-son></find-son></suspense>
    <play-controller></play-controller>
  </div>
</template>

<script>
import topNav from '../components/HomeView/topNav.vue';
import swiperCom from '../components/HomeView/swiperCom.vue';
import functionNav from '../components/HomeView/functionNav.vue';
import findSon from '../components/HomeView/findSon.vue';
import playController from '../components/playController';
export default {
  name: 'Home',
  components: {
    topNav,
    swiperCom,
    functionNav,
    findSon,
    playController,
  },
  setup() {},
};
</script>

<style lang="less" scoped>
.swipe {
  margin: 0.2rem;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  border-radius: 0.2rem;
}
</style>
