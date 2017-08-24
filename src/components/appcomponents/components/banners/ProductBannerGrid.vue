<template>
  <div class="productGridWrapper">
    <product-card-banner v-for="item in productsList" :key="item.id" :bannerData="item" @click.native="onProductClicked(item)" class="cell"></product-card-banner>
  </div>
</template>

<script>
  import ProductCardBanner from 'appComponents/components/banners/ProductCardBanner.vue'
  import { mapGetters } from 'vuex'
  export default {
    props: ['bannerImg'],
    components: {
      ProductCardBanner
    },
    data () {
      return {
        productsList: [
          {
            img: 'http://www.apicius.es/wp-content/uploads/2012/07/IMG-20120714-009211.jpg',
            price: 1100,
            isHit: true,
            id: 0
          },
          {
            img: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Blue_Tiger_Im_IMG_9450.jpg',
            price: 2000,
            isHit: false,
            id: 1
          },
          {
            img: 'http://www.apicius.es/wp-content/uploads/2012/07/IMG-20120714-009211.jpg',
            price: 3000,
            isHit: true,
            id: 2
          },
          {
            img: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Blue_Tiger_Im_IMG_9450.jpg',
            price: 4000,
            isHit: false,
            id: 3
          },
          {
            img: 'http://www.apicius.es/wp-content/uploads/2012/07/IMG-20120714-009211.jpg',
            price: 5000,
            isHit: false,
            id: 4
          },
          {
            img: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Blue_Tiger_Im_IMG_9450.jpg',
            price: 1000,
            isHit: true,
            id: 0
          },
          {
            img: 'http://www.apicius.es/wp-content/uploads/2012/07/IMG-20120714-009211.jpg',
            price: 2000,
            isHit: false,
            id: 1
          },
          {
            img: 'https://upload.wikimedia.org/wikipedia/commons/b/bf/Blue_Tiger_Im_IMG_9450.jpg',
            price: 3000,
            isHit: true,
            id: 2
          },
          {
            img: 'http://www.apicius.es/wp-content/uploads/2012/07/IMG-20120714-009211.jpg',
            price: 4000,
            isHit: false,
            id: 3
          },
          {
            img: 'http://www.apicius.es/wp-content/uploads/2012/07/IMG-20120714-009211.jpg',
            price: 5000,
            isHit: false,
            id: 4
          }
        ]
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
        // Mounts the "safelyStoredNumber" getter to the scope of your component.
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
  }

  .cell
  {
    display: inline-block;
    float: left;
  }
</style>
