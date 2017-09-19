<script>
  export default {
    data () {
      return {
      }
    },
    computed: {
      itemList () {
        return this.$store.getters.getScrollItemList
      },
      flagLoaded () {
        return this.$store.getters.getScrollLoadedFlag
      },
      reloadStatus () {
        return this.$store.getters.getScrollReloadStatus
      },
      animationFlag () {
        console.log(this.$store.getters.getAnimationFlag, 'animationFlag')
        return this.$store.getters.getAnimationFlag
      }
    },
    created: function () {
      this.$nextTick(function () {
        this.$nextTick(function () {
          this.getItems()
        })
      })
    },
    destroyed: function () {
      this.clearItemList()
    },
    methods: {
      clearItemList () {
        this.$store.commit('setScrollToDefault')
      },
      getItems () {
        this.$store.dispatch('getScrollList', {
          getFunction: this.getItemFunction,
          payload:  this.payload
        })
      },
      onInfinite () {
        this.getItems()
      }
    }
  }
</script>
