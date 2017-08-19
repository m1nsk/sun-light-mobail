<template>
  <div class="page">
    <transition
    name="custom-classes-transition"
    enter-active-class="animated slideInRight"
    leave-active-class="animated slideOutRight"
  >
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
    font-family: 'Montserrat', sans-serif;
  }

</style>
