<template>
  <div class="page">
    <transition name="slide">
      <router-view></router-view>
    </transition>
    <menu-footer @view="changeView" :menuItemData="menuItemData"></menu-footer>
  </div>
</template>

<script>
  import MenuFooter from 'appComponents/menu/MenuFooter.vue'

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
            name: '/favorites',
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
  }

  body, input, select, textarea {
    font-family: 'futurabookcregular',Arial,Helvetica,sans-serif;
  }

  .slide-enter-active {
    transition: all .3s ease;
  }
  /*
  .slide-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  */
  .slide-enter, .slide-leave-to
  /* .slide-fade-leave-active до версии 2.1.8 */ {
    transform: translateX(300px);
    opacity: 0.5;
  }
</style>
