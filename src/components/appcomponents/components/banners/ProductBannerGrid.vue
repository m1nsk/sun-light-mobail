<template>
  <div class="productGridWrapper">
    <product-card-banner v-for="item in bannerList" :key="item.id" :bannerData="item" @click.native="onProductClicked(item)" class="item"></product-card-banner>
  </div>
</template>

<script>
  import ProductCardBanner from 'appComponents/components/banners/ProductCardBanner.vue'
  import { mapGetters } from 'vuex'
  export default {
    props: ['bannerList'],
    components: {
      ProductCardBanner
    },
    data () {
      return {
      }
    },
    methods: {
      onProductClicked (item) {
        console.log(item.id)
        this.$router.push(this.$route.path + '/' + item.id)
      }
    },
    computed: {
      ...mapGetters([
        'allProducts'
      ]),
      productList () {
        return this.allProducts
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
    display: flex;
    flex-wrap: wrap;
  }

  .item
  {
    display: inline-block;
  }
</style>
