<template>
  <div>
    <catalog-header :pageData="pageInfo" @update="onSearchUpdated"></catalog-header>
    <page-content>
      <scroll v-keep-scroll-position :on-infinite="onInfinite" :enableRefresh=false :enableInfinite="!loadedScrollFlag" :infiniteLoadingStatus="reloadScrollFlag">
        <div class="content-layout">
          <div class="catalog__filter" @click.stop>
            <transition-group name="fade">
              <filter-button :key="filterIndex" v-for="(filter, filterIndex) in filterList" v-if="filter.included === true" :data="filter" @exclude="onFilterExclude(filter)"></filter-button>
            </transition-group>
          </div>
          <bannerItem :bannerImg="bannerImage"></bannerItem>
          <div>
            <product-card-banner @like="onLike(item)" v-for="item in scrollItemList" :key="item.id" :bannerData="item" @marked="onItemMarked(item)" @click.native="onProductClicked(item)" class="item"></product-card-banner>
          </div>
        </div>
      </scroll>
    </page-content>
  </div>
</template>

<script>
  import { getProductList, getCategory } from 'api/index'
  import scrollMixinNew from '~/mixins/scrollMixinNew.vue'
  import CatalogHeader from 'appComponents/components/headers/CatalogHeader.vue'
  import BannerItem from 'appComponents/components/banners/BannerItem.vue'
  import ProductCardBanner from 'appComponents/components/banners/ProductCardBanner.vue'
  import FilterButton from 'appComponents/components/buttons/FilterButton.vue'
  import Scroll from '~/components/customScroll'
  import Content from '~/components/content'

  export default {
    components: {
      BannerItem,
      CatalogHeader,
      ProductCardBanner,
      FilterButton,
      'page-content': Content,
      Scroll
    },
    extends: scrollMixinNew,
    data () {
      return {
        bannerImage: '/static/logo.png',
        getItemFunction: getProductList,
        categoryTitle: '',
        scrollName: 'products'
      }
    },
    computed: {
      scrollItemList () {
        return this.$store.getters.scrollProductList
      },
      payload () {
        let payload = this.$store.getters.getFilterForResponse
        payload.catalog_id = this.$route.params.id
        return payload
      },
      filterList () {
        return this.$store.getters.getFilterList
      },
      pageInfo () {
        return {
          num: Math.ceil(this.scrollCounter / this.onPage),
          total: Math.ceil(this.totalScrollCount / this.onPage),
          category: this.categoryTitle
        }
      }
    },
    methods: {
      getReloadListFlag () {
        return this.$store.getters.getProductListReload
      },
      setReloadListFlag (state) {
        this.$store.commit('setProductListReloadFlag', state)
      },
      onLike (item) {
        item.like = !item.like
      },
      activatedPage () {
        let categoryId = this.$route.params.id
        let promise = getCategory(categoryId)
        promise.then((response) => {
          this.categoryTitle = response.data.data.label
        })
      },
      setCurrentStore () {
        this.$store.commit('setCurrentStore', 'products')
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
        this.clearItemList()
        this.getItems()
      },
      onProductClicked (item) {
        this.$store.commit('setMarketListReloadFlag', false)
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
