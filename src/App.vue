<template>
  <div id="app">
    <h2>Mini Project Yazid Nurfadil</h2>
    <PecahanForm />
  </div>
</template>

<script>
import PecahanForm from "./components/PecahanForm.vue";

export default {
  name: "app",
  components: {
    PecahanForm
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
