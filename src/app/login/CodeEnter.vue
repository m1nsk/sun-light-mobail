<template>
  <div>
    <profile-header title="Завершение регистрации"></profile-header>
    <page-content class="content-padding-bottom">
      <div class="content-layout">
        <form-card placeholder="Введите код" @input="codeChanged"></form-card>
        <m-button style="background-color: #fff0e9; color: black" @click.native="register">Завершить регистрацию</m-button>
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
        code: ''
      }
    },
    methods: {
      codeChanged (item) {
        this.code = item.input
      },
      register () {
        this.$store.dispatch('getToken', {
          code: this.code,
          router: {
            router: this.$router,
            params: {
              name: 'catalog'
            }
          }
        })
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
