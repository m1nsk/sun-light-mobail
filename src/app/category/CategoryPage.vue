<template>
  <div>
    <catalog-header :pageData="pageInfo"></catalog-header>
    <page-content>
      <scroll :on-infinite="onInfinite" :enableRefresh=false :enableInfinite="!loadedFlag" class="scroll">
        <div class="content-layout">
          <div class="content-padded">
            <div class="catalog__filter">
              <filter-button v-for="item in filterList" :key="item.id" :data="item" @exclude="onFilterExclude(item)"></filter-button>
            </div>
            <bannerItem :bannerImg="bannerImage"></bannerItem>
            <product-banner-grid :bannerList="bannerList"></product-banner-grid>
          </div>
        </div>
      </scroll>
    </page-content>
  </div>
</template>

<script>
  import { getCategoryProducts } from 'api/index'
  import CatalogHeader from 'appComponents/components/headers/CatalogHeader.vue'
  import BannerItem from 'appComponents/components/banners/BannerItem.vue'
  import ProductCardBanner from 'appComponents/components/banners/ProductCardBanner.vue'
  import FilterButton from 'appComponents/components/buttons/FilterButton.vue'
  import ProductBannerGrid from 'appComponents/components/banners/ProductBannerGrid.vue'
  import Scroll from '~/components/scroll'
  import Content from '~/components/content'

  export default {
    components: {
      BannerItem,
      CatalogHeader,
      ProductCardBanner,
      FilterButton,
      ProductBannerGrid,
      'page-content': Content,
      Scroll
    },
    data () {
      return {
        fullHeight: '0',
        pageInfo: {
          num: '1',
          total: '7',
          category: 'Часы наручные'
        },
        filterList: [
          {title: 'Сначала Новые'},
          {title: 'По Городу'},
          {title: 'Сначала Дешевые'}
        ],
        bannerImage: '/static/logo.png',
        bannerList: [],
        productCounter: 0,
        loadedFlag: false
      }
    },
    mounted: function () {
      this.uploadProducts(2)
    },
    computed: {
      windowSize () {
        return this.$store.getters.getWindowSize
      }
    },
    methods: {
      onProductClicked (item) {
        console.log(item.id)
        this.$router.push(this.$route.path + '/' + item.id)
      },
      onFilterExclude (item) {
        console.log(item.title)
      },
      onInfinite (done) {
        this.uploadProducts(this.productCounter)
        done()
      },
      uploadProducts (take = 2) {
        console.log(this.productCounter)
        let catalogId = this.$route.params.category
        let promise = getCategoryProducts({
          skip: this.productCounter,
          take: take,
          sort: 'id',
          order: 'asc',
          catalog_id: catalogId
        })
        this.productCounter += 2
        promise.then((response) => {
          for (let index = 0; index < response.data.data.length; index++) {
            this.bannerList.push(response.data.data[index])
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

  .scroll
  {
    margin-top: @nav-height;
  }
</style>
