<template>
  <div class="my-page">
    <!-- <component :is="currentView"></component> -->
    <router-view></router-view>
    <menu-footer @view="changeView" :menuItemData="menuItemData"></menu-footer>
  </div>
</template>

<script>
  import Page from '~/components/page'
  import CatalogPage from '~/app/catalog/CatalogPage.vue'
  import FavoritesPage from '~/app/favorites/FavoritesPage.vue'
  import ProfilePage from '~/app/profile/ProfilePage.vue'
  import StockPage from '~/app/stock/StockPage.vue'
  import CategoryPage from '~/app/category/CategoryPage.vue'
  import ProductPage from '~/app/product/ProductPage.vue'
  import Home from '~/app/Home.vue'
  import MenuFooter from 'appComponents/menu/MenuFooter.vue'

  export default {
    components: {
      Page,
      Home,
      MenuFooter,
      'product': ProductPage,
      'category': CategoryPage,
      'catalog': CatalogPage,
      'favorites': FavoritesPage,
      'profile': ProfilePage,
      'stock': StockPage
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
  .my-page {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  body, input, select, textarea {
    font-family: 'futurabookcregular',Arial,Helvetica,sans-serif;
  }
</style>
