<template>
  <div>
    <title-header title="Мои покупки"></title-header>
    <page-content>
      <scroll :on-infinite="onInfinite" :enableRefresh=false :enableInfinite="!flagLoaded" :infiniteLoadingStatus="reloadStatus">
        <div class="content-layout">
          <product-card-banner v-for="item in productList" :key="item.id" :bannerData="item.product" @click.native="onProductClicked(item.product)" class="item"></product-card-banner>
        </div>
      </scroll>
    </page-content>
  </div>
</template>

<script>
  import { getOrdered } from 'api/index'
  import TitleHeader from 'appComponents/components/headers/TitleHeader.vue'
  import ProductCardBanner from 'appComponents/components/banners/ProductCardBanner.vue'
  import CustomDataGrid from 'appComponents/components/banners/CustomDataGrid.vue'
  import Scroll from '~/components/customScroll'
  import Content from '~/components/content'

  export default {
    components: {
      TitleHeader,
      'page-content': Content,
      ProductCardBanner,
      CustomDataGrid,
      Scroll
    },
    data () {
      return {
        getOrderedList: getOrdered
      }
    },
    mounted: function () {
      this.$nextTick(function () {
        this.$nextTick(function () {
          this.$store.commit('setProductsToDefault')
          this.$store.dispatch('getProductList', this.getOrderedList)
        })
      })
    },
    computed: {
      productList () {
        return this.$store.getters.getProductItemList
      },
      flagLoaded () {
        return this.$store.getters.getProductLoadedFlag
      },
      reloadStatus () {
        return this.$store.getters.getProductReloadStatus
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
      },
      onInfinite () {
        this.$store.dispatch('getProductList', this.getOrderedList)
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
