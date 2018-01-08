<template>
  <div>
    <carousel></carousel>
    <form-test></form-test>
  </div>
</template>

<script>

import Carousel from './Carousel.vue'
import FormTest from './FormTest.vue'

export default {
  name: 'home',
  components: {
    'carousel': Carousel,
    'form-test': FormTest
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
