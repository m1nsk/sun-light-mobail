<template>
  <div>
    <profile-header title="Регистрация"></profile-header>
    <page-content class="content-padding-bottom">
      <div class="content-layout">
        <form-card placeholder="Как к вам обращаться?" v-model="fio"></form-card>
        <div class="form">
          <p><input v-validate="{ email: true }" placeholder="Почта" v-model="mail" name="mail"/></p>
          <transition name="fade">
            <span v-show="errors.has('mail')">{{ errors.first('mail') }}</span>
          </transition>

          <p><input v-validate="{ rules: { required: true, regex: /\+7[0-9]{10}/} }" placeholder="Телефон" v-model="phone" @input="onPhoneInput" name="phone"/></p>
          <transition name="fade">
            <span v-show="errors.has('phone')">{{ errors.first('phone') }}</span>
          </transition>
        </div>
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
        mail: '',
        phone: '+7'
      }
    },
    methods: {
      onPhoneInput () {
        if (this.phone.slice(0,2) != '+7') {
          this.phone = '+7' + this.phone.slice(2)
        }
      },
      register () {
        let payload = {}
        payload.profile = {
          fio: this.fio,
          phone: '8' + this.phone.slice(2)
        }
        this.$store.dispatch('getSecretCode', payload)
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
