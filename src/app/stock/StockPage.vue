<template>
  <content-wrapper>
    <main-menu slot="header"></main-menu>
    <div v-for="item in bannerItems" :key="item.id" class="listItem">
      <img src='/static/logo.png' class="banner"/>
    </div>
  </content-wrapper>
</template>

<script>
  import scroll from '~/components/scroll'
  import MainMenu from 'appComponents/menu/MainMenu.vue'
  import ContentWrapper from 'appComponents/menu/helpers/ContentWrapper.vue'
  import Content from '~/components/content'
  export default {
    components: {
      scroll,
      ContentWrapper,
      MainMenu,
      'page-content': Content
    },
    data () {
      return {
        bannerItems: [1, 2, 3, 4, 5, 6, 7, 8]
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
