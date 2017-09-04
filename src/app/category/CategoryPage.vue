<template>
  <div>
    <catalog-header :pageData="pageInfo"></catalog-header>
    <page-content style="padding-top: 150px">
      <scroll :on-infinite="onInfinite" :enableRefresh=false :enableInfinite="!flagLoaded" :infiniteLoading="reloadStatus">
        <div class="content-layout">
          <div class="content-padded">
            <div class="catalog__filter" @click.stop>
              <transition-group name="fade">
                <filter-button :key="filterIndex" v-for="(filter, filterIndex) in filterList" :data="filter" @exclude="onFilterExclude(filter)"></filter-button>
              </transition-group>
            </div>
            <bannerItem :bannerImg="bannerImage"></bannerItem>
            <custom-data-grid url="/products" :onReload="onReload" :columnNum="2" :elementHeight="getElementHeight" @flagLoaded="onFlagLoaded">
              <template slot="content" scope="props">
                <product-card-banner v-for="item in props.dataList" :key="item.id" :bannerData="item" @click.native="onProductClicked(item)" class="item"></product-card-banner>
              </template>
            </custom-data-grid>
          </div>
        </div>
      </scroll>
    </page-content>
  </div>
</template>

<script>
  import scrollMixin from '~/mixins/scrollMixin.vue'
  import CatalogHeader from 'appComponents/components/headers/CatalogHeader.vue'
  import BannerItem from 'appComponents/components/banners/BannerItem.vue'
  import ProductCardBanner from 'appComponents/components/banners/ProductCardBanner.vue'
  import FilterButton from 'appComponents/components/buttons/FilterButton.vue'
  import CustomDataGrid from 'appComponents/components/banners/CustomDataGrid.vue'
  import Scroll from '~/components/customScroll'
  import Content from '~/components/content'

  export default {
    extends: scrollMixin,
    components: {
      BannerItem,
      CatalogHeader,
      ProductCardBanner,
      FilterButton,
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
        bannerImage: '/static/logo.png'
      }
    },
    computed: {
      getElementHeight () {
        return this.$store.getters.getBannerSize.height
      }
    },
    methods: {
      onFilterExclude (filter) {
        console.log(filter.title, 'item')
        for (let index = 0; index < this.filterList.length; index++) {
          if (this.filterList[index] === filter) {
            this.filterList.splice(index, 1)
          }
        }
      },
      onProductClicked (item) {
        console.log(item.id, 'this is item')
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
