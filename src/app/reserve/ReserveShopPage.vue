<template>
  <div>
    <title-header title="Где забрать?"></title-header>
    <page-content class="content-padding-bottom">
      <scroll :on-infinite="onInfinite" :enableRefresh=false :enableInfinite="!flagLoaded" :infiniteLoadingStatus="reloadStatus">
        <div class="content-layout">
          <product-card-mini :productData="productData"></product-card-mini>
          <div class="shop__count">
            <span>Найдено {{ this.shopCounter }} магазина</span>
          </div>
          <shop-card v-for="item in marketList" :key="item.id" :shopData="item" @click.native="onShopClicked(item)" class="listItem"></shop-card>
        </div>
      </scroll>
    </page-content>
  </div>
</template>

<script>
  import { getProduct } from 'api/index'
  import TitleHeader from 'appComponents/components/headers/TitleHeader.vue'
  import ContentWrapper from 'appComponents/components/wrappers/ContentWrapper.vue'
  import ShopCard from 'appComponents/components/cards/ShopCard.vue'
  import ProductCardMini from 'appComponents/components/cards/ProductCardMini.vue'
  import CustomDataGrid from 'appComponents/components/banners/CustomDataGrid.vue'
  import Scroll from '~/components/customScroll'
  import Content from '~/components/content'

  export default {
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
        }
      }
    },
    mounted: function () {
      this.$store.commit('setMarketsToDefault')
      let promiseProduct = getProduct(this.$store.getters.productCode.id)
      this.$store.dispatch('getMarketList', {})
      promiseProduct.then((response) => {
        this.productData = response.data.data
      })
    },
    computed: {
      shopCounter () {
        return this.$store.getters.getMarketItemList.length
      },
      flagLoaded () {
        return this.$store.getters.getMarketLoadedFlag
      },
      reloadStatus () {
        return this.$store.getters.getMarketReloadStatus
      },
      marketList () {
        return this.$store.getters.getMarketItemList
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
      },
      onInfinite () {
        this.$store.dispatch('getMarketList', {})
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
