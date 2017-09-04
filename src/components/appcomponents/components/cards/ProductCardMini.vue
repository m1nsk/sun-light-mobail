<template>
  <custom-card>
    <img slot="img" class="shop__banner" :src="productData.image.mini">
    <div slot="info" class="info-wrapper">
      <div><b>{{productData.label}}</b></div>
      <div>{{productData.cost}}</div>
    </div>
    <div slot="icons">
      <img slot="icons" src="/static/myIcons/right-arrow.svg" class="shop__right-arrow">
    </div>
  </custom-card>
</template>

<script>
  import CustomCard from 'appComponents/components/cards/CustomCard.vue'
  export default {
    components: {
      CustomCard
    },
    props: ['productData'],
    data () {
      return {
      }
    }
  }
</script>

<style lang="less" scoped>
  .shop__right-arrow
  {
    height: 18px;
    width: 18px;
    position: absolute;
    top: 50% - 9px;
    right: 7px;
  }

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

  .shop__icon
  {
    vertical-align: middle;
    width: 18px;
    height: 18px;
  }

</style>
