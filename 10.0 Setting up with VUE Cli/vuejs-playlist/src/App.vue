<template>
  <div id="app">
    <app-header />
    <h1>Hello {{name}}</h1>
    <app-main />
    <app-footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
export default {
  name: "App",
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "app-main": Main,
  },
  data: function () {
    return {
      name: "Monica Belluci",
    };
  },
};
</script>

<style  >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  color: red;
}
</style>


