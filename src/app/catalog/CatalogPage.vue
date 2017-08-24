<template>
  <content-wrapper style="background-color:#ff0000">
    <main-header slot="header-menu"></main-header>
    <router-link tag="li" :to="{name: 'category', params: { category: item.link }}" v-for="item in catalogItems" :key="item.id" class="catalog__item">
      <div class="catalog__title">
        <span>{{ item.title }}</span>
      </div>
      <banner-item :bannerImg="item.banner" v-if="item.banner !== null">
      </banner-item>
      <hr align="center" width="80%" color="white" size="1px"/>
    </router-link>
  </content-wrapper>
</template>

<script>
  import MainHeader from 'appComponents/components/headers/MainHeader.vue'
  import BannerItem from 'appComponents/components/banners/BannerItem.vue'
  import ContentWrapper from 'appComponents/components/wrappers/ContentWrapper.vue'
  export default {
    components: {
      MainHeader,
      BannerItem,
      ContentWrapper
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
  .catalog__title
  {
    text-align: center;
    height: 33px;
    width: 100%;
    color: white;
  }

  .catalog__title > span
  {
    line-height: 33px;
    font-size: 22px;
  }

  .catalog__item
  {
    max-width: 500px;
    cursor: pointer;
    margin: 5px auto;
    list-style-type: none;
  }
</style>
