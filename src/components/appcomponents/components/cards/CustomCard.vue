<template>
  <div class="shop-card">
    <div class="content-wrapper">
      <slot name="img"></slot>
      <div class="divider"></div>
      <slot name="info"></slot>
    </div>
    <div slot="icons" class="icon-wrapper on-top">
      <slot name="icons"></slot>
    </div>
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

  .icon-wrapper
  {
    position: relative;
    width: 32px;
  }

  .on-top
  {
    z-index: 1;
  }
</style>
