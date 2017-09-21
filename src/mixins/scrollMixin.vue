<script>
  export default {
    data () {
      return {
        scrollItemList: [],
        reloadScrollFlag: false,
        loadedScrollFlag: false,
        totalScrollCount: 0,
        scrollCounter: 0,
        columnNum: 1,
        productReloadListFlag: false
      }
    },
    computed: {
      animationFlag () {
        return this.$store.getters.getAnimationFlag
      }
    },
    activated: function () {
      if (!this.getReloadListFlag()) {
        this.setReloadListFlag(true)
        this.clearItemList()
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
      getScrollList (scrollData) {
        let payload = scrollData.payload
        let getFunction = scrollData.getFunction
        let that = this
        this.reloadScrollFlag = true
        payload.sort = 'id'
        payload.order = 'asc'
        payload.take = (() => {
          if (!this.loadedScrollFlag) {
            let restCount = Math.ceil(that.$store.getters.getWindowSize.height / that.$store.getters.getBannerSize.height)
            return restCount - that.scrollCounter % restCount
          }
          return 0
        })()
        payload.skip = this.scrollCounter
        let promise = getFunction (payload)
        promise.then(response => {
          that.scrollCounter += payload.take
          that.totalScrollCount = response.data.totalCount
          that.setScrollItemList(response.data.data)
          that.reloadScrollFlag = false
          if (that.scrollCounter >= that.totalScrollCount) {
            that.loadedScrollFlag = true
          }
        })
      },
      setScrollItemList (addItemsList) {
        for (let index = 0; index < addItemsList.length; index++) {
          this.scrollItemList.push(addItemsList[index])
        }
      },
      clearItemList () {
        this.loadedScrollFlag = false
        this.reloadScrollFlag = false
        this.scrollItemList = []
        this.totalScrollCount = 0
        this.scrollCounter = 0
        console.log('cleared list')
      },
      getItems () {
        this.getScrollList({
          getFunction: this.getItemFunction,
          payload: this.payload
        })
      },
      onInfinite () {
        console.log('on infinite')
        this.getItems()
      }
    }
  }
</script>
