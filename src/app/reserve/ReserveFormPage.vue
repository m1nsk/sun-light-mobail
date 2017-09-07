<template>
  <div>
    <title-header title="Оформление резерва"></title-header>
    <second-footer>
      <action-footer @action="onActionClicked"></action-footer>
    </second-footer>
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
  import ActionFooter from 'appComponents/components/footers/ActionFooter.vue'
  import ButtonSmall from 'appComponents/components/buttons/ButtonSmall.vue'
  import { SecondFooter } from '~/components/footer'
  import Content from '~/components/content'
  export default {
    components: {
      ButtonSmall,
      TitleHeader,
      AcceptFormCard,
      FormCard,
      ActionFooter,
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
        console.log(data)
        if (data.action === 'accept') {
          this.$router.push({
            name: 'accept',
            params: {
              id: this.$route.params.id
            }
          })
        } else if (data.action === 'cancel') {
          this.$router.push(-1)
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
</style>
