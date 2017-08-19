<template>
  <div class="shopWrapper">
    <div class="shopInfo">
      <div class="helper">
        <div class="fio"><span>{{ fio }}</span></div>
        <div class="phone"><span>{{ personData.phone }}</span></div>
        <div class="bonuses"><span>{{personData.bonuses}} бонусов</span></div>
      </div>
    </div>
    <div class="bannerMini">
      <img src="/static/logo.png" class="banner">
    </div>
  </div>
</template>

<script>
  export default {
    components: {
    },
    props: ['personData'],
    data () {
      return {
      }
    },
    computed: {
      fio () {
        return [this.personData.name, this.personData.surname, this.personData.patronymic].join(' ')
      }
    }
  }
</script>

<style lang="less" scoped>
  .shopInfo
  {
    height: 100%;
    width: 70%;
    display: inline-block;
    float: left;
  }

  .shopWrapper
  {
    width: 100%;
    height: 80px;
    position: relative;
    font-size: 16px;
    line-height: 18px;
    padding: 0 10px;
  }

  .bannerMini
  {
    width: 30%;
    height: 100%;
    display: table;
    vertical-align: middle;
    text-align: center;
  }

  .banner
  {
    display: table-cell;
    width: 100%;
    height: auto;
  }


  .fio
  {
    height: 22px;
    display: table;
  }

  .fio > span
  {
    font-size: 14px;
    font-weight: bold;
    display: table-cell;
    vertical-align: top;
  }

  .phone
  {
    height: 22px;
    display: table;
  }

  .phone > span
  {
    font-size: 12px;
    display: table-cell;
    vertical-align: middle;
  }

  .bonuses
  {
    height: 22px;
    display: table;
  }

  .bonuses > span
  {
    font-size: 12px;
    display: table-cell;
    vertical-align: middle;
  }
</style>
