<template>
  <div :class="{btnActive: reserveBtnActive}" @mousedown="reserveMouseDown" @mouseup="reserveMouseUp" class="btn">
    <span class="caption">{{ caption }}</span>
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
  .btnActive
  {
    border: 1px solid #4A4A4A;
  }

  .caption
  {
    font-size: 10px;
    line-height: 18px;
    display: table-cell;
    text-align: center;
    vertical-align: middle;
  }

  .btn
  {
    display: table;
  }

</style>
