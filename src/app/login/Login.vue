<template>
  <div>
    <profile-header title="Регистрация"></profile-header>
    <page-content class="content-padding-bottom">
      <div class="content-layout">
        <form-card placeholder="Как вас можно называть?" v-model="profile.fio"></form-card>

        <form-card placeholder="email" v-validate.initial="'email'" data-vv-value-path="innerValue" data-vv-name="mail" :has-error="errors.has('mail')" v-model="profile.mail"></form-card>
        <span class="alert-input" v-show="errors.has('mail')">{{ errors.first('mail') }}</span>

        <form-card placeholder="Телефон" @input="onPhoneInput" v-validate.initial="'phoneRequire|phone'" data-vv-value-path="valueInner" data-vv-name="phone" :has-error="errors.has('phone')" v-model="profile.phone"></form-card>
        <span class="alert-input" v-show="errors.has('phone')">{{ errors.first('phone') }}</span>

        <m-button style="background-color: #fff0e9; color: black" @click.native="register">Зарегистрироваться</m-button>
      </div>
    </page-content>
  </div>
</template>

<script>
  import { clone } from '~/helpers/cloneObject'
  import loginMixin from '~/mixins/loginMixin.vue'
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
    mixins: [loginMixin],
    name: 'login-page',
    methods: {
      register () {
        this.validate()
        if (this.validate()) {
          let payload = {}
          payload.profile = this.profile
          this.$store.dispatch('getSecretCode', payload)
        }
        else {
          console.log('errors detected')
        }
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
