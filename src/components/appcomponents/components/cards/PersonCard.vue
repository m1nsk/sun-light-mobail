<template>
  <div class="person">
    <div class="person__info">
      <div class="person__helper">
        <div class="person__fio"><span>{{ fio }}</span></div>
        <div class="person__phone"><span>{{ personData.phone }}</span></div>
        <div class="person__bonuses"><span>{{personData.bonuses}} бонусов</span></div>
      </div>
    </div>
    <div class="person__banner-wrapper">
      <img src="/static/logo.png" class="person__banner">
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
  .person__info
  {
    height: 100%;
    width: 70%;
    display: inline-block;
    float: left;
  }

  .person
  {
    width: 100%;
    height: 80px;
    position: relative;
    font-size: 16px;
    line-height: 18px;
    padding: 0 10px;
  }

  .person__banner-wrapper
  {
    width: 30%;
    height: 100%;
    display: table;
    vertical-align: middle;
    text-align: center;
  }

  .person__banner
  {
    display: table-cell;
    width: 48px;
    height: 48px;
  }


  .person__fio
  {
    height: 22px;
    display: table;
  }

  .person__fio > span
  {
    font-size: 14px;
    font-weight: bold;
    display: table-cell;
    vertical-align: top;
  }

  .person__phone
  {
    height: 22px;
    display: table;
  }

  .person__phone > span
  {
    font-size: 12px;
    display: table-cell;
    vertical-align: middle;
  }

  .person__bonuses
  {
    height: 22px;
    display: table;
  }

  .person__bonuses > span
  {
    font-size: 12px;
    display: table-cell;
    vertical-align: middle;
  }
</style>
