<template>
  <div class="button-small">
    <div class="button-small_wrapper">
      <div :class="{buttonActive: reserveBtnActive}" @mousedown="reserveMouseDown" @mouseup="reserveMouseUp" class="button-small__button">
        <span class="button-small__caption" :style="{'fontSize': fontSize + 'px'}">{{ caption }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {
    },
    props: ['caption', 'fontSize'],
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
  .button-small
  {
    width: 50%;
    height: 40px;
    border-radius: 15px;
  }

  .button-small_wrapper
  {
    height: 100%;
    width: 100%;
    border: 2px solid white;
  }

  .buttonActive
  {
    border: 1px solid #4A4A4A;
  }

  .button-small__caption
  {
    font-size: 10px;
    line-height: 18px;
    display: table-cell;
    text-align: center;
    vertical-align: middle;
  }

  .button-small__button
  {
    display: table;
    width: 100%;
    height: 100%;
    background-color: #fff0e9;
    border: 1px solid #fff0e9;
    border-radius: 5px;
  }

</style>
