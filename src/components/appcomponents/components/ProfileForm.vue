<template>
  <div>
        <form-card placeholder="Как вас можно называть?" v-model="profile.fio"></form-card>

        <form-card placeholder="email" v-validate.initial="'email'" data-vv-value-path="innerValue" data-vv-name="mail" :has-error="errors.has('mail')" v-model="profile.mail"></form-card>
        <span class="alert-input" v-show="errors.has('mail')">{{ errors.first('mail') }}</span>

        <form-card placeholder="Телефон" @input="onPhoneInput" v-validate.initial="'phoneRequire|phone'" data-vv-value-path="valueInner" data-vv-name="phone" :has-error="errors.has('phone')" v-model="profile.phone"></form-card>
        <span class="alert-input" v-show="errors.has('phone')">{{ errors.first('phone') }}</span>

  </div>
</template>

<script>
  import { clone } from '~/helpers/cloneObject'
  import FormCard from 'appComponents/components/cards/FormCard.vue'
  import { Button } from '~/components/buttons'

  export default {
    components: {
      FormCard,
      'm-button': Button,
    },
    name: 'login-page',
    data () {
      return {
        profile: {
          fio: '',
          phone: '+7',
          mail: ''
        },
      }
    },
    created: function () {
      let profile = clone(this.$store.getters.getProfile) || {};
      for (let key of Object.keys(this.profile)) {
        this.profile[key] = profile[key]
      }
      this.validate()
    },
    methods: {
      validate() {
        return this.$validator.validateAll().then((result) => {
          console.log(result)
          return result
        });
      },
      onPhoneInput () {
        if (this.profile.phone.slice(0,2) != '+7') {
          this.profile.phone = '+7' + this.profile.phone.slice(1)
        }
        this.validate()
      },
      submit (callBack) {
        let payload = {}
        payload.profile = this.profile
        console.log(this.validate(), 'validate')
          if (this.validate()) {
          callBack(payload)
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
