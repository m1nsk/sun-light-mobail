<template>
  <div class="success">
    <title-header title="Успех"></title-header>
    <div class="success__detail">
      <div class="success__reserve">
        <span><b>Резерв №{{ successData.id }} создан</b></span>
      </div>
      <div class="success__price">
        <span>Общая стоимость {{ successData.price }}</span>
      </div>
      <hr class="max-width hr" color="gray" size="1px"/>
      <div class="success__info">
        <span>{{ successData.info }}</span>
      </div>
      <div class="success__prePay">
        <span><b>Сумма предоплаты {{ successData.prePay }}</b></span>
      </div>
    </div>
    <div class="success__button-area">
    <menu-footer :menuItemData="footerActionData" @view="onActionClicked"></menu-footer>
  </div>
  </div>
</template>

<script>
  import TitleHeader from 'appComponents/components/headers/TitleHeader.vue'
  import ContentWrapper from 'appComponents/components/wrappers/ContentWrapper.vue'
  import Button from 'appComponents/components/buttons/Button.vue'
  import MenuFooter from 'appComponents/components/footers/MenuFooter.vue'
  export default {
    components: {
      TitleHeader,
      ContentWrapper,
      'shop-button': Button,
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
    },
    methods: {
      onActionClicked () {
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

  .success
  {
    width: 100%;
    height: 100%;
  }

  .success__detail
  {
    width: 80%;
    height: 70%;
    vertical-align: middle;
    position: absolute;
    left: 10%;
    bottom: 5.6rem;
  }

  .success__reserve
  {
    height: 24px;
    display: table;
    text-align: center;
    width: 100%;
  }

  .success__reserve > span
  {
    font-size: 18px;
    display: table-cell;
    vertical-align: top;
  }

  .success__price
  {
    height: 16px;
    display: table;
    text-align: center;
    width: 100%;
  }

  .success__price > span
  {
    font-size: 12px;
    display: table-cell;
    vertical-align: top;
  }

  .success__info
   {
     height: 80px;
     display: table;
     text-align: center;
     width: 100%;
   }

  .success__info > span
  {
    font-size: 16px;
    display: table-cell;
    vertical-align: top;
    line-height: 32px;
  }

  .success__prePay
  {
    padding-top: 25px;
    height: 20px;
    display: table;
    text-align: center;
    width: 100%;
  }

  .success__prePay > span
  {
    font-size: 14px;
    display: table-cell;
    vertical-align: top;
    line-height: 18px;
  }

  .success__button-area
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
