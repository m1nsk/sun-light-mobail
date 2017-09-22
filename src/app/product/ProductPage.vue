<template>
  <div class="page">
    <product-header :product_id="productData.product_id"></product-header>
    <page-content>
      <div v-if="productItemLoaded === false" class="flex-center pageIsLoading">
        <i class="fa fa-spinner fa-pulse fa-3x fa-fw" style="color: black"></i>
      </div>
      <div v-else-if="productItemLoaded === true">
        <!-- <scroll :on-infinite="onInfinite" :enableRefresh=false :enableInfinite="!flagLoaded" :infiniteLoading="reloadStatus"> -->
        <div class="slider">
          <div class="prodName max-width">
            <span>{{ productData.label }}</span>
            <div v-if="productData.best" class="hitClass">
              <span>Хит</span>
            </div>
          </div>
        </div>
        <slide-wrapper class="sliderWrapper">
          <slide v-for="img in productData.gallery"  :key="img.id"><img class="sliderImg" v-lazy="img.mini" alt="Нет картинки"/></slide>
        </slide-wrapper>
        <div class="prodPrice max-width">
          <span>до {{productData.cost}} р.</span>
        </div>
        <shop-button @click.native="onReserveClicked" caption="Оформить резерв" class="reserveBtn max-width" ></shop-button>
        <div class="prodQty max-width">
          <span>В наличии в магазинах 10 </span>
        </div>
        <hr class="max-width hr" color="gray" size="1px"/>
        <div class="prodDescription max-width">
        </div>
        <hr class="max-width hr" color="gray" size="1px"/>
        <div class="btnArea max-width">
          <button-small @click.native="onMarkedClicked" caption="Может понравиться" class="markedBtn" ></button-small>
          <button-small @click.native="onSeenClicked" caption="Просмотренные" class="seenBtn" ></button-small>
        </div>
        <!--
        <div style="position: relative; width: 100%;" :style="{'height': this.$store.getters.getWindowSize.height + 'px'}">
          <div class="content-layout">
            <div class="content-padded">
              <custom-data-grid url="/products" :onReload="onReload" :columnNum="2" :elementHeight="getElementHeight" @flagLoaded="onFlagLoaded">
                <template slot="content" scope="props">
                  <product-card-banner v-for="item in props.dataList" :key="item.id" :bannerData="item" @click.native="onProductClicked(item)" class="listItem"></product-card-banner>
                </template>
              </custom-data-grid>
            </div>
          </div>
        </div>
        -->
        <!-- </scroll> -->
      </div>
    </page-content>
  </div>
</template>

<script>
  import { getProduct } from 'api/index'
  import { SlideWrapper, Slide } from '~/components/slide'
  import ProductHeader from 'appComponents/components/headers/ProductHeader.vue'
  import Button from 'appComponents/components/buttons/Button.vue'
  import ButtonSmall from 'appComponents/components/buttons/ButtonSmall.vue'
  import ProductCardBanner from 'appComponents/components/banners/ProductCardBanner.vue'
  import CustomDataGrid from 'appComponents/components/banners/CustomDataGrid.vue'
  import Scroll from '~/components/customScroll'
  import Content from '~/components/content'

  export default {
    components: {
      ProductHeader,
      'shop-button': Button,
      ButtonSmall,
      SlideWrapper,
      Slide,
      ProductCardBanner,
      CustomDataGrid,
      Scroll,
      'page-content': Content
    },
    data () {
      return {
        productData: {},
        productItemLoaded: false
      }
    },
    activated: function () {
      if (!this.getReloadListFlag()) {
        let payload = {
          id: this.$route.params.id
        }
        let promise = getProduct(payload.id)
        promise.then((response) => {
          this.productData = response.data.data
          this.productItemLoaded = true
        })
      }
    },
    computed: {
      dataLoaded () {
        return this.$store.getters.getProductItemLoaded
      }
    },
    methods: {
      getReloadListFlag () {
        return this.$store.getters.getMarketListReload
      },
      setReloadListFlag (state) {
        this.$store.commit('setMarketListReloadFlag', state)
      },
      onReserveClicked () {
        this.$store.commit('setCardCode', this.$route.params.id)
        this.$router.push({
          name: 'reserve'
        })
      },
      onMarkedClicked () {
        console.log('clicked')
      },
      onSeenClicked () {
        console.log('clicked')
      },
      onProductClicked (item) {
        this.$router.push({
          name: 'reserve',
          params: {
            product: item.id
          }
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .slider
  {
    padding-top: 20px;
  }

  .hr {
    width: 80%;
    text-align: center;
  }

  .sliderWrapper
  {
    width: 100%;
  }

  .prodName
  {
    height: 24px;
    text-align: center;
    width: 80%;
    margin: 0 auto;
  }

  .prodName > span
  {
    font-size: 16px;
  }

  .prodPrice
  {
    height: 24px;
    text-align: center;
    width: 80%;
    margin: 5px auto;
    padding-bottom: 35px;
  }

  .prodQty
  {
    height: 24px;
    text-align: center;
    width: 80%;
    margin: 5px auto;
    padding-bottom: 35px;
  }

  .prodQty > span
  {
    font-size: 12px;
    line-height: 22px;
  }

  .hitClass
  {
    width: 48px;
    height: 32px;
    position: absolute;
    text-align: center;
    top: 0;
    right: 0;
    background-color: antiquewhite;
  }

  .hitClass > span
  {
    line-height: 32px;
    font-size: 12px;
  }

  .sliderImg
  {
    width: 200px;
    height: auto;
  }

  .prodDescription
  {
    margin: 5px auto;
    width: 80%;
    text-align: center;
  }

  .btnArea
  {
    width: 80%;
    height: 39px;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  .markedBtn
  {
    height: 100%;
    width: 50%;
    text-align: center;
    display: inline-block;
    float: left;
  }

  .seenBtn
  {
    height: 100%;
    width: 50%;
    text-align: center;
    display: inline-block;
    float: left;
  }
</style>
