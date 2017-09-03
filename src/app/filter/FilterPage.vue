<template>
  <div class="filter">
    <title-header title="Название категории"></title-header>
    <second-footer><menu-footer :menuItemData="footerActionData" @view="onActionClicked"></menu-footer></second-footer>
    <page-content class="content-padding-bottom">
      <div class="content-layout">
        <filter-card v-for="item in filterData" :key="item.id" @click.native="onFilterCliked" :filterData="item"></filter-card>
      </div>
    </page-content>
    <pop-up ref="s" class="filter-settings-dialog" :isActive="show" width="70" height="45" @close="onPopUpClosed">
      <range-filter slot="content" v-if="type === 'range'"></range-filter>
      <list-filter slot="content" v-if="type === 'list'"></list-filter>
      <div slot="footer" class="filter__popup-button-area">
        <menu-footer :menuItemData="footerActionData" @view="onActionClicked"></menu-footer>
      </div>
    </pop-up>
  </div>
</template>

<script>
  import ContentWrapper from 'appComponents/components/wrappers/ContentWrapper.vue'
  import TitleHeader from 'appComponents/components/headers/TitleHeader.vue'
  import MenuFooter from 'appComponents/components/footers/MenuFooter.vue'
  import RangeFilter from 'appComponents/components/filter/RangeFilter.vue'
  import ListFilter from 'appComponents/components/filter/ListFilter.vue'
  import PopUp from 'appComponents/components/PopUp.vue'
  import { SecondFooter } from '~/components/footer'
  import Content from '~/components/content'
  import FilterCard from 'appComponents/components/filter/FilterCard.vue'

  export default {
    components: {
      FilterCard,
      ListFilter,
      PopUp,
      RangeFilter,
      ContentWrapper,
      TitleHeader,
      MenuFooter,
      SecondFooter,
      'page-content': Content
    },
    data () {
      return {
        show: false,
        type: 'list',
        filterList: [
          {title: 'Сначала Новые'},
          {title: 'По Городу'},
          {title: 'Сначала Дешевые'}
        ],
        filterData: [
          {
            included: true,
            title: 'По дате',
            filters: [
              {title: 'Сначала Новые'},
              {title: 'По Городу'},
              {title: 'Сначала Дешевые'},
              {title: 'По Городу'},
              {title: 'Сначала Дешевые'},
              {title: 'По Городу'},
              {title: 'Сначала Дешевые'},
              {title: 'По Городу'},
              {title: 'Сначала Дешевые'},
              {title: 'По Городу'},
              {title: 'Сначала Дешевые'}
            ]
          },
          {
            included: false,
            title: 'По Города',
            filters: [
            ]
          },
          {
            included: true,
            title: 'По Цене',
            filters: [
              {title: 'Сначала Новые'},
              {title: 'По Городу'},
              {title: 'Сначала Дешевые'}
            ]
          },
          {
            included: true,
            title: 'По Названию',
            filters: [
              {title: 'Сначала Новые'},
              {title: 'По Городу'},
              {title: 'Сначала Дешевые'}
            ]
          }
        ],
        footerActionData: [
          {
            name: 'left',
            title: 'Отмена'
          },
          {
            name: 'right',
            title: 'Продолжить'
          }
        ]
      }
    },
    methods: {
      onActionClicked (data) {
        if (data['view'] === 'right') {
          // this.$router.push(this.$route.path + 'accept/')
        } else if (data['view'] === 'left') {
          console.log('cancel')
        }
      },
      onFilterCliked () {
        this.show = true
      },
      onPopUpClosed () {
        this.show = false
      }
    }
  }
</script>

<style lang="less" scoped>

  .filter-settings-dialog
  {
    width: 50%;
    height: 60%;
  }

  .filter-settings
  {
    display: table;
    width: 50%;
    height: 50%;
    margin: 0 auto;

  }

  .range-filter
  {
    vertical-align: middle;
    display: table-cell;
    height: 60%;
    width: 50%;
  }

  .filter
  {
    width: 100%;
    height: 100%;
  }

  .filter__button-area
  {
    width: 100%;
    height: 39px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 2.4rem;
  }

  .filter__popup-button-area
  {
    width: 100%;
    height: 39px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
