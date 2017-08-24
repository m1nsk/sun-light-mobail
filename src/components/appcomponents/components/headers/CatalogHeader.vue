<template>
  <page-header class="header-shadow">
    <header-link :left="true" :edge="false">
      <back-button></back-button>
    </header-link>
    <header-link :left="false" :edge="false" @click.native="onFilterClicked">
      <div class="header__frame">
        <span class="header__helper"></span>
        <img src="/static/myIcons/filter.svg" class="header__icon">
      </div>
    </header-link>
    <header-link :left="false" :edge="false">
      <div class="header__frame" >
        <span class="header__helper"></span>
        <img src="/static/myIcons/search.svg" class="header__icon">
      </div>
    </header-link>
    <div class="header__title">
      <div class="header__category"><b>{{pageData.category}}</b></div>
      <div class="header__pages">{{pageData.num}} страница из {{pageData.total}}</div>
    </div>
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
      Header,
      HeaderLink,
      HeaderTitle,
      'page-header': Header,
      'page-content': Content,
      Icon
    },
    props: ['pageData'],
    data () {
      return {
      }
    },
    methods: {
      onFilterClicked () {
        this.$router.push('/filter')
      }
    }
  }
</script>

<style lang="less" scoped>
  .header__icon
  {
    vertical-align: middle;
    width: 18px;
    height: 18px;
  }

  .header__frame {
    height: 100%;      /* equals max image height */
    width: 32px;
    white-space: nowrap; /* this is required unless you put the helper span closely near the img */
    text-align: center;
  }

  .header__helper {
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }

  .header
  {
    width: 100%;
    height: 48px;
  }

  .header__title
  {
    height: 48px;
    width: 230px;
    margin: auto;
  }

  .header__category
  {
    height: 22px;
    width: 230px;
    text-align: center;
    font-size: 18px;
  }

  .header__pages
  {
    height: 22px;
    width: 230px;
    text-align: center;
    font-size: 12px;
  }
</style>
