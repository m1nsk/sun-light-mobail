<template>
  <page-header class="header-shadow">
    <header-link :left="true" :edge="false">
      <div class="header__frame">
        <span class="header__helper"></span>
        <img src="/static/logo.png" class="header__logo">
      </div>
    </header-link>
    <header-link :left="false" :edge="false">
      <div class="header__frame">
        <span class="header__helper"></span>
        <img src="/static/myIcons/search.svg" class="header__icon">
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
  .header__logo
  {
    vertical-align: middle;
    width: 48px;
    height: 22px;
  }

  .header__icon
  {
    vertical-align: middle;
    width: 18px;
    height: 18px;
  }

  .header__frame
  {
    height: 100%;      /* equals max image height */
    width: 48px;
    white-space: nowrap; /* this is required unless you put the helper span closely near the img */
    text-align: center;
  }

  .header__helper
  {
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }
</style>
