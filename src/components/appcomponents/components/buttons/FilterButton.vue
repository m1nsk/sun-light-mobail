<template>
  <div class="filter">
    <div class="flex-center">
      <span class="title">{{ data.title }}</span>
      <img src="/static/myIcons/cancel.svg" class="icon-cancel" @click="onExcludeClicked">
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

  .title
  {
    line-height: 16px;
    font-size: 12px;
    margin-right: 2px;
  }

  .icon-cancel
  {
    height: 100%;
    width: 12px;
  }
</style>
