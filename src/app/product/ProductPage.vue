<template>
  <div class="page">
    <product-page-menu></product-page-menu>
    <page-content>
      <scroll :enableInfinite="false" :enableRefresh="true" class="scroll">
        <div class="contentWrapper">
          <div class="prodName">
            <span>Кольцо золотое</span>
            <div class="hitClass">
              <span>Хит</span>
            </div>
          </div>
          <slide-wrapper class="slider">
            <slide><img src="/static/example/demo1.jpg"/></slide>
            <slide><img src="/static/example/demo2.jpg"/></slide>
          </slide-wrapper>
          <div class="prodPrice">
            <span>до 1000000 р.</span>
          </div>
          <router-link tag="div" to="reserve" class="reservBtn" :class="{reserveActive: reserveBtnActive}" @mouseover.native="reserveMouseDown" @mouseleave.native="reserveMouseUp">
            <span>Оформить резерв</span>
          </router-link>
          <div class="prodQty">
            <span>В наличии в магазинах 10 </span>
          </div>
          <hr align="center" width="80%" color="gray" size="1px"/>
          <div class="prodDescription">
            ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam
          </div>
          <hr align="center" width="80%" color="gray" size="1px"/>
        </div>
      </scroll>
    </page-content>
  </div>
</template>

<script>
  import { List, ListItem } from '~/components/list'
  import { SlideWrapper, Slide } from '~/components/slide'
  import scroll from '~/components/scroll'
  import ProductPageMenu from 'appComponents/menu/ProductPageMenu.vue'
  import Content from '~/components/content'
  export default {
    components: {
      List,
      ListItem,
      scroll,
      ProductPageMenu,
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
  .slider
  {
    width: 230px;
  }

  .scroll
  {
    height: 100%;
    width: 100%;
  }

  .prodName
  {
    height: 24px;
    text-align: center;
    width: 100%;
    position: relative;
  }

  .prodName > span
  {
    font-size: 12px;
  }

  .prodPrice
  {
    height: 24px;
    text-align: center;
    width: 100%;
    margin: 5px 0;
  }

  .prodQty
  {
    height: 24px;
    text-align: center;
    width: 100%;
    margin: 5px 0;
  }

  .prodQty > span
  {
    font-size: 12px;
    line-height: 24px;
  }

  .reservBtn
  {
    height: 39px;
    max-width: 80%;
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

  .contentWrapper
  {
    margin: auto;
    width: 100%;
    margin-top: 25px;
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
</style>
