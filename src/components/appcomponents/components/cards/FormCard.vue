<template>
  <p><input :placeholder="placeholder" :value="value" @input="updateValue($event.target.value)"/></p>
</template>

<script>
  export default {
    components: {
    },
    props: ['placeholder', 'value'],
    data () {
      return {
        input: ''
      }
    },
    methods: {
      updateValue (value) {
        this.$emit('input', value)
      }
    }
  }
</script>

<style lang="less" scoped>

  input
  {
    width:100%;
    box-sizing:border-box;
    background:none;
    outline:none;
    resize:none;
    border:0;
    transition:all .3s;
    border-bottom:2px solid #bebed2
  }

  input:focus
  {
    border-bottom:2px solid #78788c
  }

  p:before
  {
    content:attr(type);
    display:block;
    margin:12px 0 0;
    font-size:14px;
    color:#5a5a5a
  }

</style>
