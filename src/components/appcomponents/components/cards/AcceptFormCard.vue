<template>
  <div class="accept-card">
    <div class="accept-card__text">Ознакомился и согласен с условиями</div>
    <div class="accept-card__input">
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

  .accept-card__text
  {
    display: table-cell;
    width: 80%;
    height: 100%;
    vertical-align: middle;
  }

  .accept-card__input
  {
    display: table-cell;
    width: 20%;
    height: 100%;
    vertical-align: middle;
    text-align: center;
  }

  .accept-card
  {
    height: 60px;
    width: 100%;
    display: table;
  }
</style>
