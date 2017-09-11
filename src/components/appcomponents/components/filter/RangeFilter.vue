<template>
  <div>
    <form-card placeholder="От" v-model.lazy="min"></form-card>
    <form-card placeholder="До" v-model.lazy="max"></form-card>
  </div>
</template>

<script>
  import FormCard from 'appComponents/components/cards/FormCard.vue'
  export default {
    components: {
      FormCard
    },
    props: ['from', 'to'],
    data () {
      return {
          min: this.from,
          max: this.to
      }
    },
    watch: {
      min () {
        console.log(this.min)
        this.$emit('min', this.min)
      },
      max () {
        console.log(this.max)
        this.$emit('max', this.max)
      }
    }
  }

</script>

<style lang="less" scoped>

</style>
