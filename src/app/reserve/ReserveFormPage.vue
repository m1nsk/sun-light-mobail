<template>
  <div>
    <title-header title="Оформление резерва"></title-header>
    <second-footer>
      <action-footer @action="onActionClicked"></action-footer>
    </second-footer>
    <page-content>
      <div class="content-layout content-relative">
        <shop-form-card :cardData="cardData"></shop-form-card>
        <div>
          <form-card placeholder="Имя" v-model="profile.fio"></form-card>

          <form-card placeholder="email" v-validate.initial="'email'" data-vv-value-path="innerValue" name="mail" :has-error="errors.has('mail')" v-model="profile.mail"></form-card>
          <span class="alert-input" v-show="errors.has('mail')">{{ errors.first('mail') }}</span>

          <form-card placeholder="Телефон" @input="onPhoneInput" v-validate.initial="'phoneRequire|phone'" data-vv-value-path="valueInner" data-vv-name="phone" :has-error="errors.has('phone')" v-model="profile.phone"></form-card>
          <span class="alert-input" v-show="errors.has('phone')">{{ errors.first('phone') }}</span>

        </div>
        <accept-form-card class="reserve-form__accept"></accept-form-card>
      </div>
    </page-content>
  </div>
</template>

<script>
  import { clone } from '~/helpers/cloneObject'
  import loginMixin from '~/mixins/loginMixin.vue'
  import { getProduct, getMarket } from 'api/index'
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
    mixins: [loginMixin],
    name: 'reserve-form-page',
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
        cardData: {}
      }
    },
    activated: function () {
      console.log('activated')
      let cardDataTemp = {}
      let that = this
      let promiseProduct = getProduct(this.$store.getters.productCode.id)
      promiseProduct.then((response) => {
        console.log(response.data.data, 'product')
        cardDataTemp.label = response.data.data.label
        cardDataTemp.cost = response.data.data.cost
        let promiseMarket = getMarket(this.$route.params.id)
        promiseMarket.then((response) => {
          cardDataTemp.shop = response.data.data.label
          cardDataTemp.status = 'В НАЛИЧИИ можно забрать сегодня'
          that.cardData = cardDataTemp
        })
      })
    },
    methods: {
      onActionClicked (data) {
        if ((data.action === 'accept') && (this.validate())){
          let payload = {}
          payload.profile = this.profile
          this.$store.commit('setCallbackUrl', {
            name: "accept",
            params: {
              id: payload.product_id
            }
          })
          payload.shop_id = this.$route.params.id
          payload.product_id = this.$store.getters.productCode.id
          this.$store.dispatch('getOrderStatus', payload)
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
