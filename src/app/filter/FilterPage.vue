<template>
  <div class="filter" v-if="activeFlag">
    <title-header title="Название категории"></title-header>
    <second-footer><menu-footer :menuItemData="footerActionData" @view="onActionClicked"></menu-footer></second-footer>
    <page-content class="content-padding-bottom">
      <div class="content-layout">
        <filter-card v-for="item in filterList" :key="item.id" @filterData="onChecked(item)" @click.native="onFilterClicked(item)" :filterData="item"></filter-card>
      </div>
    </page-content>
    <pop-up ref="s" class="filter-popup" :isActive="show" width="70" height="45" @close="onPopUpClosed">
      <range-filter slot="content" :from="from" :to="to" v-if="type === 'range'" @min="onMinChanged" @max="onMaxChanged"></range-filter>
      <list-filter slot="content" v-if="type === 'list'"></list-filter>
      <div slot="footer" class="filter-popup-footer">
        <menu-footer :menuItemData="footerActionData" @view="onActionClicked"></menu-footer>
      </div>
    </pop-up>
  </div>
</template>

<script>
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
      TitleHeader,
      MenuFooter,
      SecondFooter,
      'page-content': Content
    },
    data () {
      return {
        show: false,
        type: 'list',
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
        from: '',
        to: '',
        filter: {},
        activeFlag: false
      }
    },
    computed: {
      filterList () {
        return this.$store.getters.getFilterList
      }
    },
    activated: function () {
      console.log('activated')
      this.activeFlag = true
    },
    deactivated: function () {
      console.log('deactivated')
      this.activeFlag = false
    },
    mounted: function ()
    {
      console.log('filter-mounted')
    },
    methods: {
      onChecked (filter) {
        this.filterList[filter.name].included = filter.included
        console.log(filter, this.filterList[filter.name])
      },
      onMinChanged (val) {
        this.filter.from = val
      },
      onMaxChanged (val) {
        console.log(val)
        this.filter.to = val
      },
      onActionClicked (data) {
        if (data['view'] === 'right') {
          this.$store.commit('setFilters', this.filterList)
          this.$store.commit('setProductListReloadFlag', false)
          this.$router.back()
        } else if (data['view'] === 'left') {
          this.$router.back()
        }
      },
      onFilterClicked (item) {
        this.type = item.type
        this.filter = item
        if (this.type === 'range') {
          this.to = item.to
          this.from = item.from
          this.show = true
        }
      },
      onPopUpClosed () {
        this.show = false
      }
    }
  }
</script>

<style lang="less" scoped>

  .filter-popup
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

  .filter
  {
    width: 100%;
    height: 100%;
  }

  .filter-popup-footer
  {
    width: 100%;
    height: 39px;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
