<template>
  <content-wrapper>
    <reserve-menu slot="header"></reserve-menu>
    <hr>
    <product-view-mini></product-view-mini>
    <hr>
    <div class="shopCount">
      <span>Найдено {{ shopCount }} магазина</span>
    </div>
    <shop-component v-for="item in shopsList" :shopData="item" :key="item.id"></shop-component>
    <hr>
  </content-wrapper>
</template>

<script>
  import ReserveMenu from 'appComponents/menu/ReserveMenu.vue'
  import ContentWrapper from 'appComponents/menu/helpers/ContentWrapper.vue'
  import ShopComponent from 'appComponents/menu/components/ShopComponent.vue'
  import ProductViewMini from 'appComponents/menu/components/ProductViewMini.vue'
  import Content from '~/components/content'
  import { List, ListItem } from '~/components/list'
  export default {
    components: {
      ListItem,
      List,
      ContentWrapper,
      ProductViewMini,
      ShopComponent,
      ReserveMenu,
      'page-content': Content
    },
    data () {
      return {
        shopsList: [
          {
            station: 'Сенная',
            address: 'village somewhere',
            worktime: '10:00 - 19:00',
            status: 'В наличии'
          },
          {
            station: 'Сенная',
            address: 'village somewhere',
            worktime: '10:00 - 19:00',
            status: 'В наличии'
          },
          {
            station: 'Сенная',
            address: 'village somewhere',
            worktime: '10:00 - 19:00',
            status: 'В наличии'
          }
        ],
        shopCount: 3
      }
    }
  }
</script>

<style lang="less" scoped>
  .shopCount
  {
    text-align: center;
  }
</style>
