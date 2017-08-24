<template>
  <content-wrapper>
    <TitleHeader title="Личный профиль" slot="header-menu"></TitleHeader>
    <person-card :personData="personData"></person-card>
    <list>
      <list-item v-for="item in menuData" :key="item.id">
        <div class="item-content">
          <div class="item-title-row">
            <div class="item-title" style="height: 40px; line-height: 40px">{{ item.title }}</div>
            <div class="item-after">
              <div v-if="item.value.add" style="display: inline-block; float: left">{{ item.value.value }}</div>
              <div style="display: inline-block; float: right; padding-left: 5px">
                <img src="/static/myIcons/right-arrow.svg" width="16px"/>
              </div>
            </div>
          </div>
        </div>
      </list-item>
    </list>
  </content-wrapper>
</template>

<script>
  import ContentWrapper from 'appComponents/components/wrappers/ContentWrapper.vue'
  import PersonCard from 'appComponents/components/cards/PersonCard.vue'
  import TitleHeader from 'appComponents/components/headers/TitleHeader.vue'
  import { List, ListItem } from '~/components/list'

  export default {
    components: {
      ContentWrapper,
      PersonCard,
      TitleHeader,
      List,
      ListItem
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
