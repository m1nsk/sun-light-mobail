<template>
  <div>
    <title-header title="Где забрать?"></title-header>
    <page-content class="content-padding-bottom">
      <scroll :on-infinite="onInfinite" :enableRefresh=false :enableInfinite="!flagLoaded" :infiniteLoading="reloadStatus">
      <div class="content-layout">
        <shop-card-mini></shop-card-mini>
        <div class="shop__count">
          <span>Найдено {{ shopCount }} магазина</span>
        </div>
        <a href=""></a>
        <custom-data-grid url="/markets" :onReload="onReload" :columnNum="2" :elementHeight="getElementHeight" @flagLoaded="onFlagLoaded">
          <template slot="content" scope="props">
            <shop-card v-for="item in props.dataList" :key="item.id" :shopData="item" @click.native="onShopClicked" class="item"></shop-card>
          </template>
        </custom-data-grid>
        <!-- <shop-card v-for="item in shopsList" :shopData="item" :key="item.id" @click.native="onShopClicked"></shop-card> -->
      </div>
      </scroll>
    </page-content>
  </div>
</template>

<script>
  import { getMarkets } from 'api/index'
  import scrollMixin from '~/mixins/scrollMixin.vue'
  import TitleHeader from 'appComponents/components/headers/TitleHeader.vue'
  import ContentWrapper from 'appComponents/components/wrappers/ContentWrapper.vue'
  import ShopCard from 'appComponents/components/cards/ShopCard.vue'
  import ShopCardMini from 'appComponents/components/cards/ShopCardMini.vue'
  import CustomDataGrid from 'appComponents/components/banners/CustomDataGrid.vue'
  import Scroll from '~/components/customScroll'
  import Content from '~/components/content'

  export default {
    extends: scrollMixin,
    components: {
      ContentWrapper,
      ShopCardMini,
      ShopCard,
      TitleHeader,
      CustomDataGrid,
      'page-content': Content,
      Scroll
    },
    data () {
      return {
        shopsList: [
          {
            station: 'Сенная!!!!!!!!!!!!!!!!!!!!!!!!' +
            ' !!!!!!!!!!!!!!!!!!!!!!!!!',
            address: 'village somewhere',
            worktime: '10:00 - 19:00',
            status: 'В наличии'
          },
          {
            station: 'Сенная',
            address: 'village somewhere!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!',
            worktime: '10:00 - 19:00',
            status: 'В наличии'
          },
          {
            station: 'Сенная',
            address: 'village somewhere',
            worktime: '10:00 - 19:00',
            status: 'В наличии'
          }
        ],
        shopCount: 3
      }
    },
    mounted: function () {
      let promise = getMarkets()
      promise.then((response) => {
        console.log(response, 'response')
        this.shopsList = response.data.data
      })
    },
    computed: {
      getElementHeight () {
        return this.$store.getters.getBannerSize.height
      }
    },
    methods: {
      onShopClicked () {
        console.log('clicked')
        this.$router.push(this.$route.path + 'form/')
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
