<template>
  <label class="label-switch">
    <input type="checkbox" :checked="checked"
           @change="change"
    >
    <div class="checkbox"></div>
  </label>
</template>

<script>
  export default {
    props: {
      value: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        checked: this.value
      }
    },
    methods: {
      change: function() {
        this.checked = !this.checked;
        this.$emit('input', this.checked);
      }
    }
  }
</script>

<style lang="less" scoped>
  @import './switcher.less';
</style>
