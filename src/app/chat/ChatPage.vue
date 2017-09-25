<template>
  <div>
    <title-header title="Поддержка"></title-header>
    <page-content class="content-padding-bottom">
      <div id="chat">
        <div class="main">
          <message></message>
          <text-enter></text-enter>
        </div>
      </div>
    </page-content>
  </div>
</template>


<script>
  import Text from './components/text.vue';
  import Message from './components/message.vue';
  import TitleHeader from 'appComponents/components/headers/TitleHeader.vue'
  import Content from '~/components/content'
  export default {
    components: { 'text-enter': Text, Message, 'page-content': Content, TitleHeader },
    created () {
      this.$store.dispatch('initData');
    }
  }
</script>


<style lang="less" scoped>
  #chat {
    margin: 0 auto;
    width: 100%;
    height: 600px;

    overflow: hidden;
    border-radius: 3px;

    .sidebar, .main {
      height: 100%;
    }
    .sidebar {
      float: left;
      width: 200px;
      color: #f4f4f4;
      background-color: #2e3238;
    }
    .main {
      position: relative;
      overflow: hidden;
      background-color: #eee;
    }
    .text {
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
    }
    .message {
      height: ~'calc(100% - 160px)';
    }
  }
</style>
