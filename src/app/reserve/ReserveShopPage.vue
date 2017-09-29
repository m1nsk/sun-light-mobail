<template>
  <div>
    <title-header title="Где забрать?"></title-header>
    <page-content class="content-padding-bottom">
      <scroll v-keep-scroll-position :on-infinite="onInfinite" :enableRefresh=false :enableInfinite="!loadedScrollFlag" :infiniteLoadingStatus="reloadScrollFlag">
        <div class="content-layout">
          <product-card-mini :productData="productData"></product-card-mini>
          <div class="shop__count">
            <span>Найдено {{ this.scrollItemList.length }} магазина</span>
          </div>
          <div v-show="!animationFlag">
            <shop-card @like="onLike(item)" v-for="item in scrollItemList" :key="item.id" :shopData="item" @click.native="onShopClicked(item)" class="listItem"></shop-card>
          </div>
        </div>
      </scroll>
    </page-content>
  </div>
</template>

<script>
  import { getProduct, getMarketList } from 'api/index'
  import scrollMixinNew from '~/mixins/scrollMixinNew.vue'
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
    extends: scrollMixinNew,
    data () {
      return {
        productData: {
          id: '',
          image: {
            mini: ''
          }
        },
        getItemFunction: getMarketList,
        payload: {},
        reloadListFlag: false
      }
    },
    computed: {
      scrollItemList () {
        return this.$store.getters.scrollMarketList
      },
    },
    methods: {
      getReloadListFlag () {
        return this.$store.getters.getMarketListReload
      },
      setReloadListFlag (state) {
        this.$store.commit('setMarketListReloadFlag', state)
      },
      onLike (item) {
        item.like = !item.like
      },
      activatedPage: function () {
        let promise = getProduct(this.$store.getters.productCode.id)
        promise.then((response) => {
          this.productData = response.data.data
        })
      },
      setCurrentStore () {
        this.$store.commit('setCurrentStore', 'markets')
      },
      onShopClicked (item) {
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
