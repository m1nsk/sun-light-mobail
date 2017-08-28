<template>
  <div class="shop-card">
    <div class="shop-card__banner-wrapper">
      <img src="/static/logo.png" class="shop-card__banner">
    </div>
    <div class="shop-card__info">
        <span class="shop-card__helper"></span>
        <div class="shop-card__title"><span>{{shopData.title}}</span></div>
        <div class="shop-card__price"><span>{{shopData.price}}</span></div>
        <div class="shop-card__shop"><span>{{shopData.shop}}</span></div>
        <div class="shop-card__status"><span>{{shopData.status}}</span></div>
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
  .shop-card__info
  {
    width: 70%;
    height: 100%;
    float: left;
  }

  .shop-card
  {
    width: 100%;
    position: relative;
    font-size: 16px;
    line-height: 18px;
    padding: 0 10px;
    display: inline-block;
    vertical-align: middle;
  }

  .shop-card__banner-wrapper
  {
    width: 30%;
    max-width: 64px;
    min-width: 48px;
    height: auto;
    float: left;
  }

  .shop-card__banner
  {
    vertical-align: middle;
    padding: 5px;
    width: 100%;
  }

  .shop-card__title
  {
    height: 12px;
    display: table;
  }

  .shop-card__title > span
  {
    font-size: 12px;
    display: table-cell;
    vertical-align: top;
  }

  .shop-card__price
  {
    height: 32px;
    display: table;
    font-weight: bold;
  }

  .shop-card__price > span
  {
    font-size: 18px;
    display: table-cell;
    vertical-align: middle;
  }

  .shop-card__shop
  {
    height: 24px;
    display: table;
  }

  .shop-card__shop > span
  {
    font-size: 14px;
    display: table-cell;
    vertical-align: middle;
  }

  .shop-card__status
  {
    height: 14px;
    display: table;
  }

  .shop-card__status > span
  {
    font-size: 10px;
    display: table-cell;
    vertical-align: middle;
  }
</style>
