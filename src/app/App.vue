<template>
  <div class="page">
    <transition name="slide">
      <router-view class="page-slide"></router-view>
    </transition>
    <menu-footer @view="changeView" :menuItemData="menuItemData"></menu-footer>
  </div>
</template>

<script>
  import MenuFooter from 'appComponents/components/footers/MenuFooter.vue'
  import Page from '~/components/page'

  export default {
    components: {
      Page,
      MenuFooter
    },
    data () {
      return {
        currentView: 'home',
        menuItemData: [
          {
            name: '/stock',
            title: 'Акции'
          },
          {
            name: '/catalog',
            title: 'Каталог'
          },
          {
            name: '/common',
            title: 'Избранное'
          },
          {
            name: '/profile',
            title: 'Профиль'
          }
        ]
      }
    },
    methods: {
      changeView (view) {
        this.$router.push(view['view'])
      }
    }
  }
</script>

<style lang="less">
  @import '../components/footer/footer.less';

  body, input, select, textarea {
    font-family: 'futurabookcregular',Arial,Helvetica,sans-serif;
  }

  @font-face {
    font-family: 'MyWebFont';
    src:  url('/assets/fontsfuturabookc-webfont') format('woff2')
  }

  //page transition
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }

  .slide-enter-active, .slide-leave-active {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition: all .3s;
  }
  .slide-enter {
    opacity: 0;
    transform: translate3d(70%, 0, 0);
  }
  .slide-leave-active {
    opacity: 0;
    transform: translate3d(-70%, 0, 0);
  }

  .transition-reverse {
    .slide-enter {
      opacity: 0;
      transform: translate3d(-70%, 0, 0);
    }
    .slide-leave-active {
      opacity: 0;
      transform: translate3d(70%, 0, 0);
    }
  }

  .page-slide
  {
    height: 100%;
    width: 100%;
  }

  .content-padding-bottom {
    padding-bottom: @footer-height;
  }

  .content-layout {
    width: 80%;
    max-width: 500px;
    margin: 5px auto;
  }

  .content-relative
  {
    height: 100%;
    position: relative;
  }

  .header-shadow
  {
    background:#FFF;
    -webkit-box-shadow: 0 -3.4px 5px 2px #777;
    -moz-box-shadow: 0 -3.4px 5px 2px #777;
    box-shadow: 0 -3.4px 5px 2px #777;
  }

  .footer-shadow
  {
    background:#FFF;
    -webkit-box-shadow: 0 3.4px 5px 2px #777;
    -moz-box-shadow: 0 3.4px 5px 2px #777;
    box-shadow: 0 3.4px 5px 2px #777;
  }

  .flex-center
  {
    display: flex;
    align-items: center;
    justify-content: center;
  }

</style>
