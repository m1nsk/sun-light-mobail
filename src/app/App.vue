<template>
  <div class="page">
    <transition name="slide">
      <router-view></router-view>
    </transition>
    <menu-footer @view="changeView" :menuItemData="menuItemData"></menu-footer>
  </div>
</template>

<script>
  import MenuFooter from 'appComponents/components/footers/MenuFooter.vue'

  export default {
    components: {
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
  .page {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
  }

  body, input, select, textarea {
    font-family: 'futurabookcregular',Arial,Helvetica,sans-serif;
  }

  .shadow
  {
    -webkit-box-shadow: 0px 1px 17px 0px rgba(0,0,0,0.33);
    -moz-box-shadow: 0px 1px 17px 0px rgba(0,0,0,0.33);
    box-shadow: 0px 1px 17px 0px rgba(0,0,0,0.33);
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

</style>
