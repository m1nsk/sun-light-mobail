<template>
  <div class="page">
    <catalog-page-header :pageData="pageData.pageInfo"></catalog-page-header>
    <page-content>
      <scroll :enableInfinite="false" class="scroll">
        <div class="contentWrapper">
          <div class="filterWrapper" style="background-color: #4cd964">
          </div>
          <bannerItem :bannerImg="pageData.bannerImage"></bannerItem>
          <div class="productGridWrapper">
            <product-card-banner v-for="item in pageData.bannerData" :key="item.id" :bannerData="item" @click.native="onProductClicked(item)"></product-card-banner>
          </div>
        </div>
      </scroll>
    </page-content>
  </div>
</template>

<script>
  import { List, ListItem } from '~/components/list'
  import scroll from '~/components/scroll'
  import CatalogPageHeader from 'appComponents/menu/CatalogPageHeader.vue'
  import BannerItem from 'appComponents/menu/banners/BannerItem.vue'
  import ProductCardBanner from 'appComponents/menu/banners/ProductCardBanner.vue'
  import Content from '~/components/content'
  export default {
    components: {
      List,
      ListItem,
      scroll,
      BannerItem,
      CatalogPageHeader,
      ProductCardBanner,
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
        this.$router.push('product/' + item.id)
      }
    }
  }
</script>

<style lang="less" scoped>
  .scroll
  {
    height: 100%;
    width: 100%;
    margin: auto;
  }

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

  .contentWrapper
  {
    margin: 30px auto;
    width: 230px;
  }

  .productGridWrapper
  {
    width: 230px;
  }

  .page {
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
</style>
