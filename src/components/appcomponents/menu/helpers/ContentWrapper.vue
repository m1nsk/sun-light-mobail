<template>
  <div class="page">
    <slot name="header"></slot>
    <page-content class="content">
      <scroll :on-refresh="onRefresh" :enableInfinite="false" :enableRefresh="true" class="scroll">
        <slot name="slider"></slot>
        <div class='contentWrapper'>
          <slot></slot>
        </div>
        <slot name="buttons"></slot>
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
  .scroll
  {
    margin: auto;
    padding-top: 150px;
  }

  .contentWrapper
  {
    width: 90%;
    max-width: 500px;
    margin: 0 auto;
    padding-top: 50px;
  }

  .page {
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
  }
</style>
