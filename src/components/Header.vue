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
          'author': 'Lic. Iván Moreno.',
          'text': 'Cuando te hayas entrenado para participar, estarás listo para... aprender'
        },
        {
          'author': 'Frank Marshall.',
          'text': 'Un mal plan, es mejor que no tener ningún plan'
        },
        {
          'author': 'Anónimo.',
          'text': 'Poco deporte es mejor que ningún deporte'
        },
        {
          'author': 'Florence Griffith.',
          'text': 'No se fracasa hasta que no se deja de intentar'
        },
        {
          'author': 'Pelé.',
          'text': 'Cuanto más difícil es la victoria, mayor es la felicidad de ganar.'
        },
        {
          'author': 'Michael Jordan.',
          'text': 'Hay que esperar cosas de uno mismo antes de poder hacerlas.'
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
