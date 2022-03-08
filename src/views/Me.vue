<template>
  <div class="back" @click="$router.back()">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-zuojiantou"></use>
    </svg>
  </div>
  <div>个人中心</div>
</template>

<script>
export default {
  name: 'me',
};
</script>

<style></style>
