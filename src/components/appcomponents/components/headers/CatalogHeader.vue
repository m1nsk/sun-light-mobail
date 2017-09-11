<template>
  <page-header class="header-shadow">
    <header-link :left="true" :edge="false">
      <back-button></back-button>
    </header-link>
    <header-link :left="false" :edge="false" @click.native="onFilterClicked">
      <div class="frame flex-center">
        <img src="/static/myIcons/filter.svg" class="icon">
      </div>
    </header-link>
    <header-link :left="false" :edge="false" @click.native="onSearchClicked">
      <div class="frame flex-center">
        <img src="/static/myIcons/search.svg" class="icon">
      </div>
    </header-link>
    <div class="title page-slide">
      <div v-if="state === false" :key="0">
        <div class="category"><b>{{pageData.category}}</b></div>
        <div class="pages">{{pageData.num}} страница из {{pageData.total}}</div>
      </div>
      <div v-else :key="1">
        <searchbar v-model="search" :searchText="search"></searchbar>
      </div>
    </div>
  </page-header>
</template>

<script>
  import Content from '~/components/content'
  import searchbar from '~/components/searchbar'
  import { Header, HeaderLink, HeaderTitle } from '~/components/header'
  import Icon from '~/components/icons'
  import BackButton from 'appComponents/components/BackButton.vue'
  export default {
    components: {
      BackButton,
      HeaderLink,
      HeaderTitle,
      searchbar,
      'page-header': Header,
      'page-content': Content,
      Icon
    },
    props: ['pageData'],
    data () {
      return {
        state: false,
        search: ''
      }
    },
    methods: {
      onFilterClicked () {
        this.$router.push('/filter')
      },
      onSearchClicked () {
        this.state =! this.state
        if (this.state === false) {
          this.$store.commit('setSearch', this.search)
        } else if (this.state === true) {
          this.search = this.$store.getters.getSearch
        }
      }
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
  }

  .header
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
    height: 22px;
    width: 230px;
    text-align: center;
    font-size: 18px;
  }

  .pages
  {
    height: 22px;
    width: 230px;
    text-align: center;
    font-size: 12px;
  }
</style>
