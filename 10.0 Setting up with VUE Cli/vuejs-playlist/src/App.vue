<template>
  <div id="app">
    <app-header
      v-bind:titleHeader="title"
      v-on:changeTitle="updateTitle($event)"
    />
    <h1>Hello Mister</h1>

    <app-footer v-bind:title="title" />
    <app-slot>
      <div slot="form-header">
        <h3>A custom tite</h3>
        <p>A very crucial information about form-header</p>
      </div>

      <div slot="form-fields">
        <input type="text" placeholder="Enter name" required /><br /><br />
        <input type="password" placeholder="Enter password" required /> <br />
        <br />
      </div>

      <div slot="form-controls">
        <button>Submit your form</button>
      </div>
    </app-slot>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import SlotFile from "./components/SlotFile";

export default {
  name: "App",
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "app-slot": SlotFile,
  },
  data: function () {
    return {
      title: "Independence day",
      anotherTitle: "A super cool Dynamic title",
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


