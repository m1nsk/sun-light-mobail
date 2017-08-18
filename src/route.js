import CatalogPage from './app/catalog/CatalogPage.vue'
import FavoritesPage from '~/app/favorites/FavoritesPage.vue'
import ProductPage from '~/app/product/ProductPage.vue'
import ProfilePage from '~/app/profile/ProfilePage.vue'
import StockPage from '~/app/stock/StockPage.vue'
import CategoryPage from '~/app/category/CategoryPage.vue'
import ReserveShopPage from '~/app/reserve/ReserveShopPage.vue'
import ReserveFormPage from '~/app/reserve/ReserveFormPage.vue'
import AcceptFormPage from '~/app/reserve/AcceptFormPage.vue'
import App from '~/app/App'

export default {
  // mode: 'history',
  // base: __dirname,
  routes: [
    {
      path: '/',
      name: 'index',
      component: App,
      children: [
        { path: 'catalog', name: 'catalog', component: CatalogPage },
        { path: 'stock', component: StockPage },
        { path: 'profile', component: ProfilePage },
        { path: 'favorites', component: FavoritesPage },
        { path: 'catalog/:category', name: 'category', component: CategoryPage },
        { path: 'catalog/:category/:product', name: 'product', component: ProductPage },
        { path: 'catalog/:category/:product/reserve', name: 'reserve', component: ReserveShopPage },
        { path: 'catalog/:category/:product/reserve/form', name: 'form', component: ReserveFormPage },
        { path: 'catalog/:category/:product/reserve/form/accept', name: 'accept', component: AcceptFormPage }
      ]
    }
  ]
}
