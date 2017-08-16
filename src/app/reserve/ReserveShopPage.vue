<template>
  <content-wrapper>
    <reserve-menu title="Где забрать?" slot="header"></reserve-menu>
    <product-view-mini></product-view-mini>
    <div class="shopCount">
      <span>Найдено {{ shopCount }} магазина</span>
    </div>
    <shop-component v-for="item in shopsList" :shopData="item" :key="item.id" @click.native="onShopClicked"></shop-component>
  </content-wrapper>
</template>

<script>
  import ReserveMenu from 'appComponents/menu/TitleMenu.vue'
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
    },
    methods: {
      onShopClicked () {
        console.log('clicked')
        this.$router.push(this.$route.path + 'form/')
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
