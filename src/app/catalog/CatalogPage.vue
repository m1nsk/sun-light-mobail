<template>
  <content-wrapper style="background-color:#ff0000">
    <main-menu slot="header"></main-menu>
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
  </content-wrapper>
</template>

<script>
  import MainMenu from 'appComponents/menu/MainMenu.vue'
  import BannerItem from 'appComponents/menu/banners/BannerItem.vue'
  import ContentWrapper from 'appComponents/menu/helpers/ContentWrapper.vue'
  import Content from '~/components/content'
  export default {
    components: {
      MainMenu,
      BannerItem,
      ContentWrapper,
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
    },
    methods: {
      onRefresh (done) {
        /*
         Здесь может быть запрос на обновления данных
         */

        let self = this
        setTimeout(function () {
          self.time = new Date()
          done()  // call done
        }, 200)
      }
    }
  }
</script>

<style lang="less" scoped>
  .banner
  {
    vertical-align: middle;
    max-width: 500px;
    height: 87px;
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
    max-width: 500px;
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
