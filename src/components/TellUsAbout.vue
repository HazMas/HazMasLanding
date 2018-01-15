<template>
<div class="container">
  <section class="row">
      <header class=" padding-t-30 col-xs-12">    
          <p class="x-bold title montserrat c-primary">
            Háblanos de ti
          </p>
          <p class="title-2 italic x-bold playfair c-secondary">
            ¿Qué deportes te gustaría practicar?
          </p>
      </header>
    <div class="row padding-t-30">
      <tell-us-about-button v-for="sport in sports" :sport="sport" :key="sport.slug" :onClick="gaSportTracking"></tell-us-about-button>
    </div>
  </section>
  </div>
</template>

<script>
import TellUsAboutButton from './TellUsAboutButton'

export default {
  name: 'TellUsAbout',
  props: ['sports'],
  components: {
    'tell-us-about-button': TellUsAboutButton
  },
  methods: {
    gaSportTracking: function (sport) {
      this.$ga.event('Deportes', 'click', sport, 1)
    }
  }
}
</script>

<style lang="scss">

</style>


