<template>
  <div class="stockPage">
    <main-menu></main-menu>
    <page-content>
      <scroll :enableInfinite="false" class="scroll">
        <list class="list">
          <list-item v-for="item in bannerItems" :key="item.id" class="listItem">
            <img src='/static/logo.png' class="banner"/>
          </list-item>
        </list>
      </scroll>
    </page-content>
  </div>
</template>

<script>
  import { List, ListItem } from '~/components/list'
  import scroll from '~/components/scroll'
  import MainMenu from 'appComponents/menu/MainMenu.vue'
  import Content from '~/components/content'
  export default {
    components: {
      List,
      ListItem,
      scroll,
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
  .scroll
  {
    height: 100%;
    width: 100%;
    margin: auto;
  }

  .list
  {
    height: 100%;
    border-width: 0;
  }

  .listItem
  {
    width: 100%;
    height: 87px;
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  .banner
  {
    margin: auto;
    width: 230px;
    height: 87px;
  }

</style>
