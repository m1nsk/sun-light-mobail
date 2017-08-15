<template>
  <content-wrapper>
    <product-page-menu slot="header"></product-page-menu>
    <div slot="slider">
      <div class="prodName max-width">
        <span>Кольцо золотое</span>
        <div class="hitClass">
          <span>Хит</span>
        </div>
      </div>
      <slide-wrapper class="slider">
        <slide><img src="/static/example/demo1.jpg"/></slide>
        <slide><img src="/static/example/demo2.jpg"/></slide>
      </slide-wrapper>
    </div>
    <div class="prodPrice max-width">
      <span>до 1000000 р.</span>
    </div>
    <router-link tag="div" to="reserve" class="reservBtn max-width" :class="{reserveActive: reserveBtnActive}" @mouseover.native="reserveMouseDown" @mouseleave.native="reserveMouseUp">
      <span>Оформить резерв</span>
    </router-link>
    <div class="prodQty max-width">
      <span>В наличии в магазинах 10 </span>
    </div>
    <hr class="max-width hr" color="gray" size="1px"/>
    <div class="prodDescription max-width">
      ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam
    </div>
    <hr class="max-width hr" color="gray" size="1px"/>
  </content-wrapper>
</template>

<script>
  import { List, ListItem } from '~/components/list'
  import { SlideWrapper, Slide } from '~/components/slide'
  import scroll from '~/components/scroll'
  import ProductPageMenu from 'appComponents/menu/ProductMenu.vue'
  import ContentWrapper from 'appComponents/menu/helpers/ContentWrapper.vue'
  import Content from '~/components/content'
  export default {
    components: {
      List,
      ListItem,
      scroll,
      ProductPageMenu,
      ContentWrapper,
      SlideWrapper,
      Slide,
      'page-content': Content
    },
    data () {
      return {
        reserveBtnActive: false
      }
    },
    methods: {
      reserveMouseUp () {
        this.reserveBtnActive = false
      },
      reserveMouseDown () {
        this.reserveBtnActive = true
      }
    }
  }
</script>

<style lang="less" scoped>

  .hr {
    width: 80%;
    text-align: center;
  }

  .slider
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

  .reserveActive
  {
    border: 1px solid #403C39;
  }

  .reservBtn > span
  {
    font-size: 15px;
    line-height: 39px;
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
</style>
