<template>
  <div>
    <page-header></page-header>
    <form-test></form-test>
    <footer-info></footer-info>
  </div>
</template>

<script>

import Header from './Header.vue'
import FormTest from './FormTest.vue'
import FooterInfo from './FooterInfo.vue'

export default {
  name: 'home',
  components: {
    'page-header': Header,
    'form-test': FormTest,
    'footer-info': FooterInfo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
