<template>
  <div class="productGridWrapper">
    <slot name ="content" v-for="item in bannerList" :key="item.id" :bannerData="item" @click.native="onProductClicked(item)" class="item"></slot>
  </div>
</template>

<script>
  import { getCustomData } from 'api/index'
  export default {
    props: ['scrollFlag', 'url'],
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>

<style lang="less">
  .productGridWrapper
  {
    width: 100%;
    max-width: 500px;
    margin: auto;
  }

  .item
  {
    display: inline-block;
  }
</style>
