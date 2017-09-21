<template>
  <div>
    <catalog-header :pageData="pageInfo" @update="onSearchUpdated"></catalog-header>
    <page-content>
      <keep-alive>
        <scroll v-keep-scroll-position :on-infinite="onInfinite" :enableRefresh=false :enableInfinite="!loadedScrollFlag" :infiniteLoadingStatus="reloadScrollFlag">
          <div class="content-layout">
            <div class="catalog__filter" @click.stop>
              <transition-group name="fade">
                <filter-button :key="filterIndex" v-for="(filter, filterIndex) in filterList" v-if="filter.included === true" :data="filter" @exclude="onFilterExclude(filter)"></filter-button>
              </transition-group>
            </div>
            <bannerItem :bannerImg="bannerImage"></bannerItem>
            <div>
              <product-card-banner v-for="item in scrollItemList" :key="item.id" :bannerData="item" @marked="onItemMarked(item)" @click.native="onProductClicked(item)" class="item"></product-card-banner>
            </div>
          </div>
        </scroll>
      </keep-alive>
    </page-content>
  </div>
</template>

<script>
  import { getProductList } from 'api/index'
  import scrollMixin from '~/mixins/scrollMixin.vue'
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
    name: 'CategoryPageAlive',
    extends: scrollMixin,
    data () {
      return {
        pageInfo: {
          num: 1,
          total: 2,
          category: 'Часы наручные'
        },
        bannerImage: '/static/logo.png',
        getItemFunction: getProductList
      }
    },
    name: 'CategoryPage',
    computed: {
      payload () {
        let payload = this.$store.getters.getFilterForResponse
        payload.catalog_id = this.$route.params.id
        return payload
      },
      filterList () {
        return this.$store.getters.getFilterList
      }
    },
    methods: {
      getReloadListFlag () {
        return this.$store.getters.getProductListReload
      },
      setReloadListFlag (state) {
        this.$store.commit('setProductListReloadFlag', state)
      },
      onFilterExclude (filter) {
        console.log(filter.title, 'item')
        for (let filterItem in this.filterList) {
          if (this.filterList[filterItem].title === filter.title) {
            this.filterList[filterItem].included = false
            break
          }
        }
        this.$store.commit('setFilters', this.filterList)
        this.clearItemList()
        this.getItems()
      },
      onSearchUpdated () {
        console.log('search updated')
        this.clearItemList()
        this.getItems()
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
