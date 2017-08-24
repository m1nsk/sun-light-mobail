<template>
  <div class="header__frame" @click="onBackBtnCliked">
    <span class="header__helper"></span>
    <img src="/static/myIcons/left-arrow.svg" class="header__icon">
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
  .header__icon
  {
    vertical-align: middle;
    width: 18px;
    height: 18px;
  }

  .header__frame
  {
    height: 100%;      /* equals max image height */
    width: 48px;
    white-space: nowrap; /* this is required unless you put the helper span closely near the img */
    text-align: center;
  }

  .header__helper
  {
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }
</style>
