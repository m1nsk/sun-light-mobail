<template>
  <div class="page">
    <main-menu></main-menu>
    <page-content style="background-color: #ff0000">
      <scroll :enableInfinite="false" class="scroll">
        <div class='contentWrapper'>
          <router-link tag="li" :to="{name: 'category', params: { category: item.link }}" v-for="item in catalogItems" :key="item.id" class="listItem">
            <div class="itemTitle">
              <span>{{ item.title }}</span>
            </div>
            <div v-if="item.banner !== null" class=frame>
              <span class="helper"></span>
              <img :src="item.banner" class="banner">
            </div>
            <hr align="center" width="80%" color="white" size="1px"/>
          </router-link>
        </div>
      </scroll>
    </page-content>
  </div>
</template>

<script>
  import { List, ListItem } from '~/components/list'
  import scroll from '~/components/scroll'
  import MainMenu from 'appComponents/menu/MainMenu.vue'
  import BannerItem from 'appComponents/menu/BannerItem.vue'
  import Content from '~/components/content'
  export default {
    components: {
      List,
      ListItem,
      scroll,
      MainMenu,
      BannerItem,
      'page-content': Content
    },
    data () {
      return {
        catalogItems: [
          {
            title: 'Новинки',
            banner: '/static/logo.png',
            link: 'new'
          },
          {
            title: 'Одежда',
            banner: null,
            link: 'wear'
          },
          {
            title: 'Мотоциклы',
            banner: '/static/logo.png',
            link: 'moto'
          },
          {
            title: 'Новинки',
            banner: null,
            link: 'new'
          },
          {
            title: 'Одежда',
            banner: '/static/logo.png',
            link: 'wear'
          },
          {
            title: 'Мотоциклы',
            banner: null,
            link: 'moto'
          },
          {
            title: 'Новинки',
            banner: null,
            link: 'new'
          },
          {
            title: 'Одежда',
            banner: '/static/logo.png',
            link: 'wear'
          },
          {
            title: 'Мотоциклы',
            banner: null,
            link: 'moto'
          }
        ]
      }
    }
  }
</script>

<style lang="less" scoped>
  .contentWrapper{
    width: 230px;
    margin: 20px auto;
  }

  .banner
  {
    vertical-align: middle;
    width: 230px;
    height: 87px;
  }

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

  .itemTitle
  {
    text-align: center;
    height: 33px;
    width: 100%;
    color: white;
  }

  .itemTitle > span
  {
    line-height: 33px;
    font-size: 22px;
  }

  .listItem
  {
    width: 230px;
    cursor: pointer;
    margin: 5px auto;
    list-style-type: none;
  }

  .frame {
    height: 87px;      /* equals max image height */
    width: 100%;
    white-space: nowrap; /* this is required unless you put the helper span closely near the img */
    text-align: center;
  }

  .helper {
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }
</style>
