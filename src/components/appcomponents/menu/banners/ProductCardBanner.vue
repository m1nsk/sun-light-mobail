<template>
  <div class="wrapper">
    <div class="bannerWrapper">
      <img :src="bannerData.img" class="banner"/>
      <div class="productHeader" v-show="bannerData.isHit">
        <div class="hit">
          <div class="hitClass">
            <span>Хит</span>
          </div>
        </div>
      </div>
    </div>
    <div class="productFooter" >
      <div class="frame">
        <span class="helper"></span>
        <img :src="markIcon" class="icon" @click.stop="onMarkClick">
      </div>
      <div class="price">
        <div>
          {{ bannerData.price }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['bannerData'],
    data () {
      return {
        marked: false
      }
    },
    methods: {
      onMarkClick () {
        this.marked = !this.marked
      }
    },
    computed: {
      markIcon () {
        if (this.marked) {
          return '/static/myIcons/like_full.svg'
        }
        return '/static/myIcons/like.svg'
      }
    }
  }
</script>

<style lang="less" scoped>
  .banner
  {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .wrapper
  {
    width: 50%;
    height: 120px;
    cursor: pointer;
    display: inline-block;
    float: left;
    border: 2px solid #ffffff;
    background-color: #fbf6ef;
  }

  .bannerWrapper
  {
    width: 100%;
    height: 88px;
    position: relative;
    display: inline-block;
    float: left;
  }

  .productFooter
  {
    width: 100%;
    height: 32px;
  }

  .productHeader
  {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 32px;
  }

  .icon
  {
    vertical-align: middle;
    width: 18px;
    height: 18px;
  }

  .frame
  {
    height: 100%;      /* equals max image height */
    width: 48px;
    white-space: nowrap; /* this is required unless you put the helper span closely near the img */
    text-align: center;
    float: right;
    display: inline-block;
    vertical-align: middle;
  }

  .price
  {
    height: 100%;
    font-size: 12px;
    width: 48px;
    display: table;
  }

  .price > div
  {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }

  .hit
  {
    height: 100%;
    font-size: 12px;
    width: 48px;
    display: table;
  }

  .hit > div
  {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }

  .helper {
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }

  .hitClass
  {
    width: 48px;
    height: 22px;
    position: absolute;
    text-align: center;
    top: 0;
    right: 0;
    background-color: antiquewhite;
  }

  .hitClass > span
  {
    line-height: 22px;
    font-size: 12px;
  }
</style>
