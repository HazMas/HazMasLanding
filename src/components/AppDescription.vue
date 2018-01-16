<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-6">
        <h1 class="x-bold title montserrat c-primary white-space-nw">
          Haz más
        </h1>
        <agile :arrows="false" :autoplay="true" :dots="false" :autoplaySpeed="1500">
          <div class="flex-in-line" v-for="sport in sports" :key="sport.slug">
            <img class="icon-size-resp padding-r-16" v-bind:v-lazy="require('../assets/icons/' + sport.slug + '.png')" v-bind:alt="sport.text + ' icon'">
            <p class="title-2 italic x-bold playfair c-secondary capitalize text-capitalize">
              {{sport.text}}
            </p>
          </div>
        </agile>
        <p class="p-s-resp c-primary montserrat light">“Haz más” Proyecto que nació tras ganar el primer <span class="bold c-secondary">Startup Weekend de Gijón</span>. Empezó como una propuesta sencilla: </p>
        <p class="p-s-resp italic c-primary playfair">“Encuentra a gente en tu ciudad para practicar deporte a través de una app móvil”.</p>
        <div class="row">
          <div class="col-xs-6">
            <a v-on:click="gaNewsTracking('SWAsturias')" class="padding-16 display-ib" target="_blank" href="https://twitter.com/SWAsturias/status/924687764645470208">
              <img class="width-0100" v-lazy="require('../assets/logos/logo_startup_weekend.png')" alt="Twitter">
            </a>
          </div>
          <div class="col-xs-6">
            <a v-on:click="gaNewsTracking('rtpa')" class="padding-16 display-ib" target="_blank" href="http://www.rtpa.es/asturias:Convertir-una-idea-en-una-empresa-que-resuelva-las-necesidades-ciudadanas_111509302781.html">
              <img class="width-0100" v-lazy="require('../assets/logos/logo_rtpa.png')" alt="RTPA">
            </a>
          </div>
          <div class="col-xs-6">
            <a v-on:click="gaNewsTracking('lne')" class="padding-16 display-ib" target="_blank" href="http://www.lne.es/economia/2017/11/05/aplicaciones-ponerse-correr/2188255.html">
              <img class="width-0100" v-lazy="require('../assets/logos/logo_lanuevaespana.png')" alt="La nueva españa">
            </a>
          </div>
          <div class="col-xs-6">
            <a v-on:click="gaNewsTracking('elcomercio')" class="padding-16 display-ib" target="_blank" href="http://www.elcomercio.es/gijon/proyecto-deporte-compania-20171031002039-ntvo.html">
              <img class="width-0100" v-lazy="require('../assets/logos/logo_elcomercio.svg')" alt="El comercio">
            </a>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-md-6 text-align-c">
        <img class="margin-0-auto" v-lazy="require('../assets/vista-app-haz-mas.png')" alt="vista de la app">
      </div>
     </div>
  </div>
</template>
<script>
export default {
  name: 'AppDescription',
  props: ['sports'],
  methods: {
    gaNewsTracking: function (media) {
      this.$ga.event('Enlaces', 'click', media, 1)
    }
  }
}
</script>
<style lang="scss">
$grid-breakpoints: (xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px) !default;

.title {
  font-size: 50px;
  text-transform: uppercase;
  display: block;
  width: 70%;
  left: 50%;
  margin: 0;
  line-height: 50pt;
  @media (min-width: map-get($grid-breakpoints, sm)) {
    font-size: 70px;
    line-height: 70pt;
  }
  @media (min-width: map-get($grid-breakpoints, md)) {
    font-size: 90px;
    line-height: 90pt;
  }
}
.title-2 {
  font-size: 30px;
  display: block;
  width: 70%;
  left: 50%;
  margin: 0;
  @media (min-width: map-get($grid-breakpoints, sm)) {
    font-size: 45px;
  }
  @media (min-width: map-get($grid-breakpoints, md)) {
    font-size: 60px;
  }
}
.flex-in-line {
  display: flex !important;
  align-items: center;
}

.icon-text-box {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 200px;
  &:hover {
    background: #ffffff;
    box-shadow: 0 2px 20px 0 rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
}

.x-bold {
  font-weight: 900;
}

.bold {
  font-weight: 700;
}
.light {
  font-weight: 300;
}

.montserrat {
  font-family: "Montserrat", sans-serif;
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

.c-primary {
  color: #392283;
}

.text-align-c {
  text-align: center;
}

.margin-0-auto {
  margin: 0 auto;
}

.icon-size-resp {
  width: 45px;
  height: auto;
  @media (min-width: map-get($grid-breakpoints, sm)) {
    width: 55px;
  }
  @media (min-width: map-get($grid-breakpoints, sm)) {
    width: 65px;
  }
}

.white-space-nw {
  white-space: nowrap;
}

.padding-t-30 {
  padding-top: 30px;
}
.padding-r-16 {
  padding-right: 16px;
}

.padding-16{
  padding: 16px;
}

.cursor-p {
  cursor: pointer;
}

.p-s-resp {
  font-size: 18px;
  @media (min-width: map-get($grid-breakpoints, sm)) {
    font-size: 28px;
  }
}

.display-ib {
  display: inline-block;
}

.width-0100 {
  width: 100%
}
</style>
