<script>
  import { clone } from '~/helpers/cloneObject'

  export default {
    data () {
      return {
        profile: {
          fio: '',
          phone: '+7',
          mail: ''
        },
      }
    },
    created: function () {
      console.log('mounted')
      let profile = clone(this.$store.getters.getProfile) || {};
      for (let key of Object.keys(this.profile)) {
        this.profile[key] = profile[key]
      }
      this.validate()
    },
    methods: {
      validate() {
        return this.$validator.validateAll().then((result) => {
          return result
        });
      },
      onPhoneInput () {
        if (this.profile.phone.slice(0,2) != '+7') {
          this.profile.phone = '+7' + this.profile.phone.slice(1)
        }
        this.validate()
      }
    }
  }
</script>
