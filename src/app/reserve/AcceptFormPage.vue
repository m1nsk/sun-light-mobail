<template>
  <div class="wrapper">
    <div class="formWrapper">
      <title-header title="Подтверждение" slot="header"></title-header>
      <div class="contentWrapper">
        <shop-form-card></shop-form-card>
        <form-card placeholder="Почта"></form-card>
        <form-card placeholder="Код подтверждения"></form-card>
      </div>
    </div>
    <div class="btnArea">
      <menu-footer :menuItemData="footerActionData" @view="onActionClicked"></menu-footer>
    </div>
  </div>
</template>

<script>
  import TitleHeader from 'appComponents/components/headers/TitleHeader.vue'
  import ShopFormCard from 'appComponents/components/cards/ShopFormCard.vue'
  import FormCard from 'appComponents/components/cards/FormCard.vue'
  import MenuFooter from 'appComponents/components/footers/MenuFooter.vue'
  export default {
    components: {
      TitleHeader,
      ShopFormCard,
      FormCard,
      MenuFooter
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
  .wrapper
  {
    width: 100%;
    height: 100%;
  }

  .formWrapper
  {
    width: 100%;
    max-width: 500px;
    height: 100%;
    margin: 0 auto;
  }

  .contentWrapper
  {
    height: 70%;
    width: 80%;
    margin: 0 auto;
    padding-top: 50px;
  }

  .max-width
  {
    max-width: 500px;
    margin: auto;
  }

  .btnArea
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

  .ContinueBtn
  {
    height: 100%;
    width: 50%;
    text-align: center;
    float: left;
    cursor: pointer;
  }

  .cancelBtn
  {
    height: 100%;
    width: 50%;
    text-align: center;
    float: left;
    cursor: pointer;
  }
</style>
