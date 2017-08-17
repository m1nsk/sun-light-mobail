<template>
  <div class="acceptWrapper">
    <div class="item-title label accept">Ознакомился и согласен с условиями</div>
    <div class="item-input">
      <switcher></switcher>
    </div>
  </div>
</template>

<script>
  import Switcher from '~/components/switcher'
  import { Form, FormItem } from '~/components/form'
  export default {
    components: {
      Switcher,
      'form-list': Form,
      FormItem
    },
    data () {
      return {
      }
    }
  }
</script>

<style lang="less" scoped>

  .accept
  {
    display: table-cell;
    width: 80%;
    height: 100%;
    vertical-align: middle;
  }

  .item-input
  {
    display: table-cell;
    width: 20%;
    height: 100%;
    vertical-align: middle;
    text-align: center;
  }

  .acceptWrapper
  {
    height: 60px;
    width: 100%;
    display: table;
  }
</style>
