<template>
  <div>
    <title-header title="Оформление резерва"></title-header>
    <second-footer>
      <action-footer @action="onActionClicked"></action-footer>
    </second-footer>
    <page-content>
      <div class="content-layout content-relative">
        <shop-form-card></shop-form-card>
        <div v-if="">
          <form-card placeholder="Имя" :inputValue="profile.fio" @input="fioChanged"></form-card>
          <form-card placeholder="Почта" :inputValue="profile.mail" @input="mailChanged"></form-card>
          <form-card placeholder="Телефон" :inputValue="profile.phone" @input="phoneChanged"></form-card>
        </div>
        <accept-form-card class="reserve-form__accept"></accept-form-card>
      </div>
    </page-content>
  </div>
</template>

<script>
  import TitleHeader from 'appComponents/components/headers/TitleHeader.vue'
  import FormCard from 'appComponents/components/cards/FormCard.vue'
  import AcceptFormCard from 'appComponents/components/cards/AcceptFormCard.vue'
  import ShopFormCard from 'appComponents/components/cards/ShopFormCard.vue'
  import ActionFooter from 'appComponents/components/footers/ActionFooter.vue'
  import ButtonSmall from 'appComponents/components/buttons/ButtonSmall.vue'
  import { SecondFooter } from '~/components/footer'
  import Content from '~/components/content'
  export default {
    components: {
      ButtonSmall,
      TitleHeader,
      AcceptFormCard,
      FormCard,
      ActionFooter,
      ShopFormCard,
      SecondFooter,
      'page-content': Content
    },
    data () {
      return {
        footerActionData: [
          {
            name: 'left',
            title: 'Отмена'
          },
          {
            name: 'right',
            title: 'Продолжить'
          }
        ],
        profile: {}
      }
    },
    mounted: function () {
      let profileCash = this.$store.getters.getProfile
      this.profile = {
        fio: profileCash.fio,
        mail: profileCash.mail,
        phone: profileCash.phone
      }
    },
    methods: {
      fioChanged (item) {
        this.profile.fio = item.input
      },
      mailChanged (item) {
        this.profile.mail = item.input
      },
      phoneChanged (item) {
        this.profile.phone = item.input
      },
      onActionClicked (data) {
        if (data.action === 'accept') {
          if (this.profile.phone !== this.$store.getters.getProfile.phone) {
            let payload = this.profile
            payload.router = {
              router: this.$router,
              params: {
                name: 'accept',
                params: {
                  id: this.$route.params.id
                }
              }
            }
            this.$store.dispatch('getSecretCode', payload)
          } else {
            let payload = {}
            payload.router = {
              router: this.$router,
              params: {
                name: 'success',
                params: {
                  id: this.$route.params.id
                }
              }
            }
            this.$store.commit('setProfile', this.profile)
            console.log(payload, 'pload')
            this.$store.dispatch('getOrderStatus', payload)
          }
        } else if (data.action === 'cancel') {
          this.$router.go(-1)
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .reserve-form__accept
  {
    width: 100%;
    height: 40px;
  }
</style>
