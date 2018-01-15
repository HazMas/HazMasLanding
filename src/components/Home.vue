<template>
  <div>
    <page-header></page-header>
    <app-description :sports="sports"></app-description>
    <tell-us-about :sports="sports"></tell-us-about>
    <footer-info></footer-info>
  </div>
</template>

<script>

import Header from './Header.vue'
import AppDescription from './AppDescription.vue'
import TellUsAbout from './TellUsAbout'
import FooterInfo from './FooterInfo.vue'

export default {
  name: 'home',
  data: function () {
    return {
      'sports': [
        {
          'slug': 'padel',
          'text': 'pádel'
        },
        {
          'slug': 'futbol',
          'text': 'fútbol'
        },
        {
          'slug': 'baloncesto',
          'text': 'baloncesto'
        },
        {
          'slug': 'caminar',
          'text': 'caminar'
        },
        {
          'slug': 'surf',
          'text': 'surf'
        },
        {
          'slug': 'tenis',
          'text': 'tenis'
        },
        {
          'slug': 'bolos',
          'text': 'bolos'
        },
        {
          'slug': 'correr',
          'text': 'correr'
        },
        {
          'slug': 'billar',
          'text': 'billar'
        },
        {
          'slug': 'skating',
          'text': 'skating'
        },
        {
          'slug': 'patinaje',
          'text': 'patinaje'
        },
        {
          'slug': 'voleibol',
          'text': 'voleibol'
        }
      ]
    }
  },
  components: {
    'page-header': Header,
    'app-description': AppDescription,
    'tell-us-about': TellUsAbout,
    'footer-info': FooterInfo
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
</style>
