<template>
  <div id="app">
    <keep-alive>
    <component v-bind:is="component"></component>
    </keep-alive>
    <!-- <component-one />
    <component-two /> -->
    <button @click="component = 'component-one'">Revive Component One</button>
    <button @click="component = 'component-two'">Revive Component Two</button>
  </div>
</template>

<script>
import ComponentOne from "./components/ComponentOne";
import ComponentTwo from "./components/ComponentTwo";

export default {
  name: "App",
  components: {
    "component-one": ComponentOne,
    "component-two": ComponentTwo,
  },
  data: function () {
    return {
      component: "component-two",
    };
  },
};
</script>

<style  >
button {
  margin-top: 10px;
  margin-left: 10px;
}
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


