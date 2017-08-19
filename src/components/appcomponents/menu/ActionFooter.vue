<template>
  <page-footer>
    <footer-item @click.native="onActionClicked('left')">
      <label>{{ leftTitle }}</label>
    </footer-item>
    <footer-item @click.native="onActionClicked('right')">
      <label>{{ rightTitle }}</label>
    </footer-item>
  </page-footer>
</template>

<script>
  import { Footer, Item } from '~/components/footer'

  export default {
    components: {
      'page-footer': Footer,
      'footer-item': Item
    },
    data () {
      return {
      }
    },
    props: ['leftTitle', 'rightTitle'],
    methods: {
      onActionClicked (btnName) {
        console.log(btnName)
        // this.$emit('')
      }
    }
  }
</script>
