<template>
  <custom-card>
    <img slot="img" src="/static/logo.png" class="banner">
    <div slot="info">
      <div class="title"><span>{{shopData.title}}</span></div>
      <div class="price"><span>{{shopData.price}}</span></div>
      <div class="shop"><span>{{shopData.shop}}</span></div>
      <div class="status"><span>{{shopData.status}}</span></div>
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

  .banner
  {
    width: 64px;
    height: 64px;
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
