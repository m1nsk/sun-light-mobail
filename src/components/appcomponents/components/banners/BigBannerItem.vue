<template>
  <img :src="bannerImg" class="banner"/>
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
    display: inline-block;
    width: 230px;
    height: 200px;
  }
</style>
