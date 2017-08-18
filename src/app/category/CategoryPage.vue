<template>
  <content-wrapper>
    <catalog-page-header :pageData="pageData.pageInfo" slot="header"></catalog-page-header>
    <div class="filterWrapper" style="background-color: #4cd964">
    </div>
    <bannerItem :bannerImg="pageData.bannerImage"></bannerItem>
    <div class="productGridWrapper">
      <product-card-banner v-for="item in pageData.bannerData" :key="item.id" :bannerData="item" @click.native="onProductClicked(item)" class="cell"></product-card-banner>
    </div>
  </content-wrapper>
</template>

<script>
  import scroll from '~/components/scroll'
  import CatalogPageHeader from 'appComponents/menu/CatalogMenu.vue'
  import BannerItem from 'appComponents/menu/banners/BannerItem.vue'
  import ProductCardBanner from 'appComponents/menu/banners/ProductCardBanner.vue'
  import ContentWrapper from 'appComponents/menu/helpers/ContentWrapper.vue'
  import Content from '~/components/content'
  export default {
    components: {
      scroll,
      BannerItem,
      CatalogPageHeader,
      ProductCardBanner,
      ContentWrapper,
      'page-content': Content
    },
    data () {
      return {
        pageData: {
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
      }
    }
  }
</script>

<style lang="less" scoped>
  .banner
  {
    display: block;
    margin: 0 auto;
    width: 230px;
    height: 87px;
  }

  .filterWrapper
  {
    width: 100%;
    height: 25px;
    margin: 5px auto;
  }

  .productGridWrapper
  {
    max-width: 500px;
    margin: auto;
  }

  .cell
  {
    display: inline-block;
    float: left;
  }

</style>
