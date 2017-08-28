<template>
  <div>
    <title-header title="Где забрать?"></title-header>
    <page-content class="content-padding-bottom">
      <div class="content-layout">
        <shop-card-mini></shop-card-mini>
        <div class="shop__count">
          <span>Найдено {{ shopCount }} магазина</span>
        </div>
        <shop-card v-for="item in shopsList" :shopData="item" :key="item.id" @click.native="onShopClicked"></shop-card>
      </div>
    </page-content>
  </div>
</template>

<script>
  import TitleHeader from 'appComponents/components/headers/TitleHeader.vue'
  import ContentWrapper from 'appComponents/components/wrappers/ContentWrapper.vue'
  import ShopCard from 'appComponents/components/cards/ShopCard.vue'
  import ShopCardMini from 'appComponents/components/cards/ShopCardMini.vue'
  import Content from '~/components/content'
  export default {
    components: {
      ContentWrapper,
      ShopCardMini,
      ShopCard,
      TitleHeader,
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
  .shop__count
  {
    text-align: center;
  }
</style>
