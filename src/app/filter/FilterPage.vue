<template>
  <div class="filter">
    <content-wrapper>
      <TitleHeader title="Название категории" slot="header-menu"></TitleHeader>
      <filter-card v-for="item in filterData" :key="item.id" @click.native="onFilterCliked" :filterData="item"></filter-card>
      <!--
      <list>
        <list-item v-for="item in filterData" :key="item.id" @click.native="onFilterCliked">
          <div class="item-content">
            <div class="item-title-row">
              <div class="item-title">
                <div class="catalog__filter">
                  <p>{{ item.title }}</p>
                  <filter-button v-for="filter in item.filters" :key="filter.id" :data="filter"></filter-button>
                </div>
              </div>
              <div class="item-after">
                <div style="display: inline-block; float: right; padding-left: 5px">
                  <img src="/static/myIcons/right-arrow.svg" width="16px"/>
                </div>
              </div>
            </div>
          </div>
        </list-item>
      </list>
      -->
    </content-wrapper>
    <div class="filter__button-area">
      <menu-footer :menuItemData="footerActionData" @view="onActionClicked"></menu-footer>
    </div>
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
  import { List, ListItem } from '~/components/list'
  import MenuFooter from 'appComponents/components/footers/MenuFooter.vue'
  import RangeFilter from 'appComponents/components/filter/RangeFilter.vue'
  import ListFilter from 'appComponents/components/filter/ListFilter.vue'
  import PopUp from 'appComponents/components/PopUp.vue'
  import PopWindow from '~/components/popwindow'
  import FilterCard from 'appComponents/components/filter/FilterCard.vue'

  export default {
    components: {
      FilterCard,
      ListFilter,
      PopUp,
      PopWindow,
      RangeFilter,
      ContentWrapper,
      TitleHeader,
      List,
      ListItem,
      MenuFooter
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
