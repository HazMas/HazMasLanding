<template>
  <footer>
    <ul>
      <li>
        <span>
          Financiados por:
        </span>
        <a href="http://impulsa.gijon.es">
          <img src="../assets/logo_gijon_impulsa.png">
        </a>
      </li>
      <li>
        <span>
          Ganadores:
        </span>
        <a href="http://www.elcomercio.es/gijon/proyecto-deporte-compania-20171031002039-ntvo.html">
          <img src="../assets/logo_startup_weekend.png">
        </a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'footer-info'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  display: inline;
  margin-left: 10px;
}
</style>
