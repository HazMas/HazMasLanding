<template>
  <div>
    <carousel></carousel>
  </div>
</template>

<script>

import Carousel from './Carousel.vue'

export default {
  name: 'home',
  components: {
    'carousel': Carousel,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
