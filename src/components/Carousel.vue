<template>
  <div>
    <agile :arrows="false" :dots="false" :infinite="true" :autoplay="true">
      <div class="slide slide--1" v-for="item in items" v-lazy="item.img" :alt="item.text">
        <p>
          <h2>
            {{sentence.text}}
          </h2>
          <h3>
            por {{sentence.author}}
          </h3>
        </p>
      </div>
    </agile>

    <!-- {{sentece.text}}
    {{sentece.author}} -->
  </div>
</template>

<script>
export default {
  name: 'carousel',
  data () {
    return {
      items: [
        {
          'img': 'https://unsplash.com/photos/d3bYmnZ0ank/download'
        },
        {
          'img': 'https://unsplash.com/photos/YSfTcJZR-ws/download'
        },
        {
          'img': 'https://unsplash.com/photos/9HI8UJMSdZA/download'
        }
      ]
    }
  },
  computed: {
    sentence: function () {
      var sentences = [
        {
          'author': 'Lic. Iván Moreno (Docente)',
          'text': 'Cuando te hayas entrenado para participar, estarás listo para... aprender'
        },
        {
          'author': 'Frank Marshall, ex ajedrecista',
          'text': 'Un mal plan, es mejor que no tener ningún plan'
        },
        {
          'author': 'Anónimo',
          'text': 'Poco deporte es mejor que ningún deporte'
        },
        {
          'author': 'Florence Griffith, ex atleta estadounidense.',
          'text': 'No se fracasa hasta que no se deja de intentar'
        },
        {
          'author': 'Pelé',
          'text': 'Cuanto más difícil es la victoria, mayor es la felicidad de ganar.'
        },
        {
          'author': 'Michael Jordan',
          'text': 'Hay que esperar cosas de uno mismo antes de poder hacerlas.'
        }
      ]

      return sentences[Math.floor(Math.random() * sentences.length)]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.slide {
  color: #fff;
  height: 100vh;
  position: relative;
}

.slide--1 {
  background-color: #f1c40f;
}
.slide--2 {
  background-color: brown;
}
.slide--3 {
  background-color: red;
}
.slide--4 {
  background-color: blue;
}
.slide--5 {
  background-color: orange;
}
.slide--6 {
  background-color: green;
}

img{
  width: 100%;
}

.slide h3 {
  font-size: 22px;
  font-weight: 300;
  left: 50%;
  margin: 0;
  position: absolute;
  top: 60%;
  transform: translate(-50%, -50%);
  color: black;
}

.slide h2 {
  font-size: 32px;
  font-weight: 300;
  left: 50%;
  margin: 0;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  color: black;
}
</style>
