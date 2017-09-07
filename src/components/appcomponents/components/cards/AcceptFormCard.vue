<template>
  <div class="accept-card flex-center">
    <div class="text">Ознакомился и согласен с условиями</div>
    <div class="input">
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

  .text
  {
    width: 80%;
    height: 100%;
  }

  .input
  {
    width: 20%;
    height: 100%;
  }

  .accept-card
  {
    height: 60px;
    width: 100%;
  }
</style>
