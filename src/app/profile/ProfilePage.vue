<template>
  <div>
    <TitleHeader title="Личный профиль"></TitleHeader>
    <page-content class="content-padding-bottom">
      <div class="content-layout">
        <person-card :personData="profile"></person-card>
        <list>
          <list-item v-for="item in menuData" :key="item.id" @click.native="onItemClicked(item)">
            <div class="item-content">
              <div class="item-title-row" style="height: 40px;">
                <div class="item-title" style="font-size: .7rem;">{{ item.title }}</div>
                <div class="item-after">
                  <div v-if="item.value.add" style="float: left; font-size: .7rem;">{{ item.value.value }}</div>
                  <img src="/static/myIcons/right-arrow.svg" style="display: inline-block; float: right; padding-left: 5px; width: 21px; height: 21px"/>
                </div>
              </div>
            </div>
          </list-item>
        </list>
      </div>
    </page-content>
  </div>
</template>

<script>
  import PersonCard from 'appComponents/components/cards/PersonCard.vue'
  import ButtonSmall from 'appComponents/components/buttons/ButtonSmall.vue'
  import TitleHeader from 'appComponents/components/headers/TitleHeader.vue'
  import { List, ListItem } from '~/components/list'
  import Content from '~/components/content'
  export default {
    components: {
      ButtonSmall,
      PersonCard,
      TitleHeader,
      List,
      ListItem,
      'page-content': Content
    },
    name: 'profile-page',
    data () {
      return {
        profile: {},
        personData: {
          name: 'Алексей',
          surname: 'Королев',
          patronymic: 'Михайлович',
          phone: '+7 692 680 28 75',
          bonuses: 2000,
          ordervalue: 6,
          favorites: 13,
          region: 'Saint-Petersburg'
        },
        menuData: [
          {
            title: 'История списаний и начислений',
            value: {
              add: false,
              value: ''
            },
            link: ''
          },
          {
            title: 'Подарок за E-mail ',
            value: {
              add: false,
              value: ''
            },
            link: ''
          },
          {
            title: 'Промокоды и подарки',
            value: {
              add: false,
              value: ''
            },
            link: ''
          },
          {
            title: 'Мои покупки и заказы',
            value: {
              add: true,
              value: '5'
            },
            link: {name: 'ordered'}
          },
          {
            title: 'Избранные товары',
            value: {
              add: true,
              value: '12'
            },
            link: {name: 'favorites'}
          },
          {
            title: 'Просмотренные товары',
            value: {
              add: false,
              value: ''
            },
            link: ''
          },
          {
            title: 'Персональная информация',
            value: {
              add: false,
              value: ''
            },
            link: {name: 'person'}
          },
          {
            title: 'Поддержка',
            value: {
              add: false,
              value: ''
            },
            link: {name: 'support'}
          },
          {
            title: 'FAQ',
            value: {
              add: false,
              value: ''
            },
            link: ''
          },
          {
            title: 'Мой регион',
            value: {
              add: true,
              value: 'Санк-Петербург'
            },
            link: ''
          }
        ]
      }
    },
    methods: {
      onItemClicked (item) {
        this.$router.push(item.link)
      }
    },
    mounted: function () {
      this.profile = this.$store.getters.getProfile
    }
  }
</script>

<style lang="less" scoped>
  .content
  {
    height: 40px;
    background-color: #0BB20C;
  }
</style>
