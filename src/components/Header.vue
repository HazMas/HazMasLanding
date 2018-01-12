<template>
  <div class="bg-header">
    <p class="sentence">
      {{sentence.text}}
    </p>
    <p class="author">
      — {{sentence.author}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'header',
  computed: {
    sentence: function () {
      var sentences = [
        {
          'author': 'Anónimo.',
          'text': 'Poco deporte es mejor que ningún deporte'
        },
        {
          'author': 'Florence Griffith.',
          'text': 'No se fracasa hasta que no se deja de intentar'
        },
        {
          'author': 'Proverbio inventado.',
          'text': 'Si no tienes motivación, siempre encontrarás una forma de no hacer nada'
        },
        {
          'author': 'Babe Ruth.',
          'text': 'Es difícil superar a una persona que nunca se rinde.'
        },
        {
          'author': 'Wayne Gretzk.',
          'text': 'Pierdes el 100% de las veces que no lo intentas.'
        }
      ]
      return sentences[Math.floor(Math.random() * sentences.length)]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

$grid-breakpoints: (
    xs: 0,
    sm: 576px,
    md: 768px,
    lg: 992px,
    xl: 1200px
  ) !default;
  
.bg-header {
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-image: url('../assets/bg-header.jpg');
  background-position: center center;
  
}



 p.author {
  font-size: 18px;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
  text-align: right;
  width: 70%;
  left: 50%;
  margin: 0;
  position: absolute;
  top: 55%;
  transform: translate(-50%, -50%);
  color: black;
  @media (min-width: map-get($grid-breakpoints, sm)) {
    font-size: 20px;
   }
}

 p.sentence {
  font-size: 16px;
  font-weight: 700;
  font-family: 'Playfair Display', serif;
  font-style: italic;
  text-align: center;
  left: 50%;
  margin: 0;
  position: absolute;
  top: 45%;
  transform: translate(-50%, -50%);
  color: black;
  @media (min-width: map-get($grid-breakpoints, sm)) {
    font-size: 18px;
   }
}
</style>
