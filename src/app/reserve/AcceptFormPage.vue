<template>
  <div>
    <title-header title="Подтверждение"></title-header>
    <second-footer><menu-footer :menuItemData="footerActionData" @view="onActionClicked"></menu-footer></second-footer>
    <page-content class="content-padding-bottom">
      <div class="content-layout">
        <shop-form-card></shop-form-card>
        <form-card placeholder="Почта"></form-card>
        <form-card placeholder="Код подтверждения"></form-card>
      </div>
    </page-content>
  </div>
</template>

<script>
  import TitleHeader from 'appComponents/components/headers/TitleHeader.vue'
  import ShopFormCard from 'appComponents/components/cards/ShopFormCard.vue'
  import FormCard from 'appComponents/components/cards/FormCard.vue'
  import MenuFooter from 'appComponents/components/footers/MenuFooter.vue'
  import { SecondFooter } from '~/components/footer'
  import Content from '~/components/content'
  export default {
    components: {
      TitleHeader,
      ShopFormCard,
      FormCard,
      MenuFooter,
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
          this.$router.push(this.$route.path + 'success/')
        } else if (data['view'] === 'left') {
          console.log('cancel')
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .accept-form__wrapper
  {
    width: 100%;
    max-width: 500px;
    height: 100%;
    margin: 0 auto;
  }

  .accept-form__mail-code
  {
    height: 70%;
    width: 80%;
    margin: 0 auto;
  }
</style>
