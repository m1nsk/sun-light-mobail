<script>
  export default {
    data () {
      return {
        createdFlag: false
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
      if (!this.createdFlag) {
        this.setCurrentStore()
        this.activatedPage()
        this.$nextTick(function () {
          this.$nextTick(function () {
            this.getItems()
          })
        })
      }
    },
    activated: function () {
      if (this.createdFlag === false) {
        this.createdFlag = true
      } else {
        this.setCurrentStore()
        this.activatedPage()
        this.$nextTick(function () {
          this.$nextTick(function () {
            this.getItems()
          })
        })
      }
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
        console.log('infinite')
        this.getItems()
      }
    }
  }
</script>
