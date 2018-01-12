<template>
  <div class="bg-header container height-100vh position-r">
    <div class="row height-100vh">
      <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 vertical-center position-r">
        <p class="sentence">
          {{sentence.text}}
        </p>
        <p class="author">
          — {{sentence.author}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'web-header',
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

.height-100vh {
  height: 100vh;
}

.vertical-center {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.position-r {
  position: relative;
}
 p.author {
  font-size: 18px;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;
  text-align: right;
  margin: 0;
  color: black;
  @media (min-width: map-get($grid-breakpoints, sm)) {
    font-size: 20px;
   }
}

 p.sentence {
  font-size: 16px;
  font-weight: 700;
  padding-bottom: 30px;
  font-family: 'Playfair Display', serif;
  font-style: italic;
  text-align: center;
  margin: 0;
  color: black;
  @media (min-width: map-get($grid-breakpoints, sm)) {
    font-size: 18px;
   }
}
</style>
