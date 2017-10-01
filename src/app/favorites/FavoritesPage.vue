<template>
  <div>
    <title-header title="Избранное"></title-header>
    <page-content>
      <scroll v-keep-scroll-position :on-infinite="onInfinite" :enableRefresh=false :enableInfinite="!loadedScrollFlag" :infiniteLoadingStatus="reloadScrollFlag">
        <div class="content-layout">
          <div>
            <product-card-banner v-for="item in scrollItemList" :key="item.id" :bannerData="item" @click.native="onProductClicked(item)" class="item"></product-card-banner>
          </div>
        </div>
      </scroll>
    </page-content>
  </div>
</template>

<script>
  import scrollMixinNew from '~/mixins/scrollMixinNew.vue'
  import TitleHeader from 'appComponents/components/headers/TitleHeader.vue'
  import ProductCardBanner from 'appComponents/components/banners/ProductCardBanner.vue'
  import Scroll from '~/components/customScroll'
  import Content from '~/components/content'

  export default {
    components: {
      TitleHeader,
      ProductCardBanner,
      'page-content': Content,
      Scroll
    },
    extends: scrollMixinNew,
    data () {
      return {
        bannerImage: '/static/logo.png',
        payload: {},
        scrollName: 'favorites'
      }
    },
    computed: {
      scrollItemList() {
          return this.$store.getters.scrollFavoritesList
        }
      },
    methods: {
      setCurrentStore () {
        this.$store.commit('setCurrentStore', 'favorites')
      },
      activatedPage () {
      },
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
