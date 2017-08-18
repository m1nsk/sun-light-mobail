<template>
  <div class="outerWrapper">
    <div class="wrapper">
      <div :class="{btnActive: reserveBtnActive}" @mousedown="reserveMouseDown" @mouseup="reserveMouseUp" class="btn">
        <span class="caption">{{ caption }}</span>
      </div>
    </div>
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
  .outerWrapper
  {
    width: 50%;
    height: 40px;
  }

  .wrapper
  {
    height: 100%;
    border: 2px solid white;
  }

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
    width: 100%;
    height: 100%;
    background-color: #fff0e9;
    border: 1px solid #fff0e9;
  }

</style>
