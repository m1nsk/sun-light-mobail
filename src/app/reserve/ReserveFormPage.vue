<template>
  <div class="wrapper">
    <div class="formWrapper">
      <title-menu title="Оформление резерва" ></title-menu>
      <div class="contentWrapper">
        <div>
          <shop-form-component></shop-form-component>
          <form-component placeholder="Имя"></form-component>
          <form-component placeholder="Почта"></form-component>
          <form-component placeholder="Телефон"></form-component>
        </div>
        <accept-form-component class="accept"></accept-form-component>
      </div>
    </div>
    <div class="btnArea">
      <menu-footer :menuItemData="footerActionData" @view="onActionClicked"></menu-footer>
    </div>
  </div>
</template>

<script>
  import TitleMenu from 'appComponents/components/headers/TitleHeader.vue'
  import ContentWrapper from 'appComponents/components/wrappers/ContentWrapper.vue'
  import ShopFormComponent from 'appComponents/components/cards/ShopFormCard.vue'
  import FormComponent from 'appComponents/components/cards/FormCard.vue'
  import AcceptFormComponent from 'appComponents/components/cards/AcceptFormCard.vue'
  import ShopButtonSmall from 'appComponents/components/buttons/ButtonSmall.vue'
  import MenuFooter from 'appComponents/components/footers/MenuFooter.vue'
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
          this.$router.push(this.$route.path + 'accept/')
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
    cursor: pointer;
  }

  .cancelBtn
  {
    height: 100%;
    width: 50%;
    text-align: center;
    cursor: pointer;
  }
</style>
