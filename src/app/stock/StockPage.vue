<template>
  <content-wrapper>
    <main-header slot="header"></main-header>
    <div v-for="item in 10" :key="item.id" class="listItem">
      <img src='/static/logo.png' class="banner"/>
    </div>
  </content-wrapper>
</template>

<script>
  import MainHeader from 'appComponents/components/headers/MainHeader.vue'
  import ContentWrapper from 'appComponents/components/wrappers/ContentWrapper.vue'
  export default {
    components: {
      ContentWrapper,
      MainHeader
    },
    data () {
      return {
      }
    }
  }
</script>

<style lang="less" scoped>
  .listItem
  {
    max-width: 500px;
    height: 87px;
    margin: 5px auto;
    list-style-type: none;
  }

  .banner
  {
    width: 230px;
    height: 87px;
    display: block;
    margin: auto;
  }

</style>
