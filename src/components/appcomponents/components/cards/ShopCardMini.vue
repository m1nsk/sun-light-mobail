<template>
  <custom-card>
    <img slot="img" class="shop__banner" src="static/logo.png">
    <div slot="info">
      <div><b>{{shopData.title}}</b></div>
      <div>{{shopData.price}}</div>
    </div>
    <img slot="icons" src="/static/myIcons/right-arrow.svg" class="shop__icon">
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
          price: '16 000-'
        }
      }
    }
  }
</script>

<style lang="less" scoped>

  .shop__banner
  {
    width: 64px;
    height: 64px;
  }

  .shop__icon
  {
    vertical-align: middle;
    width: 18px;
    height: 18px;
  }

</style>
