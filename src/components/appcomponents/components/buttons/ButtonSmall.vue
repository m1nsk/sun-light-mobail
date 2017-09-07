<template>
  <div class="button-small">
    <div class="wrapper">
      <div :class="{buttonActive: reserveBtnActive}" @mousedown="reserveMouseDown" @mouseup="reserveMouseUp" class="button-button flex-center">
        <span class="caption" :style="{'fontSize': fontSize + 'px'}">{{ caption }}</span>
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

  .wrapper
  {
    height: 100%;
    width: 100%;
    border: 2px solid white;
  }

  .buttonActive
  {
    border: 1px solid #4A4A4A;
  }

  .caption
  {
    font-size: 10px;
    line-height: 18px;
  }

  .button-button
  {
    width: 100%;
    height: 100%;
    background-color: #fff0e9;
    border: 1px solid #fff0e9;
    border-radius: 5px;
  }

</style>
