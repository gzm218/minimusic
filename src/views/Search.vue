<template>
  <div id="searchPage">
    <search-top></search-top>
    <play-controller></play-controller>
  </div>
</template>

<script>
import searchTop from '../components/SearchView/searchTop';
import playController from '../components/playController.vue';
export default {
  name: 'search',
  components: { searchTop, playController },
};
</script>

<style></style>
