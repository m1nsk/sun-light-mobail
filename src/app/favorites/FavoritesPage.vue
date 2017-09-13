<template>
  <div>
    <title-header title="Избранное"></title-header>
    <page-content>
      <scroll :on-infinite="onInfinite" :enableRefresh=false :enableInfinite="!flagLoaded" :infiniteLoadingStatus="reloadStatus">
        <div class="content-layout">
          <product-card-banner v-for="item in itemList" :key="item.id" :bannerData="item" @marked="onItemMarked(item)" @click.native="onProductClicked(item)" class="item"></product-card-banner>
        </div>
      </scroll>
    </page-content>
  </div>
</template>

<script>
  import { getFavorites } from 'api/index'
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
        getItemFunction: getFavorites,
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
  .catalog__filter
  {
    width: 100%;
    display: inline-block;
    margin: 0 auto;
  }

  .item
  {
    display: inline-block;
  }
</style>
