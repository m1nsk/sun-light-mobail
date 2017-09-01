<template>
  <div>
    <title-header title="Оформление резерва"></title-header>
    <second-footer><menu-footer :menuItemData="footerActionData" @view="onActionClicked"></menu-footer></second-footer>
    <page-content>
      <div class="content-layout content-relative">
        <shop-form-card></shop-form-card>
        <form-card placeholder="Имя"></form-card>
        <form-card placeholder="Почта"></form-card>
        <form-card placeholder="Телефон"></form-card>
        <accept-form-card class="reserve-form__accept"></accept-form-card>
      </div>
    </page-content>
  </div>
</template>

<script>
  import TitleHeader from 'appComponents/components/headers/TitleHeader.vue'
  import FormCard from 'appComponents/components/cards/FormCard.vue'
  import AcceptFormCard from 'appComponents/components/cards/AcceptFormCard.vue'
  import ShopFormCard from 'appComponents/components/cards/ShopFormCard.vue'
  import MenuFooter from 'appComponents/components/footers/MenuFooter.vue'
  import { SecondFooter } from '~/components/footer'
  import Content from '~/components/content'
  export default {
    components: {
      TitleHeader,
      AcceptFormCard,
      FormCard,
      MenuFooter,
      ShopFormCard,
      SecondFooter,
      'page-content': Content
    },
    data () {
      return {
        footerActionData: [
          {
            name: 'left',
            title: 'Отмена'
          },
          {
            name: 'right',
            title: 'Продолжить'
          }
        ]
      }
    },
    methods: {
      onActionClicked (data) {
        if (data['view'] === 'right') {
          this.$router.push(this.$route.path + 'accept/')
        } else if (data['view'] === 'left') {
          console.log('cancel')
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .reserve-form__accept
  {
    width: 100%;
    height: 40px;
  }

  .reserve-form__person
  {
    height: 70%;
    width: 80%;
    margin: 0 auto;
    padding-top: 50px;
  }

</style>
