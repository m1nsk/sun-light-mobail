<template>
  <div v-if="dataLoaded === false" class="flex-center pageIsLoading">
    <i class="fa fa-spinner fa-pulse fa-3x fa-fw" style="color: black"></i>
  </div>
  <div v-else-if="dataLoaded === true" class="productGridWrapper">
    <slot name="content" :dataList="dataList"></slot>
  </div>
</template>

<script>
  import { getCustomData } from 'api/index'
  export default {
    props: {
      onReload: {
        type: Boolean,
        default: false
      },
      url: {
        type: String,
        default: ''
      },
      componentHeight: {
        type: Number,
        default: 120
      },
      columnNum: {
        type: Number,
        default: 1
      },
      payLoad: {
        type: Object
      }
    },
    data () {
      return {
        dataList: [],
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
      console.log(height, 'height', width, 'width', size, 'size', Math.ceil(height / size), 'rest')
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
      restToLoad () {
        if (!this.flagLoaded) {
          let windowSize = this.$store.getters.getWindowSize
          let elementHeight = this.componentHeight
          let orientation = this.$store.getters.getWindowOrientation.type
          let restCount = 0
          console.log(orientation, 'orientation', windowSize.height, 'W-height', elementHeight, 'B-height')
          if (windowSize.height !== undefined && elementHeight !== undefined && orientation !== undefined) {
            console.log(windowSize && elementHeight && orientation)
            restCount = Math.ceil(windowSize.height / elementHeight) * this.columnNum
            if (Math.ceil(this.productCounter / this.columnNum % restCount !== 0)) {
              this.productsInResponse = restCount
              console.log(restCount, this.productCounter, 'rest and counter')
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
        console.log(item.id)
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
        console.log(take, 'take')
        let catalogId = this.$route.params.category
        let promise = getCustomData(this.url, {
          skip: this.productCounter,
          take: take,
          sort: 'id',
          order: 'asc',
          catalog_id: catalogId
        })
        this.productCounter += take
        promise.then((response) => {
          for (let index = 0; index < response.data.data.length; index++) {
            this.dataList.push(response.data.data[index])
            this.totalCount = response.data.totalCount
            if (this.productCounter >= this.totalCount) {
              this.flagLoaded = true
              this.reloadStatus = false
              this.$emit('flagLoaded', false)
            }
            this.$emit('onReload', false)
          }
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
