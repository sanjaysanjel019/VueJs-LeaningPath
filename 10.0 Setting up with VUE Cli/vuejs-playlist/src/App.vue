<template>
  <div id="app">
    <app-header
      v-bind:titleHeader="title"
      v-on:changeTitle="updateTitle($event)"
    />
    <h1>Hello Mister</h1>

    <app-footer v-bind:title="title" />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    "app-header": Header,
    "app-footer": Footer,
  },
  data: function () {
    return {
      title: "Independence day",
    };
  },
  methods: {
    updateTitle: function (updatedTitle) {
      console.log("Event emitted");
      this.title = updatedTitle;
    },
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


