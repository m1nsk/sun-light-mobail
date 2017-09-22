<template>
  <div>
    <profile-header title="Информация" @confirm="onConfirmClicked"></profile-header>
    <page-content class="content-padding-bottom">
      <div class="content-layout">
        <form-card placeholder="Имя" v-model="profile.fio"></form-card>
        <form-card placeholder="Телефон" v-model="profile.phone"></form-card>
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
        sex: 'male',
        profile: {},
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
        let payload = {}
        payload.profile = this.profile
        payload.profile.sex = this.sex
        payload.profile.birthDate = this.birthDate
        this.$store.commit('setProfile', payload)
        this.$store.commit('setCallbackUrl', {
          name: "person"
        })
      }
    },
    mounted: function () {
      console.log('mounted')
      this.profile = clone(this.$store.getters.getProfile) || {}
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
