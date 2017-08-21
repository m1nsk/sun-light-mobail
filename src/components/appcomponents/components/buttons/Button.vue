<template>
  <div :class="{buttonActive: reserveBtnActive}" @mousedown="reserveMouseDown" @mouseup="reserveMouseUp" class="button">
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
        reserveBtnActive: false
      }
    },
    methods: {
      reserveMouseUp () {
        this.reserveBtnActive = false
      },
      reserveMouseDown () {
        this.reserveBtnActive = true
      }
    }
  }
</script>

<style lang="less" scoped>
  .buttonActive
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
  }

</style>
