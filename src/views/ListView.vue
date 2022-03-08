<template>
  <listview-top :playlist="musicDetail.playlist"></listview-top>
  <musiclist :musicDetail="musicDetail"></musiclist>
  <play-controller></play-controller>
</template>

<script>
import { getMusicDetail, trackall } from '../api/index';
import { onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';
import listviewTop from '../components/ListView/listviewTop';
import musiclist from '../components/ListView/musiclist';
import store from '../store/index';
import PlayController from '../components/playController.vue';
export default {
  name: 'listview',
  components: {
    listviewTop,
    musiclist,
    PlayController,
  },
  setup() {
    let musicDetail = reactive({ musiclist: {}, playlist: {} });
    const route = useRoute();

    onMounted(async () => {
      let id = route.query.id;
      let res = await getMusicDetail(id);
      musicDetail.playlist = res.data.playlist;
      let allmusic = await trackall(id);
      musicDetail.musiclist = allmusic.data.songs;
      store.commit('setPlayList', musicDetail.musiclist);
    });

    return {
      musicDetail,
    };
  },
};
</script>

<style lang="less" scoped></style>
