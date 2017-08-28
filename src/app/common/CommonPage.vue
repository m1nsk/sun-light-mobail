<template>
  <div>
    <TitleHeader title="Личный профиль"></TitleHeader>
    <page-content class="content-padding-bottom">
      <div class="content-layout">
        <person-card :personData="personData"></person-card>
        <list>
          <list-item v-for="item in menuData" :key="item.id">
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
  import ContentWrapper from 'appComponents/components/wrappers/ContentWrapper.vue'
  import PersonCard from 'appComponents/components/cards/PersonCard.vue'
  import TitleHeader from 'appComponents/components/headers/TitleHeader.vue'
  import { List, ListItem } from '~/components/list'
  import Content from '~/components/content'

  export default {
    components: {
      ContentWrapper,
      PersonCard,
      TitleHeader,
      List,
      ListItem,
      'page-content': Content
    },
    data () {
      return {
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
            link: ''
          },
          {
            title: 'Избранные товары',
            value: {
              add: true,
              value: '12'
            },
            link: ''
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
            link: ''
          },
          {
            title: 'Поддержка',
            value: {
              add: false,
              value: ''
            },
            link: ''
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
