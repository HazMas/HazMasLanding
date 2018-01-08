<template>
  <div class="footer-form">
    <h1>
      ¡Cuentanos algo sobre ti!
    </h1>
    <div class="padding-form">
      <label for="name">
        Nombre:
      </label>
      <input id="name">
    </div>
    <div class="padding-form">
      <label for="age">
        Edad
      </label>
      <input id="age" type="number">
    </div>
  </div>
</template>

<script>
export default {
  name: 'form-test'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.footer-form{
  padding: 10px;
  text-align: center;
}
.padding-form{
  padding: 10px;
}
</style>
