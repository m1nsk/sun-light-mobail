<template>
  <div>
    <profile-header title="Информация" @confirm="onConfirmClicked"></profile-header>
    <page-content class="content-padding-bottom">
      <div class="content-layout">
        <form-card placeholder="Имя" v-model="profile.fio"></form-card>

        <form-card placeholder="email" v-validate.initial="'email'" data-vv-value-path="innerValue" name="mail" :has-error="errors.has('mail')" v-model="profile.mail"></form-card>
        <span class="alert-input" v-show="errors.has('mail')">{{ errors.first('mail') }}</span>

        <form-card placeholder="Телефон" @input="onPhoneInput" v-validate="'phoneRequire|phone'" data-vv-value-path="innerValue" data-vv-name="phone" :has-error="errors.has('phone')" v-model="profile.phone"></form-card>
        <span class="alert-input" v-show="errors.has('phone')">{{ errors.first('phone') }}</span>

        <div class="birth-date">
          <span>Дата рождения</span>
        </div>
        <date-picker @dateTime="onDateChange"></date-picker>
        <button-group :round="true">
          <m-button :active="sex === 'female'" @click.native="onSexClicked('female')">Женский</m-button>
          <m-button :active="sex === 'male'" @click.native="onSexClicked('male')">Мужской</m-button>
        </button-group>
      </div>
    </page-content>
  </div>
</template>

<script>
  import { clone } from '~/helpers/cloneObject'
  import ProfileHeader from 'appComponents/components/headers/ProfileHeader.vue'
  import FormCard from 'appComponents/components/cards/FormCard.vue'
  import DatePicker from 'appComponents/components/DatePicker.vue'
  import { Button, ButtonGroup } from '~/components/buttons'
  import Content from '~/components/content'

  export default {
    components: {
      FormCard,
      ProfileHeader,
      DatePicker,
      'm-button': Button,
      ButtonGroup,
      'page-content': Content
    },
    name: 'profile-info-page',
    data () {
      return {
        profile: {
          fio: '',
          phone: '+7',
          mail: ''
        },
        sex: 'male',
        birthDate: ''
      }
    },
    methods: {
      validate() {
        return this.$validator.validateAll().then((result) => {
          return result
        });
      },
      onPhoneInput () {
        if (this.profile.phone.slice(0,2) != '+7') {
          this.$nextTick(() => {
              this.profile.phone = '+7' + this.profile.phone.slice(2)
            }
          )
        }
      },
      onDateChange (birthDate) {
        this.birthDate = birthDate
      },
      onSexClicked (sex) {
        this.sex = sex
      },
      onConfirmClicked (data) {
        if (this.validate()) {
          console.log('valid')
          let payload = {}
          payload.profile = this.profile
          payload.profile.sex = this.sex
          payload.profile.birthDate = this.birthDate
          this.$store.commit('setProfile', payload)
          this.$store.commit('setCallbackUrl', {
            name: "person"
          })
        }
      }
    },
    mounted: function () {
      let profile = clone(this.$store.getters.getProfile) || {};
      for (let key of Object.keys(this.profile)) {
        this.profile[key] = profile[key]
      }
    },
  }
</script>

<style lang="less" scoped>
  .birth-date
  {
    height: 12px;
    display: table;
  }

  .birth-date > span
  {
    font-size: 12px;
    display: table-cell;
    vertical-align: top;
  }
</style>
