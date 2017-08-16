<template>
  <div class="shopWrapper">
    <hr>
    <div class="stockInfo">
      <div><b>{{shopData.station}}</b></div>
      <div>{{shopData.address}}</div>
      <div>{{shopData.worktime}}</div>
      <div>{{shopData.status}}</div>
    </div>
    <div class=arrowArea>
      <span class="helper"></span>
      <img src="/static/myIcons/right-arrow.svg" class="icon">
    </div>
    <heart-mark class="markArea"></heart-mark>
  </div>
</template>

<script>
  import HeartMark from 'appComponents/menu/components/HeartMark.vue'
  export default {
    components: {
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
    height: 32px;      /* equals max image height */
    width: 32px;
    white-space: nowrap; /* this is required unless you put the helper span closely near the img */
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
</style>
