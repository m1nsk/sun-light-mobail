<template>
  <div :class="{btnActive: reserveBtnActive}" @mousedown="reserveMouseDown" @mouseup="reserveMouseUp">
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
    border: 1px solid #403C39;
  }

  .caption
  {
    font-size: 15px;
    line-height: 39px;
  }
</style>
