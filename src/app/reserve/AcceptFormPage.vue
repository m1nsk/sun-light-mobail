<template>
  <div>
    <title-header title="Подтверждение"></title-header>
    <second-footer>
      <action-footer @action="onActionClicked"></action-footer>
    </second-footer>
    <page-content class="content-padding-bottom">
      <div class="content-layout">
        <shop-form-card></shop-form-card>
        <form-card placeholder="Введите код" v-model="code"></form-card>
      </div>
    </page-content>
  </div>
</template>

<script>
  import TitleHeader from 'appComponents/components/headers/TitleHeader.vue'
  import ShopFormCard from 'appComponents/components/cards/ShopFormCard.vue'
  import FormCard from 'appComponents/components/cards/FormCard.vue'
  import ActionFooter from 'appComponents/components/footers/ActionFooter.vue'
  import { SecondFooter } from '~/components/footer'
  import Content from '~/components/content'
  export default {
    components: {
      TitleHeader,
      ShopFormCard,
      FormCard,
      ActionFooter,
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
        code: ''
      }
    },
    mounted: function () {
      this.profile =  this.$store.getters.getProfile
    },
    methods: {
      codeChanged (item) {
        this.code = item.input
      },
      onActionClicked (data) {
        if (data.action === 'accept') {
          this.$store.dispatch('getToken', {
            code: this.code
          })
        } else if (data.action === 'cancel') {
          this.$router.push(-1)
        }
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
