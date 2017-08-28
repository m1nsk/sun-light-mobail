<template>
  <div>
    <div class="filter">
      <div class="filter-icon">
        <img src="/static/myIcons/cancel.svg" class="icon"/>
      </div>
      <div class="filter-data">
        <div class="filter-title"><span>{{ filterData.title }}</span></div>
        <span class="filter-list-string" v-if="filterData.filters[0]">{{ filterString(filterData) }}</span>
      </div>
      <div class="filter-icon">
        <img src="/static/myIcons/right-arrow.svg" class="icon"/>
      </div>
    </div>
    <hr style="size: 2px; color: #1927f2">
  </div>
</template>

<script>

  import FilterButton from 'appComponents/components/buttons/FilterButton.vue'
  export default {
    props: ['filterData'],
    components: {
      FilterButton
    },
    methods: {
      filterString (item) {
        const size = 40
        let result = ''
        result = item.filters.reduce(function (result, item) {
          return result + item.title + ',  '
        }, '')
        if (result.length > size) {
          result = result.slice(0, size - 3) + '...'
        }
        return result
      }
    }
  }
</script>

<style lang="less" scoped>
  .filter-title
  {
    font-size: 14px;
    display: block;
  }

  .filter-list-string
  {
    font-size: 10px;
    color: #727a75;
    display: block;
  }

  .filter
  {
    vertical-align: middle;
    width: 100%;
    height: 30px;
  }

  .filter-data
  {
    display: inline-block;
    vertical-align: middle;
    width: 80%;
    height: 30px;
    padding-left: 10px;
  }

  .filter-icon
  {
    display: inline-block;
    padding-left: 5px;
    vertical-align: middle;
  }

  .icon
  {
    width: 12px;
    height: 12px;
    display: inline-block;
  }
</style>
