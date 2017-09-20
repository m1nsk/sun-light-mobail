<template>
  <div>
    <profile-header title="Регистрация"></profile-header>
    <page-content class="content-padding-bottom">
      <div class="content-layout">
        <form-card placeholder="Как к вам обращаться?" v-model="fio"></form-card>
        <form-card placeholder="Телефон" v-model="phone"></form-card>
        <m-button style="background-color: #fff0e9; color: black" @click.native="register">Зарегистрироваться</m-button>
      </div>
    </page-content>
  </div>
</template>

<script>
  import ProfileHeader from 'appComponents/components/headers/ProfileHeader.vue'
  import FormCard from 'appComponents/components/cards/FormCard.vue'
  import { Button, ButtonGroup } from '~/components/buttons'
  import Content from '~/components/content'

  export default {
    components: {
      FormCard,
      ProfileHeader,
      'm-button': Button,
      ButtonGroup,
      'page-content': Content
    },
    data () {
      return {
        fio: '',
        phone: ''
      }
    },
    methods: {
      register () {
        let payload = {}
        payload.profile = {
          fio: this.fio,
          phone: this.phone
        }
        this.$store.dispatch('getSecretCode', payload)
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
