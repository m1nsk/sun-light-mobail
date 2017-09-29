<template>
  <div>
    <profile-header title="Информация" @confirm="onConfirmClicked"></profile-header>
    <page-content class="content-padding-bottom">
      <div class="content-layout">
        <profile-form ref="profile"></profile-form>
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
  import ProfileForm from 'appComponents/components/ProfileForm.vue'
  import DatePicker from 'appComponents/components/DatePicker.vue'
  import { Button, ButtonGroup } from '~/components/buttons'
  import Content from '~/components/content'

  export default {
    components: {
      ProfileHeader,
      DatePicker,
      'm-button': Button,
      ButtonGroup,
      'page-content': Content,
      ProfileForm
    },
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
        this.$refs.profile.submit((payload) => {
          payload.profile.sex = this.sex
          payload.profile.birthDate = this.birthDate
          this.$store.commit('setProfile', payload)
          this.$store.commit('setCallbackUrl', {
            name: "person"
          })
        })
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
