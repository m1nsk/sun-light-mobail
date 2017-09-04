<template>
  <div>
    <main-header></main-header>
    <page-content style="background-color:#ff0000" class="content-padding-bottom">
      <div v-if="dataLoaded === false" class="flex-center pageIsLoading">
        <i class="fa fa-spinner fa-pulse fa-3x fa-fw" style="color: white"></i>
      </div>
      <div v-else-if="dataLoaded === true">
        <div class="content-layout">
          <div tag="li"v-for="item in catalogItems" :key="item.id" class="catalog__item">
            <router-link v-if="item.type !== banner" :to="{name: 'catalogId', params: { id: item.id }}" class="catalog__title">
              <div>
                <span>{{ item.label }}</span>
              </div>
            </router-link>
            <router-link :to="{name: 'catalogId', params: { id: item.id }}" class="catalog__title" v-else>
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
  import { getCatalogs } from 'api/index'
  import Content from '~/components/content'
  import MainHeader from 'appComponents/components/headers/MainHeader.vue'
  import BannerItem from 'appComponents/components/banners/BannerItem.vue'
  import ContentWrapper from 'appComponents/components/wrappers/ContentWrapper.vue'
  export default {
    components: {
      MainHeader,
      BannerItem,
      ContentWrapper,
      'page-content': Content
    },
    data () {
      return {
        catalogItems: [
        ],
        banner: '/static/logo.png',
        dataLoaded: false
      }
    },
    created: function () {
      let promise = getCatalogs()
      promise.then((response) => {
        this.catalogItems = response.data.data
        this.dataLoaded = true
      })
    }
  }
</script>

<style lang="less" scoped>
  .catalog__title
  {
    text-align: center;
    height: 33px;
    width: 100%;
    color: white;
  }

  .catalog__title > span
  {
    line-height: 33px;
    font-size: 22px;
  }

  .catalog__item
  {
    max-width: 500px;
    cursor: pointer;
    margin: 5px auto;
    list-style-type: none;
  }
</style>
