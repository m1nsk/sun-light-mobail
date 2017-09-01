<template>
  <div class="shop-card">
    <div class="content-wrapper">
      <slot name="img"></slot>
      <div class="divider"></div>
      <slot name="info" class="info"></slot>
    </div>
    <slot name="icons"></slot>
  </div>
</template>

<style lang="less" scoped>
  .divider
  {
    width: 5%;
  }
  .shop-card
  {
    display: flex;
    justify-content:space-between;
    border-top: 1px solid #e7e7e7;
    padding: 10px 0;
  }

  .content-wrapper
  {
    display: flex;
    justify-content: flex-start;
  }

  .info-wrapper
  {
    display: flex;
    justify-content: flex-start;
    align-content: flex-start;
    flex-direction: column;
    overflow: hidden;
    padding-left: 10px;
  }

  .icon-wrapper
  {
    position: relative;
    width: 32px;
  }
</style>
