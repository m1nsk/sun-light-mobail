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
      onInfinite (done) {
        this.onReload = true
      }
    }
  }
</script>
