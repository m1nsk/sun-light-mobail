<template>
  <page-header class="header-shadow">
    <header-link :left="true" :edge="false">
      <div class="frame flex-center">
        <img src="/static/icon.png" class="logo">
      </div>
    </header-link>
    <header-link :left="false" :edge="false">
      <div class="frame flex-center">
        <img src="/static/myIcons/search.svg" class="icon">
      </div>
    </header-link>
    <header-title>ShopName</header-title>
  </page-header>
</template>

<script>
  import Content from '~/components/content'
  import { Header, HeaderLink, HeaderTitle } from '~/components/header'
  import Icon from '~/components/icons'

  export default {
    components: {
      HeaderLink,
      HeaderTitle,
      'page-header': Header,
      'page-content': Content,
      Icon
    }
  }
</script>

<style lang="less" scoped>
  .logo
  {
    vertical-align: middle;
    width: 48px;
    height: 22px;
  }

  .icon
  {
    vertical-align: middle;
    width: 18px;
    height: 18px;
  }

  .frame
  {
    height: 100%;      /* equals max image height */
    width: 48px;
  }
</style>
