<template>
  <div>
    <catalog-header :pageData="pageInfo"></catalog-header>
    <page-content>
      <scroll :on-infinite="onInfinite" :enableRefresh=false :enableInfinite="!flagLoaded" :infiniteLoadingStatus="reloadStatus">
        <div class="content-layout">
          <div class="catalog__filter" @click.stop>
            <transition-group name="fade">
              <filter-button :key="filterIndex" v-for="(filter, filterIndex) in filterList" v-if="filter.included === true" :data="filter" @exclude="onFilterExclude(filter)"></filter-button>
            </transition-group>
          </div>
          <bannerItem :bannerImg="bannerImage"></bannerItem>
          <product-card-banner v-for="item in productList" :key="item.id" :bannerData="item" @marked="onItemMarked(item)" @click.native="onProductClicked(item)" class="item"></product-card-banner>
        </div>
      </scroll>
    </page-content>
  </div>
</template>

<script>
  import { getProductList } from 'api/index'
  import CatalogHeader from 'appComponents/components/headers/CatalogHeader.vue'
  import BannerItem from 'appComponents/components/banners/BannerItem.vue'
  import ProductCardBanner from 'appComponents/components/banners/ProductCardBanner.vue'
  import FilterButton from 'appComponents/components/buttons/FilterButton.vue'
  import CustomDataGrid from 'appComponents/components/banners/CustomDataGrid.vue'
  import Scroll from '~/components/customScroll'
  import Content from '~/components/content'

  export default {
    components: {
      BannerItem,
      CatalogHeader,
      ProductCardBanner,
      FilterButton,
      CustomDataGrid,
      'page-content': Content,
      Scroll
    },
    data () {
      return {
        pageInfo: {
          num: 1,
          total: 2,
          category: 'Часы наручные'
        },
        bannerImage: '/static/logo.png',
        getProductFunction: getProductList
      }
    },
    mounted: function () {
      this.$nextTick(function () {
       this.$nextTick(function () {
         this.$store.commit('setProductsToDefault')
         this.$store.dispatch('getProductList', this.getProductFunction)
       })
      })
    },
    computed: {
      payload () {
        let payload = this.$store.getters.getFilterForResponse
        payload.catalog_id = this.$route.params.id
        return payload
      },
      productList () {
        return this.$store.getters.getProductItemList
      },
      filterList () {
        return this.$store.getters.getFilterList
      },
      flagLoaded () {
        return this.$store.getters.getProductLoadedFlag
      },
      reloadStatus () {
        return this.$store.getters.getProductReloadStatus
      }
    },
    methods: {
      onFilterExclude (filter) {
        console.log(filter.title, 'item')
        for (let filterItem in this.filterList) {
          if (this.filterList[filterItem].title === filter.title) {
            filter.included = false
            break
          }
        }
        this.$store.commit('setFilters', this.filterList)
        this.$store.commit('setProductsToDefault')
        this.$store.dispatch('getProductList', this.getProductFunction)
      },
      onProductClicked (item) {
        this.$router.push({
          name: 'product',
          params: {
            id: item.id
          }
        })
      },
      onInfinite () {
        this.$store.dispatch('getProductList')
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
