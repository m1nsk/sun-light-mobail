<template>
  <div class="reserve-form">
    <div class="reserve-form__wrapper">
      <title-header title="Оформление резерва" slot="header"></title-header>
      <div class="reserve-form__person">
        <div>
          <shop-form-card></shop-form-card>
          <form-card placeholder="Имя"></form-card>
          <form-card placeholder="Почта"></form-card>
          <form-card placeholder="Телефон"></form-card>
        </div>
        <accept-form-card class="reserve-form__accept"></accept-form-card>
      </div>
    </div>
    <div class="reserve-form__button-area">
      <menu-footer :menuItemData="footerActionData" @view="onActionClicked"></menu-footer>
    </div>
  </div>
</template>

<script>
  import TitleHeader from 'appComponents/components/headers/TitleHeader.vue'
  import FormCard from 'appComponents/components/cards/FormCard.vue'
  import AcceptFormCard from 'appComponents/components/cards/AcceptFormCard.vue'
  import ShopFormCard from 'appComponents/components/cards/ShopFormCard.vue'
  import MenuFooter from 'appComponents/components/footers/MenuFooter.vue'
  export default {
    components: {
      TitleHeader,
      AcceptFormCard,
      FormCard,
      MenuFooter,
      ShopFormCard
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
  .reserve-form
  {
    width: 100%;
    height: 100%;
  }

  .reserve-form__accept
  {
    width: 100%;
    height: 40px;
    padding-top: 100px;
  }

  .reserve-form__wrapper
  {
    width: 100%;
    max-width: 500px;
    height: 100%;
    margin: 0 auto;
  }

  .reserve-form__person
  {
    height: 70%;
    width: 80%;
    margin: 0 auto;
    padding-top: 50px;
  }

  .reserve-form__button-area
  {
    width: 100%;
    height: 39px;
    margin-top: 5px;
    margin-bottom: 5px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 2.8rem;
  }
</style>
