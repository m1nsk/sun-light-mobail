<template>
  <div>
    <title-header title="Название акции"></title-header>
    <page-content class="content-padding-bottom">
      <div class="content-layout">
        <div class="sale-title flex-center">
          <span>{{ sale.title }}</span>
        </div>
        <div class="info-title flex-center">
          <span>{{ sale.info }}</span>
        </div>
        <hr class="max-width hr" color="gray" size="1px"/>
        <div class="sale-wrapper">
          <div class="sale-value flex-center">
            <span>{{ sale.value }}%</span>
          </div>
          <button-small caption="Заказать" fontSize="16" class="sale-order-btn flex-center"></button-small>
        </div>
      </div>
    </page-content>
  </div>
</template>

<script>
  import TitleHeader from 'appComponents/components/headers/TitleHeader.vue'
  import ButtonSmall from 'appComponents/components/buttons/ButtonSmall.vue'
  import Content from '~/components/content'

  export default {
    components: {
      TitleHeader,
      ButtonSmall,
      'page-content': Content
    },
    data () {
      return {
        sale: {
          title: 'МТС',
          info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          value: '70'
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .sale-title
  {
    width: 100%;
    height: 60px;
    font-weight: bold;
    font-size: 32px;
  }

  .info-title
  {
    width: 100%;
    font-size: 14px;
  }

  .sale-wrapper
  {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-around;
  }

  .sale-value
  {
    height: 100%;
    width: 50%;
    font-size: 32px;
  }

  .sale-order-btn
  {
    height: 100%;
    width: 50%;
  }

</style>
