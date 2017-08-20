<template>
  <page-header class="shadow">
    <header-link :left="true" :edge="false">
      <div class=frame>
        <span class="helper"></span>
        <img src="/static/myIcons/left-arrow.svg" class="icon">
      </div>
    </header-link>
    <header-link :left="false" :edge="false" >
      <div class=frame>
        <span class="helper"></span>
        <img src="/static/myIcons/share.svg" class="icon">
      </div>
    </header-link>
    <header-link :left="false" :edge="false" >
      <div class=frame>
        <span class="helper"></span>
        <img src="/static/myIcons/heart.svg" class="icon">
      </div>
    </header-link>
    <header-title>Аритикул 12345</header-title>
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
  .icon
  {
    vertical-align: middle;
    width: 18px;
    height: 18px;
  }

  .frame {
    height: 100%;      /* equals max image height */
    width: 32px;
    white-space: nowrap; /* this is required unless you put the helper span closely near the img */
    text-align: center;
  }

  .helper {
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }
</style>
