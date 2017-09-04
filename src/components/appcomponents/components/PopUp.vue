<template>
  <div class="modal-overlay flex-center" :class="{ active: isActive}" @click="closePopUp">
    <div class="modal flex-center" :class="{ active: isActive}" :style="{'width': width + '%', 'height': height + '%', 'max-height': maxHeight + '%', 'max-width': maxWidth + '%'}" @click.stop>
      <div class="modal-content">
        <slot name="header"></slot>
        <slot name="content"></slot>
        <slot name="footer"></slot>
      </div><!-- content -->
    </div><!-- modal -->
  </div><!-- overlay -->
</template>

<script>
  export default {
    props: {
      isActive: {
        type: Boolean,
        default: false
      },
      width: {
        default: 80
      },
      height: {
        default: 40
      },
      maxWidth: {
        default: 500
      },
      maxHeight: {
        default: 200
      }
    },
    data () {
      return {
      }
    },
    methods: {
      closePopUp () {
        this.$emit('close')
      }
    }
  }
</script>

<style lang="scss" scoped>
  $button-bg: #0D52E9;
  $speed: 0.6s;
  $delay: ($speed * .5);
  $easing: cubic-bezier(.55,0,.1,1);

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
    background-color: rgba(#000, 0.6);
    opacity: 0;
    visibility: hidden;
    backface-visibility: hidden;
    transition: opacity $speed $easing, visibility $speed $easing;

    &.active {
      opacity: 1;
      visibility: visible;
    }
  }

  .modal {
    position: relative;
    margin: 0 auto;
    background-color: #fff;
    padding: 1rem;
    border-radius: 3px;
    opacity: 0;
    overflow-y: auto;
    visibility: hidden;
    box-shadow: 0 2px 10px rgba(#000, 0.1);
    backface-visibility: hidden;
    transform: scale(1.2);
    transition: all $speed $easing;

    .modal-content {
      opacity: 0;
      backface-visibility: hidden;
      transition: opacity $speed $easing;
      transition-delay: $delay;
    } // content

    &.active {
      visibility: visible;
      opacity: 1;
      transform: scale(1);

      .modal-content {
        opacity: 1;
      }

      .close-modal {
        transform: translateY(10px);
        opacity: 1;
      }
    }
  }
</style>
