<template>
  <div class="shopWrapper">
    <div class="bannerMini">
      <span class="helper"></span>
      <img src="/static/logo.png" class="banner">
    </div>
    <div class="shopInfo">
      <div class="helper">
          <div class="title"><span>{{shopData.title}}</span></div>
          <div class="price"><span>{{shopData.price}}</span></div>
          <div class="shop"><span>{{shopData.shop}}</span></div>
          <div class="status"><span>{{shopData.status}}</span></div>
      </div>
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
          price: '16 000-',
          shop: 'МЕГА ДЫБЕНКО',
          status: 'В НАЛИЧИИ можно забрать сегодня'
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .shopInfo
  {
    height: 100%;
    width: 70%;
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
    width: 30%;
    height: 100%;
    white-space: nowrap; /* this is required unless you put the helper span closely near the img */
    display: inline-block;
    float: left;
  }

  .banner
  {
    vertical-align: middle;
    width: auto;
    height: 90%;
  }

  .helper {
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }

  .title
  {
    height: 12px;
    display: table;
  }

  .title > span
  {
    font-size: 12px;
    display: table-cell;
    vertical-align: top;
  }

  .price
  {
    height: 32px;
    display: table;
    font-weight: bold;
  }

  .price > span
  {
    font-size: 18px;
    display: table-cell;
    vertical-align: middle;
  }

  .shop
  {
    height: 24px;
    display: table;
  }

  .shop > span
  {
    font-size: 14px;
    display: table-cell;
    vertical-align: middle;
  }

  .status
  {
    height: 14px;
    display: table;
  }

  .status > span
  {
    font-size: 10px;
    display: table-cell;
    vertical-align: middle;
  }
</style>
