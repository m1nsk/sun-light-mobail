<template>
  <div>
    <profile-header title="Информация" @confirm="onConfirmClicked"></profile-header>
    <page-content class="content-padding-bottom">
      <div class="content-layout">
        <form-card placeholder="Имя" v-model="profile.fio"></form-card>

        <form-card placeholder="email" v-validate.initial="'email'" data-vv-value-path="innerValue" name="mail" :has-error="errors.has('mail')" v-model="profile.mail"></form-card>
        <span class="alert-input" v-show="errors.has('mail')">{{ errors.first('mail') }}</span>

        <form-card placeholder="Телефон" @input="onPhoneInput" v-validate.initial="'phoneRequire|phone'" data-vv-value-path="innerValue" data-vv-name="phone" :has-error="errors.has('phone')" v-model="profile.phone"></form-card>
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
  import loginMixin from '~/mixins/loginMixin.vue'
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
    mixins: [loginMixin],
    name: 'profile-info-page',
    data () {
      return {
        sex: 'male',
        birthDate: ''
      }
    },
    methods: {
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
