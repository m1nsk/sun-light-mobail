<template>
  <scroll :enableInfinite="false" :enableRefresh="false" class="scroll">
    <div class="content">
      <div v-for="item in 20" class="wrapper">
        <div class="name">Назавание</div>
        <div class="value">Тип</div>
      </div>
    </div>
  </scroll>
</template>

<script>
  import scroll from '~/components/scroll'
  export default {
    components: {
      scroll
    }
  }

</script>

<style lang="less" scoped>
  .wrapper
  {
    height: 30px;
    width: 100%;
  }

  .name
  {
    width: 50%;
    display: inline-block;
    float: left;
    text-align: left;
    font-size: 12px;
    color: black;
  }

  .value
  {
    width: 50%;
    display: inline-block;
    float: right;
    text-align: right;
    font-size: 12px;
    color: darkgray;
  }

  .content
  {
    margin: 1.5rem auto 0 auto;
    width: 70%;
  }

  .scroll
  {
    margin-bottom: 2.7rem;
  }
</style>
