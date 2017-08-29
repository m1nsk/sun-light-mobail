<template>
  <list>
    <list-item>
      <div class="item-media"><img class="shop__banner" src="static/logo.png"></div>
      <div class="item-content">
        <div class="item-title-row">
          <div class="item-title">
            <div class="info-wrapper">
              <div><b>{{ shopData.station }}</b></div>
              <div>{{ shopData.address }}</div>
              <div>{{ shopData.worktime }}</div>
              <div>{{ shopData.status }}</div>
            </div>
          </div>
        </div>
      </div>
    </list-item>
    <heart-mark-component class="shop__heart-mark on-top"></heart-mark-component>
    <div class="shop_right-arrow on-top">
      <img src="/static/myIcons/right-arrow.svg" class="shop__icon">
    </div>
  </list>
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
  .shop__banner
  {
    width: 64px;
    height: 64px;
  }

  .shop__icon
  {
    height: 18px;
    width: 18px;
    display: inline-block;
    float: right;
  }

  .shop__heart-mark
  {
    position: absolute;
    top: 0;
    right: 0;
  }

  .shop_right-arrow
  {
    position: absolute;
    top: 50%;
    right: 8px;
  }

  .info-wrapper
  {
    display: inline-block;
    width: 140px;
    overflow: hidden;
  }

  .info-wrapper > div
  {
    overflow: hidden;
  }

  .on-top
  {
    z-index: 1;
  }
</style>
