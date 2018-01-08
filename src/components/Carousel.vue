<template>
  <div>
    <agile :arrows="false" :dots="false" :infinite="true" :autoplay="true">
      <div class="slide slide--1" v-for="item in items">
        <h3>
          {{item.text}}
        </h3>
        <img v-lazy="item.img" :alt="item.text">
      </div>
    </agile>
    <p>hola</p>
  </div>
</template>

<script>
export default {
  name: 'carousel',
  data () {
    return {
      items: [
        {
          'text': 'slide 1',
          'img': 'https://unsplash.com/photos/d3bYmnZ0ank/download'
        },
        {
          'text': 'slide 2',
          'img': 'https://unsplash.com/photos/YSfTcJZR-ws/download'
        },
        {
          'text': 'slide 3',
          'img': 'https://unsplash.com/photos/9HI8UJMSdZA/download'
        }
      ]
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
  font-size: 32px;
  font-weight: 300;
  left: 50%;
  margin: 0;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
