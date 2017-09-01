<template>
  <custom-card>
    <img slot="img" src="/static/logo.png" class="shop-card__banner">
    <div slot="info">
      <div class="shop-card__title"><span>{{shopData.title}}</span></div>
      <div class="shop-card__price"><span>{{shopData.price}}</span></div>
      <div class="shop-card__shop"><span>{{shopData.shop}}</span></div>
      <div class="shop-card__status"><span>{{shopData.status}}</span></div>
    </div>
  </custom-card>
</template>

<script>
  import CustomCard from 'appComponents/components/cards/CustomCard.vue'
  export default {
    components: {
      CustomCard
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

  .shop-card__banner
  {
    width: 64px;
    height: 64px;
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
