<template>
  <footer class="container">
    <ul class="row padding-0">
      <li class="col-xs-12 col-sm-4 text-align-c playfair italic c-secondary title-3">
        <span>
        Financiados por:
        </span>
        <a href="http://impulsa.gijon.es">
          <img v-lazy="require('../assets/logos/logo_gijon_impulsa.png')">
        </a>
      </li>
      <li class="col-xs-12 col-sm-4 text-align-c playfair italic c-secondary title-3">
        <span>
          Ganadores de:
        </span>
        <a href="#">
          <img v-lazy="require('../assets/logos/logo_startup_weekend.png')">
        </a>
      </li>
      <li class="col-xs-12 col-sm-4 text-align-c playfair italic c-secondary title-3">
        <span>
          Participantes en:
        </span>
        <a href="#">
          <img v-lazy="require('../assets/logos/logo_explorer.png')">
        </a>
      </li>
      <div class="col-xs-12 width-0100 text-align-c">
          <a v-on:click="gaSocialTracking('facebook')" target="_blank" href="https://www.facebook.com/hazmasapp">
            <img class="icon-xs margin-30" v-lazy="require('../assets/icons/facebook.svg')" alt="facebook">
          </a>
          <a v-on:click="gaSocialTracking('instagram')" target="_blank" href="https://www.instagram.com/hazmasapp">
            <img class="icon-xs margin-30" v-lazy="require('../assets/icons/instagram.svg')" alt="instagram">
          </a>
          <a v-on:click="gaSocialTracking('twitter')" target="_blank" href="https://twitter.com/HazMasapp">
            <img class="icon-xs margin-30" v-lazy="require('../assets/icons/twitter.svg')" alt="twitter">
          </a>
      </div>
    </ul>
    <div class="container-fluid">
      <div class="row">
        <div class="col-xs-12 text-align-c">
          <p class="c-primary">
            <a href="https://www.behance.net/alvaroherrerogarcia">Diseñado</a>  y <a href="https://twitter.com/santima10">programado</a> con <span><img class="icon-xs" src="../assets/icons/heart.png"></span> desde Asturias</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'footer-info',
  method: {
    gaSocialTracking: function (socialNetwork) {
      this.$ga.event('Redes sociales', 'click', socialNetwork, 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
$grid-breakpoints: (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px) !default;
footer{
  padding: 10px;
}
footer img{
  width: auto;
  max-height: 40px;
  vertical-align: middle
}
li{
  list-style: none;
}
.text-align-c {
  text-align: center;
}
.playfair {
  font-family: "Playfair", serif;
}

.italic {
  font-style: italic;
}

.c-secondary {
  color: #f93762;
}

.title-3 {
  font-size: 18px;
  @media (min-width: map-get($grid-breakpoints, sm)) {
    font-size: 22px;
  }
  @media (min-width: map-get($grid-breakpoints, md)) {
    font-size: 28px;
  }
}
.padding-0{
  padding:0;
}
.margin-30{
  margin: 30px;
}
.icon-xs {
  width:20px;
  max-height: 20px;
}
</style>
