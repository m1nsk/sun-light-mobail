<template>
  <div class="productGridWrapper">
    <slot name="content" :dataList="dataList"></slot>
  </div>
</template>

<script>
  import { getCustomData } from 'api/index'
  export default {
    props: ['onReload', 'url'],
    data () {
      return {
        dataList: [],
        productCounter: 0,
        flagLoaded: false,
        totalCount: 0,
        takeCount: 0,
        productsInResponse: 0
      }
    },
    mounted: function () {
      let height = document.documentElement.clientHeight
      let width = document.documentElement.clientWidth
      let size = Math.round((width * 8 / 10) / 2 - 10)
      this.productsInResponse = Math.ceil(height / size) * 2
      // this.uploadProducts(this.productsInResponse)
    },
    watch: {
      restToLoad () {
        if (!this.flagLoaded) {
          console.log(this.restToLoad, 'rest to load')
          this.uploadProducts(this.restToLoad)
        }
      },
      onReload () {
        if (this.onReload === true) {
          this.onInfinite()
        }
      }
    },
    computed: {
      restToLoad () {
        if (!this.flagLoaded) {
          let windowSize = this.$store.getters.getWindowSize
          let bannerSize = this.$store.getters.getBannerSize
          let orientation = this.$store.getters.getWindowOrientation.type
          let restCount = 0
          console.log(orientation, 'orientation')
          console.log(restCount, 'restcount')
          if (windowSize && bannerSize && orientation !== undefined) {
            restCount = Math.ceil(windowSize.height / bannerSize.height) * 2
            if (Math.ceil(this.productCounter / 2 % restCount !== 0)) {
              this.productsInResponse = restCount
              console.log(restCount, this.productCounter, 'rest and counter')
              return restCount - this.productCounter % restCount
            }
          }
        }
        return this.productsInResponse
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
      uploadProducts (take = 2) {
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

  .item
  {
    display: inline-block;
  }
</style>
