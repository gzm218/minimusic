<template>
  <router-view />
  <play-controller></play-controller>
</template>
<script>
import PlayController from './components/playController';
export default {
  components: { PlayController },
  mounted() {
    let userData = JSON.parse(localStorage.userDate);
    this.$store.commit('setUser', userData);
  },
};
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: '微软雅黑';
  // background-color: #ebedf0;
}
.icon {
  width: 0.3rem;
  height: 0.3rem;
}
a {
  color: #333;
  text-decoration: none;
}
</style>
