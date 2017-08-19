<template>
  <content-wrapper>
    <product-page-menu slot="header"></product-page-menu>
    <div slot="slider" class="slider">
      <div class="prodName max-width">
        <span>Кольцо золотое</span>
        <div class="hitClass">
          <span>Хит</span>
        </div>
      </div>
      <slide-wrapper class="sliderWrapper">
        <slide><img src="/static/example/demo1.jpg"/></slide>
        <slide><img src="/static/example/demo2.jpg"/></slide>
      </slide-wrapper>
    </div>
    <div class="prodPrice max-width">
      <span>до 1000000 р.</span>
    </div>
    <shop-button @click.native="onReserveClicked" caption="Оформить резерв" class="reservBtn max-width" ></shop-button>
    <div class="prodQty max-width">
      <span>В наличии в магазинах 10 </span>
    </div>
    <hr class="max-width hr" color="gray" size="1px"/>
    <div class="prodDescription max-width">
      ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam
    </div>
    <hr class="max-width hr" color="gray" size="1px"/>
    <div class="btnArea max-width">
      <button-small @click.native="onMarkedClicked" caption="Может понравиться" class="markedBtn" ></button-small>
      <button-small @click.native="onSeenClicked" caption="Просмотренные" class="seenBtn" ></button-small>
    </div>
    <div class="productGridWrapper">
      <product-card-banner v-for="item in pageData.bannerData" :key="item.id" :bannerData="item" @click.native="onProductClicked(item)" class="cell"></product-card-banner>
    </div>
  </content-wrapper>
</template>

<script>
  import { SlideWrapper, Slide } from '~/components/slide'
  import ProductHeader from 'appComponents/components/headers/ProductHeader.vue'
  import ContentWrapper from 'appComponents/components/wrappers/ContentWrapper.vue'
  import Button from 'appComponents/components/buttons/Button.vue'
  import ButtonSmall from 'appComponents/components/buttons/ButtonSmall.vue'
  import ProductCardBanner from 'appComponents/components/banners/ProductCardBanner.vue'
  export default {
    components: {
      ProductHeader,
      ContentWrapper,
      'shop-button': Button,
      ButtonSmall,
      ProductCardBanner,
      SlideWrapper,
      Slide
    },
    data () {
      return {
        pageData: {
          bannerImage: '/static/logo.png',
          pageInfo: {
            num: '1',
            total: '7',
            category: 'Часы наручные'
          },
          bannerData: [
            {
              img: '/static/logo.png',
              price: 1000,
              isHit: true,
              id: 0
            },
            {
              img: '/static/logo.png',
              price: 2000,
              isHit: false,
              id: 1
            },
            {
              img: '/static/logo.png',
              price: 3000,
              isHit: true,
              id: 2
            },
            {
              img: '/static/logo.png',
              price: 4000,
              isHit: false,
              id: 3
            },
            {
              img: '/static/logo.png',
              price: 5000,
              isHit: false,
              id: 4
            }
          ]
        }
      }
    },
    methods: {
      onReserveClicked () {
        console.log('clicked')
        this.$router.push(this.$route.path + '/reserve/')
      },
      onMarkedClicked () {
        console.log('clicked')
      },
      onSeenClicked () {
        console.log('clicked')
      },
      onProductClicked (item) {
        console.log(item.id)
      }
    }
  }
</script>

<style lang="less" scoped>

  .slider
  {
    padding-top: 50px;
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
    line-height: 24px;
  }

  .hitClass
  {
    width: 48px;
    height: 22px;
    position: absolute;
    text-align: center;
    top: 0;
    right: 0;
    background-color: antiquewhite;
  }

  .hitClass > span
  {
    line-height: 22px;
    font-size: 12px;
  }

  img
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

  .reservBtn
  {
    height: 39px;
    width: 80%;
    text-align: center;
    margin: 5px auto;
    background-color: #fff0e9;
    border: 1px solid #fff0e9;
    cursor: pointer;
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
    cursor: pointer;
  }

  .seenBtn
  {
    height: 100%;
    width: 50%;
    text-align: center;
    display: inline-block;
    float: left;
    cursor: pointer;
  }

  .productGridWrapper
  {
    width: 80%;
    max-width: 500px;
    margin: auto;
  }

  .cell
  {
    display: inline-block;
    float: left;
  }
</style>
