<template>
  <content-wrapper>
    <main-header slot="header"></main-header>
    <banner-item bannerImg="/static/logo.png" v-for="item in 10" :key="item.id">
    </banner-item>
  </content-wrapper>
</template>

<script>
  import MainHeader from 'appComponents/components/headers/MainHeader.vue'
  import ContentWrapper from 'appComponents/components/wrappers/ContentWrapper.vue'
  import BannerItem from 'appComponents/components/banners/BannerItem.vue'
  export default {
    components: {
      ContentWrapper,
      MainHeader,
      BannerItem
    },
    data () {
      return {
      }
    }
  }
</script>

<style lang="less" scoped>
  .listItem
  {
    max-width: 500px;
    height: 87px;
    margin: 5px auto;
    list-style-type: none;
  }

  .banner
  {
    width: 230px;
    height: 87px;
    display: block;
    margin: auto;
  }

</style>
