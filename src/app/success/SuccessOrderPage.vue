<template>
  <div class="successWrapper">
    <title-menu title="Успех"></title-menu>
    <div class="successMessage">
      <div class="reserve">
        <span><b>Резерв №{{ successData.id }} создан</b></span>
      </div>
      <div class="price">
        <span>Общая стоимость {{ successData.price }}</span>
      </div>
      <hr class="max-width hr" color="gray" size="1px"/>
      <div class="info">
        <span>{{ successData.info }}</span>
      </div>
      <div class="prePay">
        <span><b>Сумма предоплаты {{ successData.prePay }}</b></span>
      </div>
    </div>
    <div class="btnArea">
    <menu-footer :menuItemData="footerActionData" @view="onActionClicked"></menu-footer>
  </div>
  </div>
</template>

<script>
  import TitleMenu from 'appComponents/menu/TitleHeader.vue'
  import ContentWrapper from 'appComponents/menu/helpers/ContentWrapper.vue'
  import ShopButton from 'appComponents/menu/helpers/ShopButton.vue'
  import MenuFooter from 'appComponents/menu/MenuFooter.vue'
  export default {
    components: {
      TitleMenu,
      ContentWrapper,
      ShopButton,
      MenuFooter
    },
    data () {
      return {
        successData: {
          id: '100500',
          price: '9 379',
          info: 'ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
          prePay: '100р'
        },
        footerActionData: [
          {
            name: 'pay',
            title: 'Оплатить'
          }
        ]
      }
    }
  }
</script>

<style lang="less" scoped>
  .max-width
  {
    max-width: 500px;
    margin: auto;
  }

  .reservBtn
  {
    height: 39px;
    width: 100%;
    text-align: center;
    margin: 5px auto;
    background-color: #fff0e9;
    border: 1px solid #fff0e9;
    cursor: pointer;
  }

  .successWrapper
  {
    width: 100%;
    max-width: 500px;
    height: 100%;
    position: relative;
  }

  .successMessage
  {
    width: 80%;
    height: 70%;
    vertical-align: middle;
    position: absolute;
    left: 10%;
    bottom: 5.6rem;
  }

  .reserve
  {
    height: 24px;
    display: table;
    text-align: center;
    width: 100%;
  }

  .reserve > span
  {
    font-size: 18px;
    display: table-cell;
    vertical-align: top;
  }

  .price
  {
    height: 16px;
    display: table;
    text-align: center;
    width: 100%;
  }

  .price > span
  {
    font-size: 12px;
    display: table-cell;
    vertical-align: top;
  }

  .info
   {
     height: 80px;
     display: table;
     text-align: center;
     width: 100%;
   }

  .info > span
  {
    font-size: 16px;
    display: table-cell;
    vertical-align: top;
    line-height: 32px;
  }

  .prePay
  {
    padding-top: 25px;
    height: 20px;
    display: table;
    text-align: center;
    width: 100%;
  }

  .prePay > span
  {
    font-size: 14px;
    display: table-cell;
    vertical-align: top;
    line-height: 18px;
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
</style>
