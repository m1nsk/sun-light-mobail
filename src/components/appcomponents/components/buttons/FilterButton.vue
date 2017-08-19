<template>
  <div class="filter">
    <div class="filterTable">
      <span >{{ data.title }}</span>
      <img src="/static/myIcons/cancel.svg" class="cancelBtn" @click="onExcludeClicked">
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

  .filterTable
  {
    height: 100%;
    display: table;
  }

  .filterTable > span
  {
    line-height: 16px;
    font-size: 12px;
    display: table-cell;
    vertical-align: middle;
    float: left;
    margin-right: 2px;
  }

  .filterTable > img
  {
    height: 100%;
    width: 12px;
    display: table-cell;
    vertical-align: middle;
    float: left;
  }
</style>
