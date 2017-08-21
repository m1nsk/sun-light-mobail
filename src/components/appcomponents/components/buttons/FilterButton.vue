<template>
  <div class="filter">
    <div class="filter__wrapper">
      <span class="filter__title">{{ data.title }}</span>
      <img src="/static/myIcons/cancel.svg" class="filter_icon-cancel" @click="onExcludeClicked">
    </div>
  </div>
</template>

<script>
  export default {
    props: ['data'],
    methods: {
      onExcludeClicked () {
        this.$emit('exclude')
      }
    }
  }
</script>

<style lang="less" scoped>

  .filter
  {
    height: 16px;
    display: inline-block;
    float: left;
    background-color: antiquewhite;
    margin-right: 4px;
  }

  .filter__wrapper
  {
    height: 100%;
    display: table;
  }

  .filter__title
  {
    line-height: 16px;
    font-size: 12px;
    display: table-cell;
    vertical-align: middle;
    float: left;
    margin-right: 2px;
  }

  .filter_icon-cancel
  {
    height: 100%;
    width: 12px;
    display: table-cell;
    vertical-align: middle;
    float: left;
  }
</style>
