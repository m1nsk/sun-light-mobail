<template>
  <div class="heart-mark">
    <span class="heart-mark__helper"></span>
    <img :src="markIcon" class="heart-mark__icon" @click.stop="onMarkClick">
  </div>
</template>

<script>
  export default {
    components: {
    },
    data () {
      return {
        marked: false
      }
    },
    methods: {
      onMarkClick () {
        this.marked = !this.marked
      }
    },
    computed: {
      markIcon () {
        if (this.marked) {
          return '/static/myIcons/like_full.svg'
        }
        return '/static/myIcons/like.svg'
      }
    }
  }
</script>

<style lang="less" scoped>
  .heart-mark__icon
  {
    vertical-align: middle;
    width: 18px;
    height: 18px;
  }

  .heart-mark {
    height: 32px;      /* equals max image height */
    width: 32px;
    white-space: nowrap; /* this is required unless you put the helper span closely near the img */
    text-align: center;
    cursor: pointer;
  }

  .heart-mark__helper {
    height: 100%;
    vertical-align: middle;
  }
</style>
