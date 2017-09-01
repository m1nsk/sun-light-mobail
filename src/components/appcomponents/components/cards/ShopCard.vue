<template>
  <div class="shop-card">
    <div class="content-wrapper">
      <div class="item-media"><img class="shop__banner" src="static/logo.png"></div>
      <div class="info-wrapper">
        <div class="shop-station">{{ shopData.label }}</div>
        <div class="shop-station">{{ shopData.address }}</div>
        <div class="shop-station">{{ shopData.working_hours }}</div>
        <div class="shop-phone">{{ shopData.phone }}</div>
        <div class="shop-station">{{ shopData.status }}</div>
      </div>
    </div>
    <div class="icon-wrapper on-top">
      <heart-mark-component class="shop__heart-mark"></heart-mark-component>
      <img src="/static/myIcons/right-arrow.svg" class="shop__right-arrow">
    </div>
  </div>
</template>

<script>
  import HeartMarkComponent from 'appComponents/components/buttons/HeartMarkButton.vue'
  import { List, ListItem } from '~/components/list'
  export default {
    components: {
      List,
      ListItem,
      HeartMarkComponent
    },
    props: ['shopData'],
    data () {
      return {
      }
    }
  }
</script>

<style lang="less" scoped>
  .shop-card
  {
    display: flex;
    justify-content:space-between;
    border-top: 1px solid #e7e7e7;
    padding: 10px 0;
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

  .content-wrapper
  {
    display: flex;
    justify-content: flex-start;
  }

  .info-wrapper
  {
    display: flex;
    justify-content: flex-start;
    align-content: flex-start;
    flex-direction: column;
    overflow: hidden;
    padding-left: 10px;
  }

  .info-wrapper > div
  {
    overflow: hidden;
  }

  .icon-wrapper
  {
    position: relative;
    width: 32px;
  }

  .on-top
  {
    z-index: 1;
  }

  .shop-phone
  {
    font-size: 12px;
  }
</style>
