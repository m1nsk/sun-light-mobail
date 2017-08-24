<template>
  <content-wrapper>
    <catalog-header :pageData="pageData.pageInfo" slot="header-menu"></catalog-header>
    <div class="catalog__wrapper">
      <div class="catalog__filter">
        <filter-button v-for="item in pageData.filterList" :key="item.id" :data="item" @exclude="onFilterExclude(item)"></filter-button>
      </div>
      <bannerItem :bannerImg="pageData.bannerImage"></bannerItem>
      <product-banner-grid></product-banner-grid>
    </div>
  </content-wrapper>
</template>

<script>
  import CatalogHeader from 'appComponents/components/headers/CatalogHeader.vue'
  import BannerItem from 'appComponents/components/banners/BannerItem.vue'
  import ProductCardBanner from 'appComponents/components/banners/ProductCardBanner.vue'
  import ContentWrapper from 'appComponents/components/wrappers/ContentWrapper.vue'
  import FilterButton from 'appComponents/components/buttons/FilterButton.vue'
  import ProductBannerGrid from 'appComponents/components/banners/ProductBannerGrid.vue'

  export default {
    components: {
      BannerItem,
      CatalogHeader,
      ProductCardBanner,
      ContentWrapper,
      FilterButton,
      ProductBannerGrid
    },
    data () {
      return {
        pageData: {
          filterList: [
            {title: 'Сначала Новые'},
            {title: 'По Городу'},
            {title: 'Сначала Дешевые'},
            {title: 'Сначала Дорогие'}
          ],
          bannerImage: '/static/logo.png',
          pageInfo: {
            num: '1',
            total: '7',
            category: 'Часы наручные'
          },
          bannerData: [
            {
              img: '/static/logo.png',
              price: 1000,
              isHit: true,
              id: 0
            },
            {
              img: '/static/logo.png',
              price: 2000,
              isHit: false,
              id: 1
            },
            {
              img: '/static/logo.png',
              price: 3000,
              isHit: true,
              id: 2
            },
            {
              img: '/static/logo.png',
              price: 4000,
              isHit: false,
              id: 3
            },
            {
              img: '/static/logo.png',
              price: 5000,
              isHit: false,
              id: 4
            }
          ]
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
      }
    }
  }
</script>

<style lang="less" scoped>
  .catalog__filter
  {
    width: 100%;
    display: inline-block;
    margin: 0 auto;
  }

  .catalog__wrapper
  {
    width: 80%;
    margin: 0 auto;
    max-width: 500px;
  }
</style>
