<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-6">
        <h1 class="title montserrat c-primary">
          Haz más
        </h1>
        <div class="flex-in-line">
          <img src="../assets/icons/padel.png" alt="padel icon">
          <p class="title-2 playfair c-secondary">Pádel</p>
        </div>
        <p class="c-primary montserrat">“Haz más” Proyecto que nació tras ganar el primer Startup Weekend de Gijón. Empezó como una propuesta sencilla: </p>
        <p class="c-primary playfair">“Encuentra a gente en tu ciudad para practicar deporte a través de una app móvil”.</p>
      </div>
      <div class="col-xs-12 col-md-6 text-align-c">
        <img class="margin-0-auto" src="../assets/icons/vista-app-1.png" alt="vista de la app">
      </div>
     </div>
     <div class="row">
      <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
          <div class="icon-text-box">
            <img src="../assets/icons/padel.png" alt="padel icon">
            <p class="c-primary">Pádel</p>
          </div>
      </div>
      <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
          <div class="icon-text-box">
            <img src="../assets/icons/futbol.png" alt="futbol icon">
            <p class="c-primary">Futbol</p>
          </div>
      </div>
      <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
          <div class="icon-text-box">
            <img src="../assets/icons/baloncesto.png" alt="baloncesto icon">
            <p class="c-primary">Baloncesto</p>
          </div>
      </div>
      <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
          <div class="icon-text-box">
            <img src="../assets/icons/caminar.png" alt="caminar icon">
            <p class="c-primary">Caminar</p>
          </div>
      </div>
      <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
          <div class="icon-text-box">
            <img src="../assets/icons/surf.png" alt="surf icon">
            <p class="c-primary">Surf</p>
          </div>
      </div>
      <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
          <div class="icon-text-box">
            <img src="../assets/icons/tenis.png" alt="tenis icon">
            <p class="c-primary">Tenis</p>
          </div>
      </div>
      <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
          <div class="icon-text-box">
            <img src="../assets/icons/bolos.png" alt="bolos icon">
            <p class="c-primary">Bolos</p>
          </div>
      </div>
      <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
          <div class="icon-text-box">
            <img src="../assets/icons/correr.png" alt="correr icon">
            <p class="c-primary">Correr</p>
          </div>
      </div>
      <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
          <div class="icon-text-box">
            <img src="../assets/icons/billar.png" alt="billar icon">
            <p class="c-primary">Billar</p>
          </div>
      </div>
      <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
          <div class="icon-text-box">
            <img src="../assets/icons/skating.png" alt="skating icon">
            <p class="c-primary">Skating</p>
          </div>
      </div>
      <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
          <div class="icon-text-box">
            <img src="../assets/icons/patinaje.png" alt="patinaje icon">
            <p class="c-primary">Patinaje</p>
          </div>
      </div>
      <div class="col-xs-6 col-sm-4 col-md-3 col-lg-2">
          <div class="icon-text-box">
            <img src="../assets/icons/voleibol.png" alt="voleibol icon">
            <p class="c-primary">Voleibol</p>
          </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AppDescription'
}
</script>
<style lang="scss">
$grid-breakpoints: (
    xs: 0,
    sm: 576px,
    md: 768px,
    lg: 992px,
    xl: 1200px
  ) !default;

  h1.title {
    font-size: 50px;
    font-weight: 900;
    text-transform: uppercase;
    display: block;
    width: 70%;
    left: 50%;
    margin: 0; 
    white-space: nowrap;
    @media (min-width: map-get($grid-breakpoints, sm)) {
        font-size: 70px;
     }
    @media (min-width: map-get($grid-breakpoints, md)) {
      font-size: 90px;
    }
  }
  .title-2{
    font-size: 30px;
    font-weight: 900;
    font-style: italic;
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
    display: flex;
    align-items: center;
  }

  .icon-text-box {
    display: flex; 
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 200px;
    &:hover {
      background: #FFFFFF;
      box-shadow: 0 2px 20px 0 rgba(0,0,0,0.10);
      border-radius: 10px;
    }
  }

  .montserrat {
    font-family: 'Montserrat', sans-serif;
  }

  .playfair {
    font-family: 'Playfair', serif;
  }

  .c-secondary {
    color: #F93762;
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
</style>
