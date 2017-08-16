<template>
  <div>
    <list>
      <list-item>
        <div class="item-media"><img class="bannerMini" src="static/logo.png"></div>
        <div class="item-content">
          <div class="item-title-row">
            <div class="item-title">
              <div><b>{{ shopData.station }}</b></div>
              <div>{{ shopData.address }}</div>
              <div>{{ shopData.worktime }}</div>
              <div>{{ shopData.status }}</div>
            </div>
            <div class="item-after">
              <img src="/static/myIcons/right-arrow.svg" class="icon">
            </div>
          </div>
        </div>
      </list-item>
      <heart-mark class="heartItem"></heart-mark>
    </list>
  </div>
</template>

<script>
  import HeartMark from 'appComponents/menu/components/HeartMark.vue'
  import { List, ListItem } from '~/components/list'
  export default {
    components: {
      List,
      ListItem,
      HeartMark
    },
    props: ['shopData'],
    data () {
      return {
      }
    }
  }
</script>

<style lang="less" scoped>
  .bannerMini
  {
    width: 64px;
    height: 64px;
    margin-left: 10px;
  }

  .icon
  {
    height: 18px;
    width: 18px;
    display: inline-block;
    float: right;
  }

  .iconWrapper
  {
    width: 40px;
    height: 100px;
    display: inline-block;
    float: right;
  }

  .heartItem
  {
    position: absolute;
    top: 0;
    right: 9px;
  }

  .heartWrapper
  {
    width: 40px;
    height: 100%;
    position: relative;
  }

  /*
  .shopWrapper
  {
    width: 100%;
    height: 80px;
    position: relative;
    font-size: 16px;
    line-height: 18px;
  }

  .icon
  {
    vertical-align: middle;
    width: 18px;
    height: 18px;
  }

  .arrowArea {
    height: 32px;
    width: 32px;
    white-space: nowrap;
    text-align: center;
    position: absolute;
    right: 0;
    top: 50%;
    cursor: pointer;
  }

  .helper {
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }

  .stockInfo
  {
    height: 100%;
    width: 100%;
    padding: 0 10px;
  }
  */
</style>
