<template>
  <div>
    <main-header></main-header>
    <page-content style="background-color:#ff0000" class="content-padding-bottom">
      <!--loader element, show it before page has loaded-->
      <div v-if="dataLoaded === false" class="flex-center pageIsLoading">
        <i class="fa fa-spinner fa-pulse fa-3x fa-fw" style="color: white"></i>
      </div>
      <!--main page body-->
      <div v-else-if="dataLoaded === true">
        <div class="content-layout">
          <div v-for="item in catalogItems" :key="item.id" class="list-item">
            <router-link v-if="item.type !== banner" :to="{name: 'catalogId', params: { id: item.id }}" class="title">
              <div>
                <span>{{ item.label }}</span>
              </div>
            </router-link>
            <router-link :to="{name: 'catalogId', params: { id: item.id }}" class="title" v-else>
              <banner-item :bannerImg="banner" v-if="item.banner !== null">
              </banner-item>
            </router-link>
            <hr align="center" width="80%" color="white" size="1px"/>
          </div>
        </div>
      </div>
    </page-content>
  </div>
</template>

<script>
  import Content from '~/components/content'
  import MainHeader from 'appComponents/components/headers/MainHeader.vue'
  import BannerItem from 'appComponents/components/banners/BannerItem.vue'
  export default {
    components: {
      MainHeader,
      BannerItem,
      'page-content': Content
    },
    data () {
      return {
        banner: '/static/logo.png'
      }
    },
    computed: {
      catalogItems () {
        return this.$store.getters.getCatalogItems
      },
      dataLoaded () {
        return this.$store.getters.isCategoriesLoaded
      }
    },
    created: function () {
      this.$store.dispatch('getCategories')
    }
  }
</script>

<style lang="less" scoped>
  .title
  {
    text-align: center;
    height: 33px;
    color: white;
  }

  .title > span
  {
    line-height: 33px;
    font-size: 22px;
  }

  .list-item
  {
    max-width: 500px;
    margin: 5px auto;
  }
</style>
