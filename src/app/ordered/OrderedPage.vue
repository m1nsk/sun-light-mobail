<template>
  <div>
    <title-header title="Мои покупки"></title-header>
    <page-content>
      <scroll :on-infinite="onInfinite" :enableRefresh=false :enableInfinite="!flagLoaded" :infiniteLoading="reloadStatus">
        <div class="content-layout">
          <custom-data-grid :requestFunction="getOrderedList" setter="setProductItemList" getter="getProductItemList" :onReload="onReload" :columnNum="2" :elementHeight="getElementHeight" @flagLoaded="onFlagLoaded">
            <template slot="content" scope="props">
              <product-card-banner v-for="item in props.dataList" :key="item.id" :bannerData="item.product" @click.native="onProductClicked(item.product)" class="item"></product-card-banner>
            </template>
          </custom-data-grid>
        </div>
      </scroll>
    </page-content>
  </div>
</template>

<script>
  import { getOrdered } from 'api/index'
  import TitleHeader from 'appComponents/components/headers/TitleHeader.vue'
  import scrollMixin from '~/mixins/scrollMixin.vue'
  import ProductCardBanner from 'appComponents/components/banners/ProductCardBanner.vue'
  import CustomDataGrid from 'appComponents/components/banners/CustomDataGrid.vue'
  import Scroll from '~/components/customScroll'
  import Content from '~/components/content'

  export default {
    extends: scrollMixin,
    components: {
      TitleHeader,
      'page-content': Content,
      ProductCardBanner,
      CustomDataGrid,
      Scroll
    },
    data () {
      return {
        getOrderedList: getOrdered
      }
    },
    created: function () {
      this.$store.commit('clearProductItemList')
    },
    computed: {
      getElementHeight () {
        return this.$store.getters.getBannerSize.height
      }
    },
    methods: {
      onProductClicked (item) {
        this.$router.push({
          name: 'product',
          params: {
            id: item.id
          }
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../components/header/variables.less";

  .item
  {
    display: inline-block;
  }
</style>
