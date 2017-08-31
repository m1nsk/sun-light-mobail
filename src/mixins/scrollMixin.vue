<script>
  export default {
    data () {
      return {
        flagLoaded: false,
        reloadStatus: false,
        onReload: false
      }
    },
    methods: {
      onFlagLoaded () {
        this.flagLoaded = true
      },
      onFilterExclude (item) {
        console.log(item.title)
      },
      onInfinite (done) {
        this.onReload = true
      }
    }
  }
</script>
