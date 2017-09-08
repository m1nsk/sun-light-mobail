import CatalogPage from './app/catalog/CatalogPage.vue'
import FavoritesPage from '~/app/favorites/FavoritesPage.vue'
import ProductPage from '~/app/product/ProductPage.vue'
import ProfileInfoPage from '~/app/profileInfo/ProfileInfoPage.vue'
import StockPage from '~/app/stock/StockPage.vue'
import SalePage from '~/app/sale/SalePage.vue'
import CategoryPage from '~/app/category/CategoryPage.vue'
import ReserveShopPage from '~/app/reserve/ReserveShopPage.vue'
import ReserveFormPage from '~/app/reserve/ReserveFormPage.vue'
import AcceptFormPage from '~/app/reserve/AcceptFormPage.vue'
import SuccessOrderPage from '~/app/success/SuccessOrderPage.vue'
import ProfilePage from '~/app/profile/ProfilePage.vue'
import FilterPage from '~/app/filter/FilterPage.vue'
import Login from '~/app/login/Login.vue'
import CodeEnter from '~/app/login/CodeEnter.vue'
import App from '~/app/App'

export default {
  // mode: 'history',
  // base: __dirname,
  routes: [
    {
      path: '/',
      name: 'app',
      component: App,
      children: [
        { path: 'catalog', name: 'catalog', component: CatalogPage },
        { path: 'login', name: 'login', component: Login },
        { path: 'login/code', name: 'code', component: CodeEnter },
        { path: 'stock', name: 'stock', component: StockPage },
        { path: 'stock/:sale', name: 'sale', component: SalePage },
        { path: 'favorites', name: 'favorites', component: FavoritesPage },
        { path: 'filter', name: 'filter', component: FilterPage },
        { path: 'profile', name: 'profile', component: ProfilePage },
        { path: 'profile/person', name: 'person', component: ProfileInfoPage },
        { path: 'catalog/:id', name: 'catalogId', component: CategoryPage },
        { path: 'product/:id', name: 'product', component: ProductPage },
        { path: 'reserve', name: 'reserve', component: ReserveShopPage },
        { path: 'reserve/form/shop/:id', name: 'form', component: ReserveFormPage },
        { path: 'reserve/form/shop/:id/accept', name: 'accept', component: AcceptFormPage },
        { path: 'reserve/form/shop/:id/accept/success', name: 'success', component: SuccessOrderPage }
      ]
    }
  ]
}
