<template>
  <div class="page">
    <slot name="header"></slot>
    <page-content>
      <scroll :on-refresh="onRefresh" :enableInfinite="false" :enableRefresh="true" class="scroll">
        <div class='contentWrapper'>
          <slot></slot>
        </div>
      </scroll>
    </page-content>
  </div>
</template>

<script>
  import scroll from '~/components/scroll'
  import Content from '~/components/content'
  export default {
    components: {
      scroll,
      'page-content': Content
    },
    props: ['backgroundColor'],
    methods: {
      onRefresh (done) {
        /*
         Здесь может быть запрос на обновления данных
         */

        let self = this
        setTimeout(function () {
          self.time = new Date()
          done()  // call done
        }, 200)
      }
    }
  }
</script>

<style lang="less" scoped>
  .contentWrapper{
    max-width: 500px;
    margin: 20px auto;
  }
</style>
