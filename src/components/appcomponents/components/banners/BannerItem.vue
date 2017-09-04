<template>
  <div class="banner">
    <img v-lazy="bannerImg" class="banner__img"/>
  </div>
</template>

<script>
  export default {
    props: ['bannerImg']
  }
</script>

<style lang="less">
  .banner
  {
    margin: 0 auto;
    width: 230px;
    height: 87px;
  }

  .banner__img
  {
    width: 100%;
    height: 100%;
  }
</style>
