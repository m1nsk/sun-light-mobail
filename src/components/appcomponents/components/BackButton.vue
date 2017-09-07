<template>
  <div class="frame flex-center" @click="onBackBtnCliked">
    <img src="/static/myIcons/left-arrow.svg" class="icon">
  </div>
</template>

<script>
  export default {
    methods: {
      onBackBtnCliked () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style lang="less" scoped>
  .icon
  {
    vertical-align: middle;
    width: 18px;
    height: 18px;
  }

  .frame
  {
    height: 100%;      /* equals max image height */
    width: 48px;
  }
</style>
