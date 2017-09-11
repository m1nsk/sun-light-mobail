<template>
  <div>
    <catalog-header :pageData="pageInfo"></catalog-header>
    <page-content>
      <scroll :on-infinite="onInfinite" :enableRefresh=false :enableInfinite="!flagLoaded" :infiniteLoading="reloadStatus">
        <div class="content-layout">
            <div class="catalog__filter" @click.stop>
              <transition-group name="fade">
                <filter-button :key="filterIndex" v-for="(filter, filterIndex) in filterList" v-if="filter.included === true" :data="filter" @exclude="onFilterExclude(filter)"></filter-button>
              </transition-group>
            </div>
            <bannerItem :bannerImg="bannerImage"></bannerItem>
            <custom-data-grid :requestFunction="getProductListFunction" setter="setProductItemList" getter="getProductItemList" :payload="payload" :onReload="onReload" :columnNum="2" :elementHeight="getElementHeight" @flagLoaded="onFlagLoaded">
              <template slot="content" scope="props">
                <product-card-banner v-for="item in props.dataList" :key="item.id" :bannerData="item" @marked="onItemMarked(item)" @click.native="onProductClicked(item)" class="item"></product-card-banner>
              </template>
            </custom-data-grid>
          </div>
      </scroll>
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
    extends: scrollMixin,
    components: {
      BannerItem,
      CatalogHeader,
      ProductCardBanner,
      FilterButton,
      CustomDataGrid,
      'page-content': Content,
      Scroll
    },
    created: function () {
      this.$store.commit('clearProductItemList')
    },
    data () {
      return {
        pageInfo: {
          num: 1,
          total: 2,
          category: 'Часы наручные'
        },
        bannerImage: '/static/logo.png',
        getProductListFunction: getProductList
      }
    },
    computed: {
      payload () {
        let payload = this.$store.getters.getFilterForResponse
        payload.catalog_id = this.$route.params.id
        return payload
      },
      getElementHeight () {
        return this.$store.getters.getBannerSize.height
      },
      filterList () {
        return this.$store.getters.getFilterList
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
        this.$state.commit('setFilters', this.filterList)
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
