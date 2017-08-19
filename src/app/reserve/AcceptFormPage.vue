<template>
  <div class="wrapper">
    <div class="formWrapper">
      <title-menu title="Подтверждение" slot="header"></title-menu>
      <div class="contentWrapper">
        <shop-form-component></shop-form-component>
        <form-component placeholder="Почта"></form-component>
        <form-component placeholder="Код подтверждения"></form-component>
      </div>
      <accept-form-component class="accept"></accept-form-component>
    </div>
    <div class="btnArea">
      <menu-footer :menuItemData="footerActionData" @view="onActionClicked"></menu-footer>
    </div>
  </div>
</template>

<script>
  import TitleMenu from 'appComponents/menu/TitleMenu.vue'
  import ContentWrapper from 'appComponents/menu/helpers/ContentWrapper.vue'
  import ShopFormComponent from 'appComponents/menu/components/ShopFormComponent.vue'
  import FormComponent from 'appComponents/menu/components/FormComponent.vue'
  import AcceptFormComponent from 'appComponents/menu/components/AcceptFormComponent.vue'
  import ShopButtonSmall from 'appComponents/menu/helpers/ShopButtonSmall.vue'
  import MenuFooter from 'appComponents/menu/MenuFooter.vue'
  export default {
    components: {
      TitleMenu,
      ContentWrapper,
      ShopFormComponent,
      AcceptFormComponent,
      FormComponent,
      ShopButtonSmall,
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

  .accept
  {
    width: 100%;
    height: 40px;
    padding-top: 100px;
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
