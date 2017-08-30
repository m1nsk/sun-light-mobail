<template>
  <div>
    <catalog-header :pageData="pageInfo"></catalog-header>
    <page-content style="padding-top: 150px">
      <h1> {{ windowSize }} </h1>
      <scroll :on-infinite="onInfinite" :enableRefresh=false :enableInfinite="!flagLoaded">
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
        filterList: [
          {title: 'Сначала Новые'},
          {title: 'По Городу'},
          {title: 'Сначала Дешевые'}
        ],
        bannerImage: '/static/logo.png',
        bannerList: [],
        productCounter: 0,
        flagLoaded: false,
        totalCount: 0,
        productsInResponse: 2
      }
    },
    mounted: function () {
      let height = document.documentElement.clientHeight
      let width = document.documentElement.clientWidth
      let size = Math.round((width * 8 / 10) / 2 - 10)
      console.log(height / size)
      this.productsInResponse = Math.ceil(height / size) * 2
      this.uploadProducts(this.productsInResponse)
    },
    computed: {
      windowSize () {
        let windowSize = this.$store.getters.getWindowSize
        let bannerSize = this.$store.getters.getBannerSize
        let orientation = this.$store.getters.getWindowOrientation.type
        let fitCount = this.productsInResponse
        console.log(orientation, 'orientation')
        if (orientation === 'portrait-primary') {
          fitCount = Math.ceil(windowSize.height / bannerSize.height)
          console.log(windowSize.height, bannerSize.height, fitCount)
          if (Math.ceil(this.productCounter / 2) < fitCount) {
            this.productsInResponse = fitCount
            this.uploadProducts(fitCount - this.productCounter / 2)
          }
        }
        return windowSize
      },
      pageInfo () {
        console.log(this.productCounter)
        return {
          num: Math.ceil(this.productCounter / this.productsInResponse),
          total: Math.ceil(this.totalCount / this.productsInResponse),
          category: 'Часы наручные'
        }
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
        if (!this.flagLoaded) {
          if (this.productsInResponse + this.productCounter < this.totalCount) {
            this.uploadProducts(this.productsInResponse)
          } else {
            this.uploadProducts(this.totalCount - this.productCounter)
            this.flagLoaded = true
          }
        }
        done()
      },
      uploadProducts (take = 2) {
        let catalogId = this.$route.params.category
        let promise = getCategoryProducts({
          skip: this.productCounter,
          take: take,
          sort: 'id',
          order: 'asc',
          catalog_id: catalogId
        })
        this.productCounter += take
        promise.then((response) => {
          for (let index = 0; index < response.data.data.length; index++) {
            this.bannerList.push(response.data.data[index])
            this.totalCount = response.data.totalCount
            if (this.productCounter >= this.totalCount) {
              this.flagLoaded = true
            }
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

</style>
