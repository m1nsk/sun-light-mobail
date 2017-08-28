<template>
  <list>
    <list-item>
      <div class="item-media"><img class="shop__banner" src="static/logo.png"></div>
      <div class="item-content">
        <div class="item-title-row">
          <div class="item-title">
              <div><b>{{shopData.title}}</b></div>
              <div>{{shopData.price}}</div>
          </div>
          <div class="item-after">
            <img src="/static/myIcons/right-arrow.svg" class="shop__icon">
          </div>
        </div>
      </div>
    </list-item>
  </list>
</template>

<script>
  import { List, ListItem } from '~/components/list'
  export default {
    components: {
      List,
      ListItem
    },
    data () {
      return {
        shopData: {
          title: 'Золотое колечко',
          price: '16 000-'
        }
      }
    }
  }
</script>

<style lang="less" scoped>

  .shop__banner
  {
    width: 64px;
    height: 64px;
  }

  .shop__icon
  {
    vertical-align: middle;
    width: 18px;
    height: 18px;
  }

</style>
