<template>
  <div>
    <img :src="bannerImg" class="banner"/>
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
    margin: auto;
    width: 230px;
    height: 87px;
  }
</style>
