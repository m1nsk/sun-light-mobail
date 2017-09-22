<template>
  <div class="product-card">
    <div class="banner-wrapper flex-center">
      <img v-lazy="itemData.image.mini" :style="{ height: bannerSize.height + 'px', width: bannerSize.width + 'px' }"/>
      <div class="hit-wrapper" v-if="itemData.best">
        <div class="hit">
          <div class="hit-text">Хит</div>
        </div>
      </div>
    </div>
    <div class="card-footer" >
      <div class="heart-frame flex-center">
        <img :src="markIcon" class="heart-icon" @click.stop="onMarkClick">
      </div>
      <div class="price-wrapper">
        <div class="title">{{itemData.label}}</div>
        <div class="sale" v-if="itemData.sale">
          {{ itemData.sale }}
        </div>
        <div class="price">
          {{ itemData.cost }}
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
        itemData: this.bannerData,
      }
    },
    methods: {
      onMarkClick () {
        this.$store.dispatch('toggleLike', {id: this.bannerData.id})
      }
    },
    computed: {
      bannerSize () {
        return this.$store.getters.getBannerSize
      },
      markIcon () {
        if (this.itemData.like) {
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

  .banner-wrapper
  {
    border: 2px solid #ffffff;
    background-color: #fafafa;
    position: relative;
  }

  .card-footer
  {
    width: 100%;
    height: 72px;
  }

  .hit-wrapper
  {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 32px;
  }

  .heart-icon
  {
    width: 18px;
    height: 18px;
  }

  .heart-frame
  {
    height: 100%;
    width: 48px;
    float: right;
  }

  .price-wrapper
  {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: baseline;
  }

  .sale
  {
    font-size: 12px;
  }

  .sale
  {
    color: gray;
    text-decoration:line-through;
    font-size: 12px;
  }

  .price
  {
    font-size: 15px;
  }

  .product-card__heart-helper {
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }

  .hit
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

  .hit-text
  {
    font-size: 12px;
    line-height: 22px;
  }
</style>
