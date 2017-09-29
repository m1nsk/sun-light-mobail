<template>
  <div>
    <profile-header title="Регистрация"></profile-header>
    <page-content class="content-padding-bottom">
      <div class="content-layout">
        <profile-form ref="profile"></profile-form>
        <m-button style="background-color: #fff0e9; color: black" @click.native="register">Зарегистрироваться</m-button>
      </div>
    </page-content>
  </div>
</template>

<script>
  import { clone } from '~/helpers/cloneObject'
  import loginMixin from '~/mixins/loginMixin.vue'
  import ProfileHeader from 'appComponents/components/headers/ProfileHeader.vue'
  import ProfileForm from 'appComponents/components/ProfileForm.vue'
  import { Button, ButtonGroup } from '~/components/buttons'
  import Content from '~/components/content'

  export default {
    components: {
      ProfileHeader,
      'm-button': Button,
      ButtonGroup,
      'page-content': Content,
      ProfileForm
    },
    mixins: [loginMixin],
    name: 'login-page',
    methods: {
      register () {
        this.$refs.profile.submit((payload) => {
          this.$store.dispatch('getSecretCode', payload)
        })
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
