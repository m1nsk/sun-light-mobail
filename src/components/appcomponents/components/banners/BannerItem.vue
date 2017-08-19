<template>
  <div class="banner">
    <img :src="bannerImg"/>
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

  .banner > img
  {
    width: 100%;
    height: 100%;
  }
</style>
