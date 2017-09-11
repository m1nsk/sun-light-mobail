<template>
  <div v-if="dataLoaded === false" class="flex-center pageIsLoading">
    <i class="fa fa-spinner fa-pulse fa-3x fa-fw" style="color: black"></i>
  </div>
  <div v-else-if="dataLoaded === true" class="productGridWrapper">
    <slot name="content" :dataList="dataList"></slot>
  </div>
</template>

<script>
  export default {
    props: {
      requestFunction: {
        type: Function,
        required: true
      },
      getter: {
        type: String,
        required: true
      },
      setter: {
        type: String,
        required: true
      },
      onReload: {
        type: Boolean,
        default: false
      },
      payload: {
        type: Object,
        default: function () {
          return {}
        }
      },
      componentHeight: {
        type: Number,
        default: 120
      },
      columnNum: {
        type: Number,
        default: 1
      }
    },
    data () {
      return {
        productCounter: 0,
        flagLoaded: false,
        totalCount: 0,
        takeCount: 0,
        productsInResponse: 0,
        dataLoaded: false
      }
    },
    mounted: function () {
      let height = document.documentElement.clientHeight
      let width = document.documentElement.clientWidth
      let size = Math.round((width * 8 / 10) / this.columnNum - 10)
      this.productsInResponse = Math.ceil(height / size) * this.columnNum
      // console.log(height, 'height', width, 'width', size, 'size', Math.ceil(height / size), 'rest')
      this.uploadProducts(this.productsInResponse)
    },
    watch: {
      restToLoad () {
        if (!this.flagLoaded && this.restToLoad) {
          console.log(this.restToLoad, 'rest to load')
          this.uploadProducts(this.restToLoad)
        }
      },
      onReload () {
        if (this.onReload === true) {
          this.onInfinite()
        }
      },
      dataList () {
        this.$emit('dataListLength', {length: this.dataList.length})
      }
    },
    computed: {
      dataList () {
        console.log(this.getData)
        return this.$store.getters[this.getter]
      },
      restToLoad () {
        if (!this.flagLoaded) {
          let windowSize = this.$store.getters.getWindowSize
          let elementHeight = this.componentHeight
          let orientation = this.$store.getters.getWindowOrientation.type
          let restCount = 0
          // console.log(orientation, 'orientation', windowSize.height, 'W-height', elementHeight, 'B-height')
          if (windowSize.height !== undefined && elementHeight !== undefined && orientation !== undefined) {
            // console.log(windowSize && elementHeight && orientation)
            restCount = Math.ceil(windowSize.height / elementHeight) * this.columnNum
            if (Math.ceil(this.productCounter / this.columnNum % restCount !== 0)) {
              this.productsInResponse = restCount
              // console.log(restCount, this.productCounter, 'rest and counter')
              return restCount - this.productCounter % restCount
            }
            return 0
          }
          return 0
        }
      }
    },
    methods: {
      onProductClicked (item) {
        // console.log(item.id)
        this.$router.push(this.$route.path + '/' + item.id)
      },
      onInfinite () {
        if (!this.flagLoaded) {
          if (this.productsInResponse + this.productCounter < this.totalCount) {
            this.uploadProducts(this.productsInResponse)
          } else {
            this.uploadProducts(this.totalCount - this.productCounter)
            this.$emit('onReload', false)
          }
        }
      },
      uploadProducts (take) {
        let payload = this.payload
        payload.skip = this.productCounter
        payload.take = take
        let promise = this.requestFunction(payload)
        promise.then((response) => {
          this.productCounter += take
          this.$store.commit(this.setter, response.data.data)
          this.totalCount = response.data.totalCount
          if (this.productCounter >= this.totalCount) {
            this.flagLoaded = true
            this.reloadStatus = false
            this.$emit('flagLoaded', false)
          }
          this.$emit('onReload', false)
          this.dataLoaded = true
        })
      }
    }
  }
</script>

<style lang="less">
  .productGridWrapper
  {
    width: 100%;
    max-width: 500px;
    margin: auto;
  }

  .listItem
  {
    display: inline-block;
  }
</style>
