<template>
  <content-wrapper>
    <title-header title="Где забрать?" slot="header"></title-header>
    <shop-card-mini></shop-card-mini>
    <div class="shopCount">
      <span>Найдено {{ shopCount }} магазина</span>
    </div>
    <shop-card v-for="item in shopsList" :shopData="item" :key="item.id" @click.native="onShopClicked"></shop-card>
  </content-wrapper>
</template>

<script>
  import TitleHeader from 'appComponents/components/headers/TitleHeader.vue'
  import ContentWrapper from 'appComponents/components/wrappers/ContentWrapper.vue'
  import ShopCard from 'appComponents/components/cards/ShopCard.vue'
  import ShopCardMini from 'appComponents/components/cards/ShopCardMini.vue'
  export default {
    components: {
      ContentWrapper,
      ShopCardMini,
      ShopCard,
      TitleHeader
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
