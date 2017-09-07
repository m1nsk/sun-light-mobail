<template>
  <page-header class="header-shadow">
    <header-link :left="true" :edge="false">
      <back-button></back-button>
    </header-link>
    <header-link :left="false" :edge="false" >
      <div class="frame flex-center">
        <img src="/static/myIcons/share.svg" class="icon">
      </div>
    </header-link>
    <header-link :left="false" :edge="false" >
      <div class="frame flex-center">
        <img src="/static/myIcons/heart.svg" class="icon">
      </div>
    </header-link>
    <header-title>Артикул: {{ product_id }}</header-title>
  </page-header>
</template>

<script>
  import Content from '~/components/content'
  import { Header, HeaderLink, HeaderTitle } from '~/components/header'
  import Icon from '~/components/icons'
  import BackButton from 'appComponents/components/BackButton.vue'
  export default {
    components: {
      BackButton,
      HeaderLink,
      HeaderTitle,
      'page-header': Header,
      'page-content': Content,
      Icon
    },
    props: ['product_id']
  }
</script>

<style lang="less" scoped>
  .icon
  {
    vertical-align: middle;
    width: 18px;
    height: 18px;
  }

  .frame {
    height: 100%;      /* equals max image height */
    width: 32px;
  }
</style>
