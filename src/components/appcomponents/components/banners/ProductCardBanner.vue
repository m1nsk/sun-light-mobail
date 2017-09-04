<template>
  <div class="product-card">
    <div class="product-card__banner-wrapper flex-center">
      <img v-lazy="bannerData.image.mini" :style="{ height: bannerSize.height + 'px', width: bannerSize.width + 'px' }"/>
      <div class="product-card__hit-wrapper" v-if="bannerData.best">
        <div class="product-card__hit">
          <div class="product-card__hit-text">Хит</div>
        </div>
      </div>
    </div>
    <div class="product-card__footer" >
      <div class="product-card__heart-frame">
        <span class="product-card__heart-helper"></span>
        <img :src="markIcon" class="product-card__heart-icon" @click.stop="onMarkClick">
      </div>
      <div class="product-card__price-wrapper">
        <div class="product-card__sale" v-if="bannerData.sale">
          {{ bannerData.sale }}
        </div>
        <div class="product-card__price">
          {{ bannerData.cost }}
        </div>
      </div>
    </div>
  </div>
</template>
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
      bannerSize () {
        return this.$store.getters.getBannerSize
      },
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
  .product-card
  {
    width: 50%;
  }

  .product-card__banner-wrapper
  {
    border: 2px solid #ffffff;
    background-color: #fafafa;
    position: relative;
  }

  .product-card__footer
  {
    width: 100%;
    height: 48px;
  }

  .product-card__hit-wrapper
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
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: baseline;
  }

  .product-card__sale
  {
    color: gray;
    text-decoration:line-through;
    font-size: 12px;
  }

  .product-card__price
  {
    font-size: 15px;
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
    display: inline-block;
    vertical-align: middle;
  }

  .product-card__hit-text
  {
    font-size: 12px;
    line-height: 22px;
  }
</style>
