<template>
  <div class="heart-mark flex-center">
    <img :src="markIcon" class="heart-mark__icon" @click.stop="onMarkClick">
  </div>
</template>

<script>
  export default {
    components: {
    },
    props: ['liked'],
    data () {
      return {
      }
    },
    methods: {
      onMarkClick () {
        this.$emit('like')
      }
    },
    computed: {
      markIcon () {
        if (this.liked) {
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
    width: 18px;
    height: 18px;
  }

  .heart-mark {
    height: 32px;      /* equals max image height */
    width: 32px;
  }

</style>
