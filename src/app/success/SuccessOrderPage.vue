<template>
  <div>
    <title-header title="Успех"></title-header>
    <second-footer>
      <menu-footer :menuItemData="footerActionData" @view="onActionClicked"></menu-footer>
    </second-footer>
    <page-content class="content-padding-bottom">
      <div class="content-layout">
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
    </page-content>
  </div>
</template>

<script>
  import TitleHeader from 'appComponents/components/headers/TitleHeader.vue'
  import Button from 'appComponents/components/buttons/Button.vue'
  import MenuFooter from 'appComponents/components/footers/MenuFooter.vue'
  import Content from '~/components/content'
  import { SecondFooter } from '~/components/footer'
  export default {
    components: {
      TitleHeader,
      'shop-button': Button,
      MenuFooter,
      SecondFooter,
      'page-content': Content
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
  .success
  {
    width: 80%;
    height: 100%;
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
</style>
