<template>
    <page-footer>
      <footer-item v-bind:class="{ 'active': currentView === item.name }" @click.native="changeView(item.name)" v-for="item in menuItemData" :key="item.id">
        <label>{{ item.title }}</label>
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
        currentView: 'stock'
      }
    },
    props: ['menuItemData'],
    methods: {
      changeView (viewName) {
        this.currentView = viewName
        this.$emit('view', {
          view: viewName
        })
      }
    }
  }
</script>
