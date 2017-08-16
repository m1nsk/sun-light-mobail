<template>
  <div class="shopWrapper">
    <div class="bannerMini">
      <span class="helper"></span>
      <img src="/static/logo.png" class="banner">
    </div>
    <div class="shopInfo">
      <div><b>{{shopData.title}}</b></div>
      <div>{{shopData.price}}</div>
    </div>
    <div class=arrowArea>
      <span class="helper"></span>
      <img src="/static/myIcons/right-arrow.svg" class="icon">
    </div>
  </div>
</template>

<script>
  export default {
    components: {
    },
    data () {
      return {
        shopData: {
          title: 'Золотое колечко',
          price: '16 000-'
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .shopInfo
  {
    height: 100%;
    width: 60%;
    display: inline-block;
    float: left;
  }

  .shopWrapper
  {
    width: 100%;
    height: 80px;
    position: relative;
    font-size: 16px;
    line-height: 18px;
    padding: 0 10px;
  }

  .bannerMini
  {
    width: 20%;
    height: 100%;
    white-space: nowrap; /* this is required unless you put the helper span closely near the img */
    display: inline-block;
    float: left;
  }

  .icon
  {
    vertical-align: middle;
    width: 18px;
    height: 18px;
  }

  .banner
  {
    vertical-align: middle;
    width: 40px;
    height: 30px;
  }

  .arrowArea {
    height: 100%;    /* equals max image height */
    width: 20%;
    white-space: nowrap; /* this is required unless you put the helper span closely near the img */
    text-align: center;
    display: inline-block;
    float: right;
  }

  .helper {
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }
</style>
