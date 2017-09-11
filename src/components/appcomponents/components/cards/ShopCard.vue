<template>
  <custom-card>
    <img slot="img" class="banner" src="static/logo.png">
    <div slot="info" class="wrapper">
      <div class="shop-station">{{ shopData.label }}</div>
      <div class="shop-station">{{ shopData.address }}</div>
      <div class="shop-station">{{ shopData.working_hours }}</div>
      <div class="shop-phone">{{ shopData.phone }}</div>
      <div class="shop-station">{{ shopData.status }}</div>
    </div>
    <div slot="icons">
      <heart-mark-button :liked="shopData.like" @like="onMarkedClicked" class="heart-mark"></heart-mark-button>
      <img src="/static/myIcons/right-arrow.svg" class="right-arrow">
    </div>
  </custom-card>
</template>

<script>
  import HeartMarkButton from 'appComponents/components/buttons/HeartMarkButton.vue'
  import CustomCard from 'appComponents/components/cards/CustomCard.vue'
  export default {
    components: {
      CustomCard,
      HeartMarkButton
    },
    props: ['shopData'],
    methods: {
      onMarkedClicked () {
        console.log('marked')
        this.$store.dispatch('toggleMarketLike', {id: this.shopData.id})
      }
    }
  }
</script>

<style lang="less" scoped>
  .wrapper
  {
    display: flex;
    flex-direction: column;
    width: 150px;
    overflow: hidden;
    padding-left: 10px;
  }

  .banner
  {
    width: 64px;
    height: 64px;
  }

  .right-arrow
  {
    height: 18px;
    width: 18px;
    position: absolute;
    top: 50% - 9px;
    right: 7px;
  }

  .heart-mark
  {
    height: 32px;
    width: 32px;
    position: absolute;
    top: 0;
    right: 0;
  }

  .shop-phone
  {
    font-size: 12px;
  }
</style>
