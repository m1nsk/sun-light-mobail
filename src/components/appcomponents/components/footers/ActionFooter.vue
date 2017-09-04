<template>
  <div class="btnArea">
    <button-small @click.native="onBtnClicked('cancel')" caption="Отмена" fontSize="14" class="acceptBtn" ></button-small>
    <button-small @click.native="onBtnClicked('accept')" caption="Продолжить" fontSize="14" class="cancelBtn" ></button-small>
  </div>
</template>

<script>
  import ButtonSmall from 'appComponents/components/buttons/ButtonSmall.vue'
  export default {
    components: {
      ButtonSmall
    },
    methods: {
      onBtnClicked (action) {
        this.$emit('action', {
          action: action
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .btnArea
  {
    width: 80%;
    margin: 0 auto;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .acceptBtn, .cancelBtn
  {
    height: 80%;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
  }
</style>
