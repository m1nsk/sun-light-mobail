<template>
  <div>
    <product-header :product_id="productData.product_id"></product-header>
    <page-content class="content-padding-bottom">
      <scroll :on-infinite="onInfinite" :enableRefresh=false :enableInfinite="!flagLoaded" :infiniteLoading="reloadStatus">
        <div class="slider">
          <div class="prodName max-width">
            <span>{{ productData.label }}</span>
            <div v-if="productData.best" class="hitClass">
              <span>Хит</span>
            </div>
          </div>
          <slide-wrapper class="sliderWrapper">
            <slide v-for="img in productData.gallery"  :key="item.id"><img class="sliderImg" src="img.mini"/></slide>
          </slide-wrapper>
        </div>
        <div>
          <div class="prodPrice max-width">
            <span>до {{productData.cost}} р.</span>
          </div>
          <shop-button @click.native="onReserveClicked" caption="Оформить резерв" class="reserveBtn max-width" ></shop-button>
          <div class="prodQty max-width">
            <span>В наличии в магазинах 10 </span>
          </div>
          <hr class="max-width hr" color="gray" size="1px"/>
          <div class="prodDescription max-width">
            {{ productData.description }}
          </div>
          <hr class="max-width hr" color="gray" size="1px"/>
          <div class="btnArea max-width">
            <button-small @click.native="onMarkedClicked" caption="Может понравиться" class="markedBtn" ></button-small>
            <button-small @click.native="onSeenClicked" caption="Просмотренные" class="seenBtn" ></button-small>
          </div>
          <div class="content-layout">
            <div class="content-padded">
              <custom-data-grid url="/products" :onReload="onReload" :columnNum="2" :elementHeight="getElementHeight" @flagLoaded="onFlagLoaded">
                <template slot="content" scope="props">
                  <product-card-banner v-for="item in props.dataList" :key="item.id" :bannerData="item" @click.native="onProductClicked(item)" class="item"></product-card-banner>
                </template>
              </custom-data-grid>
            </div>
          </div>
        </div>
      </scroll>
    </page-content>
  </div>
</template>

<script>
  import { getProduct } from 'api/index'
  import scrollMixin from '~/mixins/scrollMixin.vue'
  import { SlideWrapper, Slide } from '~/components/slide'
  import ProductHeader from 'appComponents/components/headers/ProductHeader.vue'
  import ContentWrapper from 'appComponents/components/wrappers/ContentWrapper.vue'
  import Button from 'appComponents/components/buttons/Button.vue'
  import ButtonSmall from 'appComponents/components/buttons/ButtonSmall.vue'
  import ProductCardBanner from 'appComponents/components/banners/ProductCardBanner.vue'
  import CustomDataGrid from 'appComponents/components/banners/CustomDataGrid.vue'
  import Scroll from '~/components/customScroll'
  import Content from '~/components/content'

  export default {
    extends: scrollMixin,
    components: {
      ProductHeader,
      ContentWrapper,
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
        productData: {
          bannerImage: '/static/logo.png'
        }
      }
    },
    created: function () {
      let promise = getProduct(this.$route.params.product)
      promise.then((response) => {
        console.log(response.data.data)
        this.productData = response.data.data
      })
    },
    computed: {
      getElementHeight () {
        return this.$store.getters.getBannerSize.height
      }
    },
    methods: {
      onReserveClicked () {
        this.$router.push({
          name: 'reserve',
          params: {
            category: this.$route.params.category,
            product: this.$route.params.product
          }
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
            category: this.$route.params.category,
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
    width: 230px;
  }

  .prodName
  {
    height: 24px;
    text-align: center;
    width: 80%;
    position: relative;
    margin: auto;
  }

  .prodName > span
  {
    font-size: 16px;
  }

  .prodPrice
  {
    height: 24px;
    text-align: center;
    width: 100%;
    margin: 5px 0;
    padding-bottom: 35px;
  }

  .prodQty
  {
    height: 24px;
    text-align: center;
    width: 100%;
    margin: 5px 0;
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

  .max-width
  {
    max-width: 500px;
    margin: auto;
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
