<template>
  <div>
    <title-header title="Мои покупки"></title-header>
    <page-content>
      <scroll :on-infinite="onInfinite" :enableRefresh=false :enableInfinite="!flagLoaded" :infiniteLoadingStatus="reloadStatus">
        <div class="content-layout">
          <product-card-banner v-for="item in itemList" :key="item.id" :bannerData="item.product" @click.native="onProductClicked(item.product)" class="item"></product-card-banner>
        </div>
      </scroll>
    </page-content>
  </div>
</template>

<script>
  import { getOrdered } from 'api/index'
  import scrollMixin from '~/mixins/scrollMixin.vue'
  import TitleHeader from 'appComponents/components/headers/TitleHeader.vue'
  import ProductCardBanner from 'appComponents/components/banners/ProductCardBanner.vue'
  import Scroll from '~/components/customScroll'
  import Content from '~/components/content'

  export default {
    components: {
      TitleHeader,
      ProductCardBanner,
      'page-content': Content,
      Scroll
    },
    extends: scrollMixin,
    data () {
      return {
        getItemFunction: getOrdered,
        payload: {}
      }
    },
    methods: {
      onProductClicked (item) {
        this.$router.push({
          name: 'product',
          params: {
            id: item.id
          }
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../components/header/variables.less";

  .item
  {
    display: inline-block;
  }
</style>
