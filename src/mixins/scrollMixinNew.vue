<script>
  export default {
    data () {
      return {
      }
    },
    computed: {
      animationFlag () {
        return this.$store.getters.getAnimationFlag
      },
      loadedScrollFlag () {
        return this.$store.getters.loadedScrollFlag
      },
      reloadScrollFlag () {
        return this.$store.getters.reloadScrollFlag
      },
    },
    created: function () {
      this.setCurrentStore()
      console.log('created')
      this.setReloadListFlag(true)
      this.clearItemList()
      this.activatedPage()
      this.$nextTick(function () {
        this.$nextTick(function () {
          this.getItems()
        })
      })
    },
    activated: function () {
      this.setCurrentStore()
      console.log('activated')
      if (!this.getReloadListFlag()) {
        this.setReloadListFlag(true)
        this.clearItemList()
        this.activatedPage()
        this.$nextTick(function () {
          this.$nextTick(function () {
            this.getItems()
          })
        })
      }
    },
    deactivated: function () {
    },
    methods: {
      setScrollItemList (addItemsList) {
        for (let index = 0; index < addItemsList.length; index++) {
          this.scrollItemList.push(addItemsList[index])
        }
      },
      clearItemList () {
        this.$store.commit('setScrollToDefault')
      },
      getItems () {
        let payload = { payload: this.payload }
        this.$store.dispatch('getScrollList', payload)
      },
      onInfinite () {
        this.getItems()
      }
    }
  }
</script>
