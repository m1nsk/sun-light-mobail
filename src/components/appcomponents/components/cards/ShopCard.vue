<template>
  <custom-card>
    <img slot="img" class="shop__banner" src="static/logo.png">
    <div slot="info" class="info-wrapper">
      <div class="shop-station">{{ shopData.label }}</div>
      <div class="shop-station">{{ shopData.address }}</div>
      <div class="shop-station">{{ shopData.working_hours }}</div>
      <div class="shop-phone">{{ shopData.phone }}</div>
      <div class="shop-station">{{ shopData.status }}</div>
    </div>
    <div slot="icons">
      <heart-mark-component class="shop__heart-mark"></heart-mark-component>
      <img src="/static/myIcons/right-arrow.svg" class="shop__right-arrow">
    </div>
  </custom-card>
</template>

<script>
  import HeartMarkComponent from 'appComponents/components/buttons/HeartMarkButton.vue'
  import CustomCard from 'appComponents/components/cards/CustomCard.vue'
  export default {
    components: {
      CustomCard,
      HeartMarkComponent
    },
    props: ['shopData']
  }
</script>

<style lang="less" scoped>
  .info-wrapper
  {
    display: flex;
    flex-direction: column;
    width: 150px;
    overflow: hidden;
    padding-left: 10px;
  }

  .shop__banner
  {
    width: 64px;
    height: 64px;
  }

  .shop__right-arrow
  {
    height: 18px;
    width: 18px;
    position: absolute;
    top: 50% - 9px;
    right: 7px;
  }

  .shop__heart-mark
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
