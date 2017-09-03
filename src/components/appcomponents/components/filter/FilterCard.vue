<template>
  <custom-card>
    <div slot="img" src="/static/myIcons/cancel.svg" class="icon-left-wrapper">
      <img src="/static/myIcons/cancel.svg" class="icon-left">
    </div>
    <div slot="info" class="filter-data">
      <div class="filter-title"><span>{{ filterData.title }}</span></div>
      <span class="filter-list-string" v-if="filterData.filters[0]">{{ filterString(filterData) }}</span>
    </div>
    <div slot="icons"><img src="/static/myIcons/right-arrow.svg" class="icon-right"/>
    </div>
  </custom-card>
</template>

<script>

  import CustomCard from 'appComponents/components/cards/CustomCard.vue'
  export default {
    props: ['filterData'],
    components: {
      CustomCard
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

  .filter-data
  {
    display: flex;
    flex-direction: column;
    width: 150px;
    overflow: hidden;
    padding-left: 10px;
  }

  .icon-left-wrapper
  {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon-left
  {
    width: 12px;
    height: 12px;
  }

  .icon-right
  {
    width: 12px;
    height: 12px;
    position: absolute;
    top: 50% - 6px;
  }
</style>
