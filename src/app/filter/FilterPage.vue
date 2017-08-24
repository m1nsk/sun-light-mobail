<template>
  <div class="filter">
    <content-wrapper>
      <TitleHeader title="Название категории" slot="header-menu"></TitleHeader>
      <list>
        <list-item v-for="item in filterData" :key="item.id">
          <div class="item-content">
            <div class="item-title-row">
              <div class="item-title">{{ item.title }}</div>
              <div class="item-after">
                <div style="display: inline-block; float: right; padding-left: 5px">
                  <img src="/static/myIcons/right-arrow.svg" width="16px"/>
                </div>
              </div>
            </div>
          </div>
        </list-item>
      </list>
    </content-wrapper>
    <div class="filter__button-area">
      <menu-footer :menuItemData="footerActionData" @view="onActionClicked"></menu-footer>
    </div>
  </div>
</template>

<script>
  import ContentWrapper from 'appComponents/components/wrappers/ContentWrapper.vue'
  import TitleHeader from 'appComponents/components/headers/TitleHeader.vue'
  import { List, ListItem } from '~/components/list'
  import MenuFooter from 'appComponents/components/footers/MenuFooter.vue'

  export default {
    components: {
      ContentWrapper,
      TitleHeader,
      List,
      ListItem,
      MenuFooter
    },
    data () {
      return {
        filterData: [
          {
            included: true,
            title: 'По дате'
          },
          {
            included: false,
            title: 'По Города'
          },
          {
            included: true,
            title: 'По Цене'
          },
          {
            included: true,
            title: 'По Названию'
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
      }
    }
  }
</script>

<style lang="less" scoped>
  .filter
  {
    width: 100%;
    height: 100%;
  }

  .filter__button-area
  {
    width: 100%;
    height: 39px;
    margin-top: 5px;
    margin-bottom: 5px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 2.8rem;
  }
</style>
