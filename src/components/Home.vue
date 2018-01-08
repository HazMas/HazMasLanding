<template>
  <div>
    <carousel></carousel>
    <form-test></form-test>
    <footer-info></footer-info>
  </div>
</template>

<script>

import Carousel from './Carousel.vue'
import FormTest from './FormTest.vue'
import FooterInfo from './FooterInfo.vue'

export default {
  name: 'home',
  components: {
    'carousel': Carousel,
    'form-test': FormTest,
    'footer-info': FooterInfo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
