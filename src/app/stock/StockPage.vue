<template>
  <div>
    <main-header></main-header>
    <page-content class="content-padding-bottom">
      <banner-item bannerImg="/static/logo.png" v-for="item in 10" :key="item.id">
      </banner-item>
    </page-content>
  </div>
</template>

<script>
  import MainHeader from 'appComponents/components/headers/MainHeader.vue'
  import ContentWrapper from 'appComponents/components/wrappers/ContentWrapper.vue'
  import BannerItem from 'appComponents/components/banners/BannerItem.vue'
  import Content from '~/components/content'

  export default {
    components: {
      ContentWrapper,
      MainHeader,
      BannerItem,
      'page-content': Content
    },
    data () {
      return {
      }
    }
  }
</script>

<style lang="less" scoped>
</style>
