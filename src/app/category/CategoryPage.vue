<template>
  <div>
    <catalog-header :pageData="pageInfo"></catalog-header>
    <catalog-header :pageData="pageInfo"></catalog-header>
    <page-content style="padding-top: 150px">
      <scroll :on-infinite="onInfinite" :enableRefresh=false :enableInfinite="!flagLoaded" :infiniteLoading="reloadStatus">
        <div class="content-layout">
          <div class="content-padded">
            <div class="catalog__filter">
              <filter-button v-for="item in filterList" :key="item.id" :data="item" @exclude="onFilterExclude(item)"></filter-button>
            </div>
            <bannerItem :bannerImg="bannerImage"></bannerItem>
            <custom-data-grid url="/products" :onReload="onReload" @flagLoaded="onFlagLoaded">
              <template slot="content" scope="props">
                <product-card-banner v-for="item in props.bannerList" :key="item.id" :bannerData="item" @click.native="onProductClicked(item)" class="item"></product-card-banner>
              </template>
            </custom-data-grid>
            <!--
            <product-banner-grid :bannerList="bannerList"></product-banner-grid>
            -->
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
  import CustomDataGrid from 'appComponents/components/banners/CustomDataGrid.vue'
  import Scroll from '~/components/customScroll'
  import Content from '~/components/content'

  export default {
    components: {
      BannerItem,
      CatalogHeader,
      ProductCardBanner,
      FilterButton,
      ProductBannerGrid,
      CustomDataGrid,
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
        pageInfo: {
          num: 1,
          total: 2,
          category: 'Часы наручные'
        },
        bannerImage: '/static/logo.png',
        bannerList: [],
        productCounter: 0,
        flagLoaded: false,
        totalCount: 0,
        takeCount: 0,
        reloadStatus: false,
        onReload: false
      }
    },
    /*
    mounted: function () {
      let height = document.documentElement.clientHeight
      let width = document.documentElement.clientWidth
      let size = Math.round((width * 8 / 10) / 2 - 10)
      this.productsInResponse = Math.ceil(height / size) * 2
      // this.uploadProducts(this.productsInResponse)
    },
    */
    /*
    watch: {
      restToLoad () {
        if (!this.flagLoaded) {
          console.log(this.restToLoad, 'rest to load')
          this.uploadProducts(this.restToLoad)
        }
      }
    },
    computed: {
      restToLoad () {
        if (!this.flagLoaded) {
          let windowSize = this.$store.getters.getWindowSize
          let bannerSize = this.$store.getters.getBannerSize
          let orientation = this.$store.getters.getWindowOrientation.type
          let restCount = 0
          console.log(orientation, 'orientation')
          console.log(restCount, 'restcount')
          if (windowSize && bannerSize && orientation !== undefined) {
            restCount = Math.ceil(windowSize.height / bannerSize.height) * 2
            if (Math.ceil(this.productCounter / 2 % restCount !== 0)) {
              this.productsInResponse = restCount
              console.log(restCount, this.productCounter, 'rest and counter')
              return restCount - this.productCounter % restCount
            }
          }
        }
        return this.productsInResponse
      },
      pageInfo () {
        return {
          num: Math.ceil(this.productCounter / this.productsInResponse),
          total: Math.ceil(this.totalCount / this.productsInResponse),
          category: 'Часы наручные'
        }
      }
    },
    */
    methods: {
      /*
      onProductClicked (item) {
        console.log(item.id)
        this.$router.push(this.$route.path + '/' + item.id)
      },
      */
      onFlagLoaded () {
        console.log('flag loaded')
        this.flagLoaded = true
      },
      onFilterExclude (item) {
        console.log(item.title)
      },
      onInfinite (done) {
        this.onReload = true
        /*
        this.reloadStatus = false
        if (!this.flagLoaded) {
          if (this.productsInResponse + this.productCounter < this.totalCount) {
            this.uploadProducts(this.productsInResponse)
          } else {
            this.uploadProducts(this.totalCount - this.productCounter)
            this.reloadStatus = true
          }
        }
        this.reloadStatus = true
        */
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

  .item
  {
    display: inline-block;
  }
</style>
