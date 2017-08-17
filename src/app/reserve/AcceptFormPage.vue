<template>
  <content-wrapper class="formWrapper">
    <reserve-menu title="Подтверждение" slot="header"></reserve-menu>
    <div>
      <shop-form-component></shop-form-component>
      <form-component placeholder="Почта"></form-component>
      <form-component placeholder="Код подтверждения"></form-component>
    </div>
    <accept-form-component class="accept"></accept-form-component>
    <div class="btnArea max-width" slot="buttons">
      <shop-button-small @click.native="onContinueClicked" caption="Отменить" class="cancelBtn" ></shop-button-small>
      <shop-button-small @click.native="onContinueClicked" caption="Продолжить" class="ContinueBtn" ></shop-button-small>
    </div>
  </content-wrapper>
</template>

<script>
  import ReserveMenu from 'appComponents/menu/TitleMenu.vue'
  import ContentWrapper from 'appComponents/menu/helpers/ContentWrapper.vue'
  import ShopFormComponent from 'appComponents/menu/components/ShopFormComponent.vue'
  import FormComponent from 'appComponents/menu/components/FormComponent.vue'
  import AcceptFormComponent from 'appComponents/menu/components/AcceptFormComponent.vue'
  import ShopButtonSmall from 'appComponents/menu/helpers/ShopButtonSmall.vue'
  export default {
    components: {
      ReserveMenu,
      ContentWrapper,
      ShopFormComponent,
      AcceptFormComponent,
      FormComponent,
      ShopButtonSmall
    },
    data () {
      return {
      }
    },
    methods: {
      onContinueClicked () {
        this.$router.push(this.$route.path + 'accept/')
      }
    }
  }
</script>

<style lang="less" scoped>
  .accept
  {
    width: 100%;
    height: 40px;
    padding-top: 154px;
  }

  .formWrapper
  {
    height: 100%;
    width: 100%;
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
  }

  .ContinueBtn
  {
    height: 100%;
    width: 50%;
    text-align: center;
    background-color: #f4f4f4;
    border: 1px solid #f4f4f4;
    float: left;
    cursor: pointer;
  }

  .cancelBtn
  {
    height: 100%;
    width: 50%;
    text-align: center;
    background-color: #f4f4f4;
    border: 1px solid #f4f4f4;
    float: left;
    cursor: pointer;
  }
</style>
