<template>
  <div class="profile">
    <profile-header title="Информация"></profile-header>
    <div class="profile__wrapper-outer">
      <div class="profile__wrapper-inner">
        <form-component placeholder="Фамилия"></form-component>
        <form-component placeholder="Отчество"></form-component>
        <form-component placeholder="E-mail"></form-component>
        <div class="profile__label-birth-date">
          <span>Дата рождения</span>
        </div>
        <date-picker></date-picker>
        <button-group :round="true">
          <m-button :active="profileData.sex === 'female'" @click.native="onSexClicked('female')">Женский</m-button>
          <m-button :active="profileData.sex === 'male'" @click.native="onSexClicked('male')">Мужской</m-button>
        </button-group>
      </div>
    </div>
  </div>
</template>

<script>
  import ProfileHeader from 'appComponents/components/headers/ProfileHeader.vue'
  import FormComponent from 'appComponents/components/cards/FormCard.vue'
  import DatePicker from 'appComponents/components/DatePicker.vue'
  import { Button, ButtonGroup } from '~/components/buttons'
  export default {
    components: {
      FormComponent,
      ProfileHeader,
      DatePicker,
      'm-button': Button,
      ButtonGroup
    },
    data () {
      return {
        profileData: {
          sex: 'male'
        }
      }
    },
    methods: {
      onSexClicked (sex) {
        console.log(sex)
        this.profileData.sex = sex
      }
    }
  }
</script>

<style lang="less" scoped>
  .profile__label-birth-date
  {
    height: 12px;
    display: table;
  }

  .profile__label-birth-date > span
  {
    font-size: 12px;
    display: table-cell;
    vertical-align: top;
  }

  .profile__wrapper-outer
  {
    width: 100%;
    height: 70%;
    vertical-align: middle;
    position: absolute;
    left: 0;
    bottom: 5.6rem;
  }

  .profile__wrapper-inner
  {
    height: 100%;
    width: 80%;
    max-width: 500px;
    margin: 0 auto;
  }

  .profile
  {
    width: 100%;
    height: 100%;
    position: relative;
  }
</style>
