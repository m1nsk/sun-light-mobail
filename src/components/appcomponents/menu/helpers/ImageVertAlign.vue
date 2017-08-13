<template>
  <div>
    <div class=frame>
      <span class="helper"></span>
      <img :src="bannerImage" class="banner"/>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['bannerImg'],
    data () {
      return {
        bannerImage: ''
      }
    },
    computed: {
      bannerImage() {
        return this.bannerImg
      }
    }
  }
</script>

<style lang="less">
  .img
  {
    vertical-align: middle;
    width: 48px;
    height: 22px;
  }

  .frame {
    height: 100%;      /* equals max image height */
    width: 48px;
    white-space: nowrap; /* this is required unless you put the helper span closely near the img */
    text-align: center;
  }

  .helper {
    display: inline-block;
    height: 100%;
    vertical-align: middle;
  }
</style>
