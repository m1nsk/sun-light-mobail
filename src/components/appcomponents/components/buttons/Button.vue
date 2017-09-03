<template>
  <div :class="{buttonActive: btnActive}" @mousedown="btneMouseDown" @mouseup="btnMouseUp" class="button">
    <span class="button__title">{{ caption }}</span>
  </div>
</template>

<script>
  export default {
    components: {
    },
    props: ['caption'],
    data () {
      return {
        btnActive: false
      }
    },
    methods: {
      btnMouseUp () {
        this.btnActive = false
      },
      btnMouseDown () {
        this.btnActive = true
      }
    }
  }
</script>

<style lang="less" scoped>
  .btnActive
  {
    border: 1px solid #403C39;
  }

  .button__title
  {
    font-size: 15px;
    line-height: 39px;
    display: table-cell;
    vertical-align: middle;
    color: #2e2e2e;
  }

  .button
  {
    display: table;
    height: 39px;
    width: 80%;
    text-align: center;
    margin: 5px auto;
    background-color: #fff0e9;
    border: 1px solid #fff0e9;
  }

</style>
