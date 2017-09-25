<template>
  <div class="message" v-chat-scroll="{always: false}">
    <ul v-if="session">
      <li v-for="item in session.messages">
        <p class="time">
          <span>{{ item.date | time }}</span>
        </p>
        <div class="main" :class="{ self: item.self }">
          <img class="avatar" width="30" height="30" :src="item.self ? user.img : session.user.img" />
          <div class="text">{{ item.content }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    computed: {
      user () {
        return this.$store.getters.user
      },
      session () {
        return this.$store.getters.session
      }
    },
    filters: {
      time (date) {
        if (typeof date === 'string') {
          date = new Date(date);
        }
        return date.getHours() + ':' + date.getMinutes();
      }
    }
  };
</script>

<style lang="less" scoped>
  .message {
    padding: 10px 15px;
    overflow-y: scroll;
    ul {
      padding-left: 0;
      margin-left: 0;
      list-style-type: none;
      li {
        margin-bottom: 15px;
        display: inline-block;
        width: 100%;
      }
    }
    .time {
      margin: 7px 0;
      text-align: center;

      > span {
        display: inline-block;
        padding: 0 18px;
        font-size: 12px;
        color: #fff;
        border-radius: 2px;
        background-color: #dcdcdc;
      }
    }
    .avatar {
      float: left;
      margin: 0 10px 0 0;
      border-radius: 3px;
    }
    .text {
      display: inline-block;
      position: relative;
      padding: 0 10px;
      max-width: ~'calc(100% - 40px)';
      min-height: 30px;
      line-height: 2.5;
      font-size: 12px;
      text-align: left;
      word-break: break-all;
      background-color: #fafafa;
      border-radius: 4px;

      &:before {
        content: " ";
        position: absolute;
        top: 9px;
        right: 100%;
        border: 6px solid transparent;
        border-right-color: #fafafa;
      }
    }

    .self {
      text-align: right;

      .avatar {
        float: right;
        margin: 0 0 0 10px;
      }
      .text {
        background-color: #b2e281;

        &:before {
          right: inherit;
          left: 100%;
          border-right-color: transparent;
          border-left-color: #b2e281;
        }
      }
    }
  }
</style>
