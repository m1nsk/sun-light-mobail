<template>
  <div>
    <profile-header title="Информация"></profile-header>
    <page-content class="content-padding-bottom">
      <div class="content-layout">
        <form-card placeholder="Фамилия"></form-card>
        <form-card placeholder="Отчество"></form-card>
        <form-card placeholder="E-mail"></form-card>
        <div class="birth-date">
          <span>Дата рождения</span>
        </div>
        <date-picker style="padding: 10px"></date-picker>
        <button-group :round="true">
          <m-button :active="profileData.sex === 'female'" @click.native="onSexClicked('female')">Женский</m-button>
          <m-button :active="profileData.sex === 'male'" @click.native="onSexClicked('male')">Мужской</m-button>
        </button-group>
      </div>
    </page-content>
  </div>
</template>

<script>
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
    data () {
      return {
        profileData: {
          sex: 'male'
        }
      }
    },
    methods: {
      onSexClicked (sex) {
        this.profileData.sex = sex
      }
    }
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
