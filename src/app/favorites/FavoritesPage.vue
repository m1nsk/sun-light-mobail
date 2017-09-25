<template>
  <div>
    <title-header title="Избранное"></title-header>
    <page-content>
      <scroll v-keep-scroll-position :on-infinite="onInfinite" :enableRefresh=false :enableInfinite="!loadedScrollFlag" :infiniteLoadingStatus="reloadScrollFlag">
        <div class="content-layout">
          <div>
            <product-card-banner @like="onLike(item)" v-for="item in scrollItemList" :key="item.id" :bannerData="item" @marked="onItemMarked(item)" @click.native="onProductClicked(item)" class="item"></product-card-banner>
          </div>
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
        bannerImage: '/static/logo.png',
        getItemFunction: getFavorites,
        categoryTitle: '',
        payload: {}
      }
    },
    methods: {
      onLike (item) {
        item.like = !item.like
      },
      activatedPage () {
      },
      getReloadListFlag () {
        return false
      },
      setReloadListFlag (state) {
      },
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
