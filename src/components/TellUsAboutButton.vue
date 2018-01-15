<template>
  <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
    <div v-on:click="onClick(sport.slug)" class="icon-text-box cursor-p">
      <img v-lazy="require('../assets/icons/' + sport.slug + '.png')" v-bind:alt="sport.slug +' icon'">
      <p class="c-primary text-capitalize">
        {{sport.text}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TellUsAboutButton',
  props: ['sport', 'onClick']
}
</script>

<style lang="scss">
.text-capitalize{
  text-transform: capitalize;
}
</style>


