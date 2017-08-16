<template>
  <content-wrapper>
    <reserve-menu title="Оформление резерва" slot="header"></reserve-menu>

  </content-wrapper>
</template>

<script>
  import ReserveMenu from 'appComponents/menu/TitleMenu.vue'
  import ContentWrapper from 'appComponents/menu/helpers/ContentWrapper.vue'
  export default {
    components: {
      ReserveMenu,
      ContentWrapper
    },
    data () {
      return {
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
