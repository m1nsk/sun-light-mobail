<template>
  <div>
    <main-header></main-header>
    <page-content class="content-padding-bottom">
      <banner-item bannerImg="/static/logo.png" v-for="item in 10" :key="item.id" @click.native="stockClicked(item)">
      </banner-item>
    </page-content>
  </div>
</template>

<script>
  import MainHeader from 'appComponents/components/headers/MainHeader.vue'
  import BannerItem from 'appComponents/components/banners/BannerItem.vue'
  import Content from '~/components/content'

  export default {
    components: {
      MainHeader,
      BannerItem,
      'page-content': Content
    },
    name: 'stock-page',
    methods: {
      stockClicked (item) {
        console.log(item)
        this.$router.push({
          name: 'sale',
          params: {
            sale: 1
          }
        })
      }
    },
    data () {
      return {
      }
    }
  }
</script>

<style lang="less" scoped>
</style>
