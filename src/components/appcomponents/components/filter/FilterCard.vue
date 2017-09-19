<template>
  <custom-card class="card">
    <div slot="img" class="flex-center">
      <switcher @click.native.stop :value="checked" @input="onChange"></switcher>
    </div>
    <div slot="info" class="data">
      <div class="title"><span>{{ filterData.title }}</span></div>
      <div>
        <span class="list-string" v-if="filterData.filters[0]">{{ this.filterString(filterData) }}</span>
      </div>
    </div>
    <div slot="icons">
      <img src="/myIcons/right-arrow.svg" class="icon-right"/>
    </div>
  </custom-card>
</template>

<script>
  import CustomCard from 'appComponents/components/cards/CustomCard.vue'
  import Switcher from '~/components/switcher'
  export default {
    props: ['filterData'],
    components: {
      CustomCard,
      Switcher
    },
    data () {
      return {
        checked: this.filterData.included
      }
    },
    methods: {
      onChange (input) {
        this.filterData.included = input
        this.$emit('filterData', this.filterData)
      },
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
  .card
  {
    height: 45px;
  }

  .title
  {
    font-size: 14px;
    display: block;
  }

  .list-string
  {
    font-size: 10px;
    color: #727a75;
    display: block;
  }

  .data
  {
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    white-space: nowrap;
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
    top: 25%;
  }
</style>
