<template>
  <div class="page">
    <slot name="header-menu"></slot>
    <page-content class="content">
      <scroll :enableInfinite="false" :onRefresh="onRefresh" class="scroll">
        <slot name="slider"></slot>
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
    props: ['backgroundColor', 'isScroll'],
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
  .content
  {
    position: absolute;
    bottom: 2.3rem;
    left: 0;
    right: 0;
    top: 0;
  }
  .scroll
  {
    margin: 2.2rem 0 auto;
  }

  .contentWrapper
  {
    width: 90%;
    height: 100%;
    padding-top: 30px;
    max-width: 500px;
    margin: 0 auto;
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
