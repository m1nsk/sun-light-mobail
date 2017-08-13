<template>
  <page-header class="categoryHeader">
    <header-link :left="true" :edge="false">
      <div class=frame>
        <span class="helper"></span>
        <img src="/static/myIcons/left-arrow.svg" class="icon">
      </div>
    </header-link>
    <header-link :left="false" :edge="false" >
      <div class=frame>
        <span class="helper"></span>
        <img src="/static/myIcons/filter.svg" class="icon">
      </div>
    </header-link>
    <header-link :left="false" :edge="false" >
      <div class=frame>
        <span class="helper"></span>
        <img src="/static/myIcons/search.svg" class="icon">
      </div>
    </header-link>
    <div class="title">
      <div class="category"><b>{{pageData.category}}</b></div>
      <div class="pages">{{pageData.num}} страница из {{pageData.total}}</div>
    </div>
  </page-header>
</template>

<script>
  import Content from '~/components/content'
  import { Header, HeaderLink, HeaderTitle } from '~/components/header'
  import Icon from '~/components/icons'

  export default {
    components: {
      Header,
      HeaderLink,
      HeaderTitle,
      'page-header': Header,
      'page-content': Content,
      Icon
    },
    data () {
      return {
      }
    },
    props: ['pageData']
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

  .categoryHeader
  {
    width: 100%;
    height: 48px;
  }

  .title
  {
    height: 48px;
    width: 230px;
    margin: auto;
  }

  .category
  {
    height: 24px;
    width: 230px;
    text-align: center;
    font-size: 22px;
  }

  .pages
  {
    height: 24px;
    width: 230px;
    text-align: center;
    font-size: 16px;
  }
</style>
