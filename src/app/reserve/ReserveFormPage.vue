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
    <div class="btnArea" slot="buttons">
      <action-footer leftTitle="Отменить" rightTitle="Продолжить"></action-footer>
      <!--
      <shop-button-small @click.native="onContinueClicked" caption="Отменить" class="cancelBtn" ></shop-button-small>
      <shop-button-small @click.native="onContinueClicked" caption="Продолжить" class="ContinueBtn" ></shop-button-small>
      -->
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
  import ActionFooter from 'appComponents/menu/ActionFooter.vue'
  export default {
    components: {
      TitleMenu,
      ContentWrapper,
      ShopFormComponent,
      AcceptFormComponent,
      FormComponent,
      ShopButtonSmall,
      ActionFooter
    },
    data () {
      return {
      }
    },
    methods: {
      onContinueClicked () {
        console.log('clicked')
        this.$router.push(this.$route.path + 'accept/')
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
