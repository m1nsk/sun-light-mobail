<template>
  <div>
    <title-header title="Где забрать?"></title-header>
    <page-content class="content-padding-bottom">
      <scroll :on-infinite="onInfinite" :enableRefresh=false :enableInfinite="!flagLoaded" :infiniteLoading="reloadStatus">
      <div class="content-layout">
        <product-card-mini :productData="productData"></product-card-mini>
        <div class="shop__count">
          <span>Найдено {{ this.shopCounter }} магазина</span>
        </div>
        <a href=""></a>
        <custom-data-grid :requestFunction="getMarketsList" setter="setMarketItemList" getter="getMarketItemList" :onReload="onReload" :columnNum="2" :elementHeight="getElementHeight" @flagLoaded="onFlagLoaded">
          <template slot="content" scope="props">
            <shop-card v-for="item in props.dataList" :key="item.id" :shopData="item" @click.native="onShopClicked(item)" class="listItem"></shop-card>
          </template>
        </custom-data-grid>
      </div>
      </scroll>
    </page-content>
  </div>
</template>

<script>
  import { getProduct, getMarkets } from 'api/index'
  import scrollMixin from '~/mixins/scrollMixin.vue'
  import TitleHeader from 'appComponents/components/headers/TitleHeader.vue'
  import ContentWrapper from 'appComponents/components/wrappers/ContentWrapper.vue'
  import ShopCard from 'appComponents/components/cards/ShopCard.vue'
  import ProductCardMini from 'appComponents/components/cards/ProductCardMini.vue'
  import CustomDataGrid from 'appComponents/components/banners/CustomDataGrid.vue'
  import Scroll from '~/components/customScroll'
  import Content from '~/components/content'

  export default {
    extends: scrollMixin,
    components: {
      ContentWrapper,
      ProductCardMini,
      ShopCard,
      TitleHeader,
      CustomDataGrid,
      'page-content': Content,
      Scroll
    },
    data () {
      return {
        productData: {
          id: '',
          image: {
            mini: ''
          }
        },
        getMarketsList: getMarkets
      }
    },
    mounted: function () {
      this.$store.commit('clearMarketItemList')
      console.log(this.$store.getters.productCode.id, 'stored id')
      let promiseProduct = getProduct(this.$store.getters.productCode.id)
      promiseProduct.then((response) => {
        this.productData = response.data.data
      })
    },
    computed: {
      getElementHeight () {
        return this.$store.getters.getBannerSize.height
      },
      shopCounter () {
        return this.$store.getters.getMarketItemList.length
      }
    },
    methods: {
      onShopClicked (item) {
        console.log(item, 'clicked')
        this.$router.push({
          name: 'form',
          params: {
            id: item.id
          }
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .shop__count
  {
    text-align: center;
  }
</style>
