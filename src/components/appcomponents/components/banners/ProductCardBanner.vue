<template>
  <div class="product-card">
    <div class="product-card__banner-wrapper">
      <img :src="bannerData.img" class="product-card__banner"/>
      <div class="product-card__hit-wrapper-outer" v-show="bannerData.isHit">
        <div class="product-card__hit-wrapper-outer-inner">
          <div class="product-card__hit">
            <span class="product-card__hit-text">Хит</span>
          </div>
        </div>
      </div>
    </div>
    <div class="product-card__footer" >
      <div class="product-card__heart-frame">
        <span class="product-card__heart-helper"></span>
        <img :src="markIcon" class="product-card__heart-icon" @click.stop="onMarkClick">
      </div>
      <div class="product-card__price-wrapper">
        <div class="product-card__price">
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
  .product-card__banner
  {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .product-card
  {
    width: 50%;
    height: 120px;
    cursor: pointer;
  }

  .product-card__banner-wrapper
  {
    height: 88px;
    position: relative;
    border: 2px solid #ffffff;
    background-color: #f8f8f8;
  }

  .product-card__footer
  {
    width: 100%;
    height: 32px;
  }

  .product-card__hit-wrapper-outer
  {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 32px;
  }

  .product-card__heart-icon
  {
    vertical-align: middle;
    width: 18px;
    height: 18px;
  }

  .product-card__heart-frame
  {
    height: 100%;      /* equals max image height */
    width: 48px;
    white-space: nowrap; /* this is required unless you put the helper span closely near the img */
    text-align: center;
    float: right;
    display: inline-block;
    vertical-align: middle;
  }

  .product-card__price-wrapper
  {
    height: 100%;
    font-size: 12px;
    width: 48px;
    display: table;
  }

  .product-card__price
  {
    display: table-cell;
    vertical-align: middle;
    text-align: center;
  }

  .product-card__hit-wrapper-inner
  {
    height: 100%;
    font-size: 12px;
    width: 48px;
    display: table;
  }

  .product-card__heart-helper {
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }

  .product-card__hit
  {
    width: 48px;
    height: 22px;
    position: absolute;
    text-align: center;
    top: 0;
    right: 0;
    background-color: antiquewhite;
  }

  .product-card__hit-text
  {
    line-height: 22px;
    font-size: 12px;
  }
</style>
